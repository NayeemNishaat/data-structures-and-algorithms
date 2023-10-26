// const startDate = new Date("2023-10-20 00:00:00Z");
// const endDate = new Date("2023-10-27 23:59:59Z");
// const interval = 7;

// function getCurrentWeekRange(startDate, endDate, interval) {
//   if (!interval) return { startDate, endDate };

//   endDate = endDate.getTime();
//   startDate = startDate.getTime();
//   const currentDate = new Date().getTime();
//   // console.log(new Date(currentDate));
//   let tempDate = new Date(startDate);
//   let nextDate = tempDate.setDate(tempDate.getDate() + interval);

//   if (endDate <= startDate)
//     throw new Error("End date must be greater than start date.");

//   while (nextDate < endDate) {
//     if (currentDate < nextDate)
//       return {
//         startDate: new Date(startDate),
//         endDate: new Date(nextDate - 1)
//       };
//     else {
//       startDate = nextDate;
//       tempDate = new Date(nextDate);
//       nextDate = tempDate.setDate(tempDate.getDate() + interval);
//     }
//   }

//   return { startDate: new Date(startDate), endDate: new Date(endDate) };
// }

// console.log(getCurrentWeekRange(startDate, endDate, interval));

// console.log(new Date("2023-10-26 23:59:59-05:00"), new Date());
console.log(new Date("2023-10-26 23:59:59-05:00"), new Date());
