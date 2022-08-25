let numbers = [20,34,23,10,4,2,5];

console.log(numbers.filter(n => n % 2 === 0).reduce((n1, n2) => n1 + n2));

console.log(numbers.map(n => n % 2 !== 0 ? n+1:n));