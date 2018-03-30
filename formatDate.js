/*
Write a function that converts a date in the M/D/YYYY format to a YYYYMMDD format. 

NOTE: The input and output are strings

Example:
formatDate("11/25/2018"); // "20181125"
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