/*
Given a 2D array of 0s and 1s, 0 means water, 1 means land, connected 1s form an island, count the number of islands on the map. Land cannot be connected diagonally.

countIslands([[0,1,0,1,0], 
[0,1,0,0,1], 
[0,1,1,0,1]]); 
Answer: 3 
*/


const traverse = (matrix, x, y, rows, cols) => {
  if (matrix[x][y] === 1) {
    matrix[x][y] = 'TRUE'
    // check left of starting point x - 1, y
    if (x > 0) {
      traverse(matrix, x - 1, y, rows, cols);
    }
    // check right of starting point x + 1, y
    if (x < rows) {
      traverse(matrix, x + 1, y, rows, cols);
    }
    // check above starting point x, y - 1
    if (y > 0) {
      traverse(matrix, x, y - 1, rows, cols);
    }
    // check below starting point x, y + 1
    if (y < cols) {
      traverse(matrix, x, y + 1, rows, cols);
    }
  }
};

const countIslands = (islandMatrix) => {
  let count = 0;
  const numRows = islandMatrix.length;
  const numCols = islandMatrix[0].length;

  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numCols; j++) {
      if (islandMatrix[i][j] === 1) {
        traverse(islandMatrix, i, j, numRows - 1, numCols - 1);
        count++;
      }
    }
  }
  return count;
};

console.log(countIslands([[0, 1, 0, 1, 0],[0, 1, 0, 0, 1],[0, 1, 1, 0, 1]]));