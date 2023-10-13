import React from "react";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { TTransaction } from "../../Types/transaction";
import { dateWithTime } from "../../Utils/dateUtils";

interface ITableProps {
  data: TTransaction[];
}
function Table({ data }: ITableProps) {
  return (
    <TableContainer>
      {data.length > 0 ? (
        <ChakraTable variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((transaction) => (
              <Tr>
                <Td>{transaction.id}</Td>
                <Td>{dateWithTime(transaction.date)}</Td>
                <Td>{transaction.description}</Td>
                <Td>{transaction.amount}</Td>
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      ) : (
        <Text>Nothing to show</Text>
      )}
    </TableContainer>
  );
}

export default Table;
