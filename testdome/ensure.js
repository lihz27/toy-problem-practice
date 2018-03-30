/*
Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.
*/

const ensure = (value) => {
  if (value === null || value === undefined) {
    throw new Error('No arguments');
  }
  return value;
};