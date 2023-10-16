export const convertDate = (date: Date) => {
  return new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};
