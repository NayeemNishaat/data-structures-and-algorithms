function getTimeSlots(ranges, interval) {
  const slots = [];

  ranges.forEach((range) => {
    while (new Date(range.start).getTime() < new Date(range.end).getTime()) {
      slots.push({
        start: range.start,
        end:
          new Date(range.start).setMinutes(
            new Date(range.start).getMinutes() + interval
          ) > new Date(range.end).getTime()
            ? range.end
            : new Date(
                new Date(range.start).setMinutes(
                  new Date(range.start).getMinutes() + interval
                )
              ).toISOString()
      });
      range.start = new Date(
        new Date(range.start).setMinutes(
          new Date(range.start).getMinutes() + interval
        )
      ).toISOString();
    }
  });
  return slots;
}

const slots = getTimeSlots(
  [
    {
      start: "2001-01-01T08:00:00.000Z",
      end: "2001-01-01T12:00:00.000Z"
    },
    {
      start: "2001-01-01T14:00:00.000Z",
      end: "2001-01-01T17:00:00.000Z"
    }
  ],
  90
);
console.log(slots);
