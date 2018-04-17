/*
Your program is to use the brute - force approach in order to find the Answer to Life, the Universe, and Everything. More precisely...rewrite small numbers from input to output. Stop processing input after reading in the number 42. All numbers at input are integers of one or two digits.


Example:
hitchhikersGuide([ 1, 2, 88, 42, 99 ]);                        // [ 1, 2, 88 ]
hitchhikersGuide([ 1, 3, 20, 17, 2, 88, 42, 57, 137, 251 ]);   // [ 1, 2, 3, 17, 20, 88 ]
*/

const hitchhikersGuide = (array) => {
  const index42 = array.indexOf(42);
  const toSort = array.splice(0, index42);
  const miniArray = toSort.sort((a, b) => {
    return a - b;
  });
  return miniArray;
};
