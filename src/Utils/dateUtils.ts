export function dateWithTime(date: string | null, semArtigo = false) {
  if (date !== null) {
    const d = new Date(date);
    const dia = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const mes =
      d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    const ano = d.getFullYear();
    const horas = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
    const minutos = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    const horas_minutos = `${horas}:${minutos}`;
    const data_hora = `${dia}/${mes}/${ano} ${
      !semArtigo ? "at" : ""
    } ${horas_minutos}`;
    return data_hora;
  }
  return "";
}

export function getRangeDate(date1: Date, date2: Date) {
  const dia1 = date1.getDate() < 10 ? `0${date1.getDate()}` : date1.getDate();
  const mes1 =
    date1.getMonth() + 1 < 10
      ? `0${date1.getMonth() + 1}`
      : date1.getMonth() + 1;
  const ano1 = date1.getFullYear();
  const dia2 =
    date2.getDate() < 10
      ? `0${date2.getDate() === 0 ? 1 : date2.getDate()}`
      : date2.getDate();
  const mes2 =
    date2.getMonth() + 1 < 10
      ? `0${date2.getMonth() + 1}`
      : date2.getMonth() + 1;
  const ano2 = date2.getFullYear();
  const data_hora = `${dia1}/${mes1}/${ano1} a ${dia2}/${mes2}/${ano2}`;
  return data_hora;
}

export function isDateBetweenDateInterval(dateInit: string, dateEnd: string) {
  const today = new Date();
  const date_init = new Date(dateInit);
  const date_end = new Date(dateEnd);
  if (today >= date_init && today <= date_end) {
    return true;
  }
  return false;
}
