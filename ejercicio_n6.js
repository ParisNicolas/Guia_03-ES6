///Patrones repetidos///

function repeatPattern(str1, str2){
    let charValue1 = {}; //guarda el valor de cada letra
    let charValue2 = {};
    let n = 0;  //valor de letra
    let condicion = true; //condicion de patron repetido

    /*Relaciona cada letra con un numero:
        --Se fija si la letra ya esta en el almacen, si esta no hace nada y sino:
            --Agraga la letra con el valor correspondiente y luego le suma 1 al "n" para la proxima
        */
    str1.split("").map(letra => {charValue1.hasOwnProperty(letra) ? 0:(charValue1[letra]=n, n++)});
    n=0;
    str2.split("").map(letra => {charValue2.hasOwnProperty(letra) ? 0:(charValue2[letra]=n, n++)});

    
    //guarda el patron correspondiente con el valor de cada letra
    let pattern1 = str1.split("").map(letra => charValue1[letra]);
    let pattern2 = str2.split("").map(letra => charValue2[letra]);
    
    //Si la longitud es distinta el patron no se cumple
    str1.length!==str2.length ? condicion=false:0;

    //Recorre el patron de cada string y controla que sean iguales
    for(let i = 0; i<pattern1.length; i++){
        pattern1[i]===pattern2[i] ? 0:condicion = false;
    }

    console.log(charValue1);
    console.log("Patron:  " + pattern1 + "\n");
    console.log(charValue2);
    console.log("Patron:  " + pattern2 + "\n");

    return condicion;
}

console.log(repeatPattern("ABCBA", "BCDCB"));