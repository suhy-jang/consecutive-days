export const days = (date: Date, times: number, offset: number) => {
  let i = 0;
  const dates = [];
  while (i < times) {
    const offsetDays = i * offset * 86400000;
    dates.push(new Date(date.valueOf() - offsetDays));
    i++;
  }
  return dates;
};
