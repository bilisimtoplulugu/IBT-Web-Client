export default (date) => {
  //if (isNaN(date)) return;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const normalDate = new Date(date);
  //console.log(x.toLocaleDateString('tr-TR', options));
  return normalDate.toLocaleDateString('tr-TR', options);
/*   let normalDate = new Date(date);
  let month = normalDate.getMonth() + 1;
  if (month.length < 2) month = 0 + month;
  normalDate = `${normalDate.getFullYear()} - ${month} - ${normalDate.getDate()}`;
  return normalDate; */
};
