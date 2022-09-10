///Sumando matrices///


let alphabet = "abcdefghijklmnñopqrstuvwxyz";  //abecedario

function rotString(words, n){
    let Neword = "";    //palabra rotada
    let index = (char, n) => (alphabet.indexOf(char) + n) % 27;

    words.split("").map(char => Neword += alphabet[index(char, n) >= 0 ? index(char, n):index(char, n) + 27]); //explicado abajo

    return Neword;
}

console.log(rotString("abcd", -1));


/*
    EXPLICACION DE LA LINEA 8 y 6

    --Convierte la palabra de un string a un arreglo para poder usar map
    --Recorre cada letra y le agrega a la nueva palabra, la letra del abecedario que es igual a:
        --El modulo "para descontar las vueltas"
        --de la suma de el numero de desplazamiento dado "n" + indice en el abecedario de la letra a desplazar
        
        -:-En resumen la funcion index obtiene el indice de la nueva letra tomando encuenta las vueltas extra

    --luego si eso es mayor a 0 debuelbe el indice
    --si es menor a 0 debuelve el indice+27 para dar la vuelta al abecedario y que empieze de atras
*/