/*
Write a function productsExceptIndex() that takes an array of integers and returns an array of the products.

For example, given:
  [1, 7, 3, 4]

your function would return:
  [84, 12, 28, 21]

by calculating:
  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

NOTE: Do not use division in your solution.
*/

const productsExceptIndex = (array) => {
  const products = [];
  for (let i = 0; i < array.length; i++) {
    let newArray = array.slice();
    newArray.splice(i, 1);
    products[i] = 1;
    for (let j = 0; j < newArray.length; j++) {
      products[i] *= newArray[j];
    }
  }
  return products;
};

console.log(productsExceptIndex([1, 7, 3, 4]));
