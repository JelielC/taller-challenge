import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import Table from "./Components/Table";
import "./App.css";
import { TTransaction } from "./Types/transaction";
import { Flex } from "@chakra-ui/react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { FilterSelect } from "./Components/Table/FilterSelect";
import { getRangeDate, isDateBetweenDateInterval } from "./Utils/dateUtils";
import { months, weekDays } from "./Utils/daysAndMonths";

function App() {
  const transactions: TTransaction[] = [
    {
      id: 1,
      date: "2017-07-16T19:20+01:00",
      description: "description 1",
      amount: 10,
    },
    {
      id: 2,
      date: "2018-07-16T19:20+01:00",
      description: "description 2",
      amount: 20,
    },
    {
      id: 3,
      date: "2019-07-16T19:20+01:00",
      description: "description 3",
      amount: 30,
    },
    {
      id: 4,
      date: "2020-07-16T19:20+01:00",
      description: "description 4",
      amount: 40,
    },
    {
      id: 5,
      date: "2021-07-16T19:20+01:00",
      description: "description 5",
      amount: 50,
    },
    {
      id: 6,
      date: "2022-07-16T19:20+01:00",
      description: "description 6",
      amount: 123,
    },
  ];
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [dataIni, setDataIni] = useState<Date>({} as Date);
  const [dataFim, setDataFim] = useState<Date>({} as Date);
  const datePickerRef = useRef<any>();
  function handleChangeDataFim(date: Date) {
    if (date) {
      setDataFim(date);
    }
  }
  function handleChangeDataIni(date: Date) {
    setDataIni(date);
  }

  const changeDate = (newValue: DateObject[]) => {
    if (newValue[1] === undefined) {
      handleChangeDataFim({} as Date);
      return handleChangeDataIni(newValue[0].toDate());
    }
    if (newValue[0].toDate() >= newValue[1].toDate()) {
      handleChangeDataIni(newValue[1].toDate());
      return handleChangeDataFim(newValue[0].toDate());
    }
    handleChangeDataIni(newValue[0].toDate());
    handleChangeDataFim(newValue[1].toDate());
    return datePickerRef.current.closeCalendar();
  };

  const transactionsFiltered = transactions
    .filter((item) =>
      isDateBetweenDateInterval(String(dataIni), String(dataFim))
    )
    .map((item) => item);

  return (
    <div className="App">
      <Flex
        flexDirection="column"
        w="100%"
        justifyContent="flex-start"
        gap="18px"
        pl="12px"
        pr="12px"
      >
        <DatePicker
          onOpen={() => setIsOpenCalendar(true)}
          onClose={() => setIsOpenCalendar(false)}
          minDate={new Date()}
          ref={datePickerRef}
          render={(value: any, openCalendar: any) => {
            return (
              <FilterSelect
                onClick={openCalendar}
                isRequired
                hasError={false}
                isOpen={isOpenCalendar}
              >
                {dataFim.getDate === undefined
                  ? "Select the range date"
                  : `${getRangeDate(dataIni, dataFim)}`}
              </FilterSelect>
            );
          }}
          value={[dataIni, dataFim]}
          style={{ marginTop: "10px" }}
          arrow={false}
          format="DD/MM/YYYY"
          numberOfMonths={2}
          range
          weekDays={weekDays}
          months={months}
          onChange={(newValue: DateObject[]) => changeDate(newValue)}
        />
        <Table
          data={
            dataIni !== ({} as Date) && dataFim !== ({} as Date)
              ? transactionsFiltered
              : transactions
          }
        />
      </Flex>
    </div>
  );
}

export default App;
