export default (date: Date, times: number, startOfDay = false, startOfWeek = false): Date[] => {
  let startTime = new Date(date);
  if (startOfWeek) {
    const day = startTime.getDay();
    const firstOfWeek = startTime.valueOf() - 1000 * 60 * 60 * 24 * day;
    startTime = new Date(firstOfWeek);
  }
  if (startOfDay) {
    startTime.setHours(0, 0, 0, 0);
  }
  const startTimeValue = startTime.valueOf();
  const dates = [];
  for (let i = 0; i < times; i++) {
    const offset = 1000 * 60 * 60 * 24 * 7; // 1 week
    const diff = i * offset;
    const result = new Date(startTimeValue - diff);
    dates.push(result);
  }
  return dates;
};
