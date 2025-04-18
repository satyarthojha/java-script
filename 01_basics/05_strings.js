const name="Satyarth";
const repoCount=4;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Satyarth and my repo count is 4
//console.log(name + repoCount + "value")->bad practice
const gameName=new String('Satyarth-@-101')
console.log(gameName.length); 
console.log(gameName.__proto__); // String {}
console.log(gameName.toString()); // Satyarth
console.log(gameName.charAt(0)); // S
console.log(gameName.indexOf('S')); // 0
console.log(gameName.lastIndexOf('S')); // 0

const newString=gameName.substring(0,5); // work on =ve value only
console.log(newString); // Satya
console.log(gameName.slice(0,5)); // Satya  //work on -ve value also

const newStringOne="  Satyarth  ";
console.log(newStringOne.trim()); // Satyarth
console.log(newStringOne.trimStart()); // Satyarth
console.log(newStringOne.trimEnd()); // Satyarth

const url = "https://www.youtube.com/c/CodeWithSatyarth";
console.log(url.replace("CodeWithSatyarth", "Satyarth")); // https://www.youtube.com/c/Satyarth

console.log(url.includes("CodeWithSatyarth")); // true
console.log(url.includes("Sundar")); // false

console.log(gameName.split('-'));