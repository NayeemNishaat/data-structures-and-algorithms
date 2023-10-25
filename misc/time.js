const startDate = new Date("2023-10-20 00:00:00Z");
const endDate = new Date("2023-10-17 23:59:59Z");
const interval = 5;

function getCurrentWeekRange(startDate, endDate, interval) {
  if (!interval) return { startDate, endDate };

  endDate = endDate.getTime();
  const currentDate = new Date().getTime();
  console.log(new Date(currentDate));
  let tempDate = new Date(startDate);
  let nextDate = tempDate.setDate(tempDate.getDate() + interval);
  // console.log(typeof nextDate);
  while (nextDate < endDate) {
    if (currentDate < nextDate) {
      return { startDate, endDate: new Date(nextDate - 1) };
    } else {
      startDate = new Date(nextDate);
      tempDate = new Date(nextDate);
      nextDate = tempDate.setDate(tempDate.getDate() + interval);
    }
  }

  return { startDate, endDate: new Date(endDate) };
}

console.log(getCurrentWeekRange(startDate, endDate, interval));
