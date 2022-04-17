export default (date: Date, times: number, startOfDay = false) => {
  const startDate = new Date(date);
  if (startOfDay) {
    startDate.setHours(0, 0, 0, 0);
  }
  const startDateValue = startDate.valueOf();
  const dates = [];
  for (let i = 0; i < times; i++) {
    const offset = 1000 * 60 * 60 * 24; // 1 day
    const offsetDay = i * offset;
    const result = new Date(startDateValue - offsetDay);
    dates.push(result);
  }
  return dates;
};
