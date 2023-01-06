const bookedSlots = [
  {
    id: 1,
    create_at: "2023-01-05",
    update_at: "2023-01-05T00:00:00.000Z",
    user_id: 1,
    meeting_link: "Dummy Link",
    meeting_password: "123456",
    meeting_start: "2023-01-05T09:00:00.000Z",
    meeting_end: "2023-01-05T10:00:00.000Z",
    meeting_details: null
  },
  {
    id: 2,
    create_at: "2023-01-05",
    update_at: "2023-01-05T00:00:00.000Z",
    user_id: 1,
    meeting_link: "Dummy Link",
    meeting_password: "123456",
    meeting_start: "2023-01-05T10:00:00.000Z",
    meeting_end: "2023-01-05T11:00:00.000Z",
    meeting_details: null
  },
  {
    id: 3,
    create_at: "2023-01-05",
    update_at: "2023-01-05T00:00:00.000Z",
    user_id: 1,
    meeting_link: "Dummy Link",
    meeting_password: "123456",
    meeting_start: "2023-01-05T15:00:00.000Z",
    meeting_end: "2023-01-05T16:00:00.000Z",
    meeting_details: null
  },
  {
    id: 4,
    create_at: "2023-01-05",
    update_at: "2023-01-05T00:00:00.000Z",
    user_id: 1,
    meeting_link: "Dummy Link",
    meeting_password: "123456",
    meeting_start: "2023-01-05T16:00:00.000Z",
    meeting_end: "2023-01-05T17:00:00.000Z",
    meeting_details: null
  }
];
const ranges = [
  {
    start: "2023-01-05T08:00:00.000Z",
    end: "2023-01-05T12:00:00.000Z"
  },
  {
    start: "2023-01-05T14:00:00.000Z",
    end: "2023-01-05T17:00:00.000Z"
  }
];

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
const slots = getTimeSlots(ranges, 60);
console.log(slots);

function getAvailableTimeSlots(slots, bookedSlots) {
  const availableSlots = slots.filter(
    (slot) =>
      !bookedSlots.some(
        (bookedSlot) =>
          new Date(bookedSlot.meeting_start).getTime() >=
            new Date(slot.start).getTime() &&
          new Date(bookedSlot.meeting_end).getTime() <=
            new Date(slot.end).getTime()
      )
  );
  return availableSlots;
}
const availableSlots = getAvailableTimeSlots(slots, bookedSlots);
console.log(availableSlots);