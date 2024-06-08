export const convertTaskDate = (date: string): string => {
  const newDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (newDate.toDateString() === today.toDateString()) return 'Today';
  else if (newDate < today) return 'Overdue';
  else if (newDate.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
  else {
    const timeDiff = newDate.getTime() - today.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return `${diffDays - 1} Days Left`;
  }
};
