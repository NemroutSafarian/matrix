const utils = require("./utils")

const matrix1 = [[3, 6, 12], 
                [16, 18, 20],
                [4, 5, 9]];


const matrix2 = [[6, 8, 9],
                [7, 11, 5],
                [12, 25, 30]];

let finalMatrix = utils.multiplyMatrices(matrix1, matrix2);
let matrixString = utils.matrixResult(finalMatrix);

console.log(matrixString)

