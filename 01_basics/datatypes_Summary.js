//data memeory me kis tarah se store hote hai aur kis tarah se aap data koacces ker skte ho 
// 1-> primitive (call by value , jo bhi aap change kerte ho is type ke data me vo copy me change hota hai na original value me)
// 7 types-> string number boolean null undefined symbol bigint

// 2->non primitive (call by reference, jo bhi aap change kerte ho is type ke data me vo original value me change hota hai na ki copy me)
// arrays,  objects .functions
//2->non primitive

const id=Symbol('123');
const id2=Symbol('123');
console.log(id===id2); // false

const bigNumber=BigInt(1234567890123456789012345678901234567890);
const bigNumber2=12345678901234567890123456789012345n;
