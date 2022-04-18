export default (date: Date, times: number, startOfHour = false): Date[] => {
  const startTime = new Date(date);
  if (startOfHour) {
    startTime.setMinutes(0, 0, 0);
  }
  const startTimeValue = startTime.valueOf();
  const dates = [];
  for (let i = 0; i < times; i++) {
    const offset = 1000 * 60 * 60; // 1 hour
    const diff = i * offset;
    const result = new Date(startTimeValue - diff);
    dates.push(result);
  }
  return dates;
};
