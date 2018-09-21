/*
Given array of sticks with different lengths. Array is not sorted. Find shortest stick, remove sticks of that length, subtract one from remaining sticks, continue until no more sticks.

Return number of sticks for each round.
*/

function cutSticks(lengths) {
  if (!Array.isArray(lengths) || lengths.length === 0) {
    return []
  }
  if (lengths.length === 1) {
    return [1]
  }
  const totalSticks = []
  lengths.sort((a, b) => a - b)
  while (lengths.length > 0) {
    totalSticks.push(lengths.length)
    const shortest = lengths[0]
    const lastShortestIndex = lengths.lastIndexOf(shortest)
    lengths = lengths.slice(lastShortestIndex + 1, lengths.length)
    lengths.map(stick => stick - 1)
  }
  return totalSticks
}

console.log(cutSticks([6, 5, 4, 4, 2, 2, 8])) // [6,4,2,1]
