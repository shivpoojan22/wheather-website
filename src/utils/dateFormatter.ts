export const getDayName = (date: Date): string => {
  return new Intl.DateTimeFormat('en-IN', { weekday: 'long' }).format(date);
};

export const getNextNDays = (n: number): Date[] => {
  return Array.from({ length: n }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  });
};