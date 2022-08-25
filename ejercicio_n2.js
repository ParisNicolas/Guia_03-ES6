function CopyPairs(arr){
    let pares = []; //almacena pares

    //recorre el arreglo y divide cada numero por 2
    //si el resto es 0 pushea el numero sino no hace nada
    arr.map(n => n % 2 === 0 ? pares.push(n):0); 

    return pares;
}
console.log(CopyPairs([10,18,191,13,248]));