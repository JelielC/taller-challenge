import { DateObject } from "react-multi-date-picker";

export const Locale = {
  sunday: "Dom",
  monday: "Seg",
  tuesday: "Ter",
  wednesday: "Qua",
  thursday: "Qui",
  friday: "Sex",
  saturday: "Sab",
  ok: "OK",
  today: "Hoje",
  yesterday: "Ontem",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
};
export const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
export const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function isBeforeToday(date: Date | undefined) {
  if (date !== undefined) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }
  return false;
}
export function getDateRangeFormatted(date1: string, date2: string) {
  try {
    if (date1 === "" || date2 === "") {
      return "Selecione o período";
    }
    const d1 = new Date(
      date1.includes("-") && !date1.includes(":")
        ? date1.replace(/-/g, "/")
        : date1
    );
    const dia1 = d1.getDate() < 10 ? `0${d1.getDate()}` : d1.getDate();
    const mes1 =
      d1.getMonth() + 1 < 10 ? `0${d1.getMonth() + 1}` : d1.getMonth() + 1;
    const d2 = new Date(
      date2.includes("-") && !date2.includes(":")
        ? date2.replace(/-/g, "/")
        : date2
    );
    const dia2 =
      d2.getDate() < 10
        ? `0${d2.getDate() === 0 ? 1 : d2.getDate()}`
        : d2.getDate();
    const mes2 =
      d2.getMonth() + 1 < 10 ? `0${d2.getMonth() + 1}` : d2.getMonth() + 1;
    const ano2 = d2.getFullYear();
    const data_hora = `${dia1}/${mes1} até ${dia2}/${mes2}/${ano2}`;
    return data_hora;
  } catch (error) {
    return "Selecione o período";
  }
}
export function getDateFormatted(date: DateObject) {
  return `${date.day}/${date.month.number}/${date.year}`;
}

export function getDateFormattedToDDMMYYYY(dateStr: string) {
  const date = new Date(
    dateStr.includes("-") && !dateStr.includes(":")
      ? dateStr.replace(/-/g, "/")
      : dateStr
  );
  const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const mes =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const ano = date.getFullYear();
  return `${dia}/${mes}/${ano}`;
}
export function getDateFormattedToDDMMYYYYWithHyphen(dateStr: string) {
  const date = new Date(
    dateStr.includes("-") && !dateStr.includes(":")
      ? dateStr.replace(/-/g, "/")
      : dateStr
  );
  const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const mes =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const ano = date.getFullYear();
  return `${ano}-${mes}-${dia}`;
}
