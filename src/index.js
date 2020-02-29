
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return [];
  }
  
  if (matrix.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      result.push(...matrix[i]);
    }
    
    if (i % 2 !== 0) {
      result.push(...matrix[i].reverse());
    }
  }

  return result;
}
