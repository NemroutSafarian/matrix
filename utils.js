module.exports = {
    multiplyMatrices: function(matrix1, matrix2){
        let finalMatrix = [];
        if(matrix1[0].length !== matrix2.length) {
            return null;
        }
        let productSum = 0;
        for(let row = 0; row < matrix1.length; row++) {
            finalMatrix.push([]);
            for(let m = 0; m < matrix2[0].length; m++) {
                for(let n = 0; n < matrix2.length; n++) {
                    productSum = productSum + matrix1[row][n] * matrix2[n][m];
                }
                finalMatrix[row].push(productSum);
                productSum = 0;
            }
        }
        return finalMatrix;
    },
    matrixResult: function(finalMatrix){
        if(finalMatrix === null) return;
        let matrixString = "";
        for(let row = 0; row < finalMatrix.length; row++){
            for(let column = 0; column < finalMatrix[0].length; column++){

                matrixString = matrixString + finalMatrix[row][column] + '\t'; 

            }
            matrixString += '\n';
        }
        return matrixString;
    }
}