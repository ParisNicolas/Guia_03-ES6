//Cuadrados magicos

function magicSquare(matrix){
    let valor = matrix[0].reduce((x,y) => x+y);

    console.log(matrix.map(arr => arr.reduce((x,y) => x+y) == valor));

    for(let i = 0; i<=3; i++){
        matrix.reduce((arr1, arr2) => arr1[i]+arr2[i])
    }

}


magicSquare([[2, 7, 6],
            [9, 5, 1],
            [4, 3, 8]]
);