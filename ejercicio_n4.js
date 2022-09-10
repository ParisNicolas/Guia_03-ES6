///Cuadrados magicos///

function magicSquare(matrix){
    let num = matrix[0].reduce((n1,n2) => n1+n2);   //defino el numero magico
    let magic = true;   //cubo magico
    let sumDiag = 0;    //suma de diagonales
    
    //Sumo las filas y compruebo
    matrix.map(arr => arr.reduce((n1,n2) => n1+n2) === num ? 0:magic=false);

    //sumo las columnas y compruebo
    /* Esto funciona asi:
        --Utilizo un for para contar las columnas
        --Sumo todos los elemtos de esa columna:
            ::Para ello tengo que mandarle al reduce un arreglo con la suma de los elemetos en la posicion "i"
                $Defino, guardo y devuelvo [..., "suma"]
        --Descompongo el arreglo [..., "suma"] en "suma" para luego copararlo con el numero magico
    */
    for (let i=0; i<matrix.length; i++) {
        matrix.reduce((n1,n2) => {let arr = []; arr[i]=n1[i]+n2[i]; return arr})[i] === num ? 0:magic=false;
    }
    

    //sumo la primera diagonal y compruebo
    for (let i=0; i<matrix.length; i++) {
        sumDiag += matrix[i][i];
    }
    sumDiag === num ? 0:magic=false;
    sumDiag = 0;

    //sumo la segunda diagonal y compruebo
    for (let i=0; i<matrix.length; i++) {
        sumDiag += matrix[i][matrix.length-1-i];
    }
    sumDiag === num ? 0:magic=false;

    return magic; //retorno el valor

}


console.log(magicSquare([[2, 7, 6],[9, 5, 1],[4, 3, 8]]));