///Factores primos///

//encontrador de numeros primos hasta el 10.000
let primos=[2,3]  //[2,3,5,7,11,13,17,19]
let bool=false;   //True=numero primo

for (let i=3;i<100;i+=2){
    for (let a=3;a<i;a+=2){
        if(i%a === 0){
            bool=false;
            break;
        }
    }
    if(bool){
        primos.push(i);
    }
    bool=true;
}
//console.log(primos);



function primeFactors(num){
    let factores = [];

    //recorre los numeros primos y mientras el numero sea divisible lo divide por el numero primo
    //cada bucle guarda el primo y modifica el valor de num
    primos.map(primo => {if(num!=1){while(num%primo===0) {factores.push(primo); num/=primo;}}});

    return factores;
}

console.log(primeFactors(100));