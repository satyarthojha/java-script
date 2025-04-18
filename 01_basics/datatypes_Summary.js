//data memeory me kis tarah se store hote hai aur kis tarah se aap data koacces ker skte ho 
// 1-> primitive (call by value , jo bhi aap change kerte ho is type ke data me vo copy me change hota hai na original value me)
// 7 types-> string number boolean null undefined symbol bigint

// 2->non primitive (call by reference, jo bhi aap change kerte ho is type ke data me vo original value me change hota hai na ki copy me)
// arrays,  objects .functions
//2->non primitive

const id=Symbol('123');
const id2=Symbol('123');
console.log(id===id2); // false

const bigNumber=BigInt(1234567890123456789012345678);
const bigNumber2=12345678901234567890123n;

//array
const heros=['thor','ironman','spiderman'];
const numbers=[1,2,3,4,5];

//object
let myObj={
    name:"Satyarth",
    age:20,
}
//function
const myFunction=function(){
    console.log("hello world");
}

console.log(typeof id);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                      //MEMORY
// 1-> primitive (call by value , jo bhi aap change kerte ho is type ke data me vo copy me change hota hai na original value me)

let myYoutubeName="CodeWithSatyarth";
let myYoutubeName2=myYoutubeName;
myYoutubeName="CodeWithSatyarth2";
console.log(myYoutubeName); //CodeWithSatyarth2
console.log(myYoutubeName2); //CodeWithSatyarth


// jab aap primitive type ke data ko change karte ho to vo copy me change hota hai na ki original value me
// 2->non primitive (call by reference, jo bhi aap change kerte ho is type ke data me vo original value me change hota hai na ki copy me)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="satyarth@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
