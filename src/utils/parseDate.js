import dayjs from "dayjs";

function parseDate(date) {
  const originalDate = dayjs(date);

  return originalDate.format("YYYY.MM.DD");
}

export default parseDate;
