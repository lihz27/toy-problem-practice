/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.

n = 1   n = 2     n = 3         n = 4
 □        □         □             □
        □ □ □     □ □ □         □ □ □
          □     □ □ □ □ □     □ □ □ □ □
                  □ □ □     □ □ □ □ □ □ □
                    □         □ □ □ □ □
                                □ □ □
                                  □

Example:
For n = 2, the output should be shapeArea(n) = 5.  2^2 + 1 -> 2^2 + 1^2
For n = 3, the output should be shapeArea(n) = 13. 3^2 + 4 -> 3^2 + 2^2
For n = 4, the output should be shapeArea(n) = 25. 4^2 + 9 -> 4^2 + 3^2
*/

const shapeArea = (n) => {
  // pattern is n^2 + (n-1)^2 to get area
  return (Math.pow(n, 2) + Math.pow(n - 1, 2));
};

