/*
Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
*/

const formatDate = (userDate) => {
  const dateSplit = userDate.split('/');
  const year = dateSplit[2];
  let month = dateSplit[0];
  if (month.length === 1) {
    month = '0' + month;
  }
  let day = dateSplit[1];
  if (day.length === 1) {
    day = '0' + day;
  }
  const convertedDate = year + month + day;
  return convertedDate;
};