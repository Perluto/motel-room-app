export function dateCalculate(now, duration, period) {
  const currentDate = new Date(now);
  let result = currentDate;

  if (period === "week") {
    result = currentDate.getTime() + duration * 7 * 24 * 60 * 60 * 1000;
  } else if (period === "month") {
    result = currentDate.getTime() + duration * 30 * 24 * 60 * 60 * 1000;
  } else if (period === "year") {
    result = currentDate.getTime() + duration * 365 * 24 * 60 * 60 * 1000;
  }

  return result;
}

export function formatDate(date) {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
