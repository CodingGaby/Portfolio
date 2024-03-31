function formatDate(inputDate: Date) {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long'};
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}

export default formatDate;