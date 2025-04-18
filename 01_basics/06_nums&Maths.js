const score=400
const balance =new Number(100) //explicity define

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=23.5392
console.log(otherNumber.toPrecision(2)); // 24

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2,3)); // 8
console.log(Math.min(4,5,76,3,5));
console.log(Math.max(4,5,76,3,5)); // 76
console.log(Math.random()); // 0.123456789  value always bee lie in 0 to 1
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min); // 10 to 20
console.log(Math.floor(Math.random()*(max-min))+min); // 10 to 19