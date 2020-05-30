export default (date) => {
  //if (isNaN(date)) return;
  let normalDate = new Date(date);
  let month = normalDate.getMonth() + 1;
  if (month.length < 2) month = 0 + month;
  normalDate = `${normalDate.getFullYear()} - ${month} - ${normalDate.getDate()}`;
  return normalDate;
};
