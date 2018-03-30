/*
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

rotateImage = (a) => {
  let rotated = [];
  let matrixSize = a.length;
  for (let i = 0; i < matrixSize; i++) {
    const initRow = Array(matrixSize).fill(0);
    rotated.push(initRow);
  }
  for (let i = 0; i < matrixSize; i++)  {
    for (let j = matrixSize - 1; j >= 0; j--) {
      for (let k = 0; k < a[j].length; k++) {
        rotated[k][matrixSize - 1 - j] = a[j][k];
      }
    }
  }
  return rotated;
}
