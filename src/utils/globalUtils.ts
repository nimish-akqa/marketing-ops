export const convertDate = (date: string) => {
  return new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};
