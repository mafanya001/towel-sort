module.exports = function towelSort (matrix) {
    if (matrix === undefined){
        return [];
      }
    for (i=1; i<matrix.length; i=i+2) {
    matrix[i] = matrix[i].reverse();
  };
  matrix = matrix.concat();
  return matrix.flat(1);
}
