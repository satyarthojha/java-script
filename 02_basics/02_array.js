const marvel_heros=["thor","ironman","hulk","spiderman"];
const dc_heros=["batman","superman","wonderwoman","greenlantern"];

//marvel_heros.push(dc_heros)

console.log(marvel_heros);//array of array
//console.log(marvel_heros[4][2])

const allHeros=marvel_heros.concat(dc_heros)//concat() method is used to join two or more arrays.
console.log(allHeros);//array of array

const all_new_heros = [...marvel_heros,...dc_heros]//spread operator is used to join two or more arrays.

const another_array=[1,3,2,4,[5,6,3],7,[8,9,[32,43,64],6]];

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Satyarth"))
//Array.isArray() method returns true if the argument is an array, otherwise false.
console.log(Array.isArray([1,2,3,4]))//true
console.log(Array.isArray({name:"Satyarth",age:20}))//false


console.log(Array.from("Satyarth"))//array from string
//Array.from() method creates a new array from an array-like or iterable object.
// It is useful for converting objects that are not arrays into arrays.
//Array.from() method can also take a second argument, which is a map function that is applied to each element of the array.



console.log(Array.from({name:"Satyarth",age:20}))//intersying you have to first decide what you want to convert into array(key or value)

let a=23
let b=1;
let c=4
console.log(Array.of(a,b,c))
//Array.of() method creates a new array instance from a variable number of arguments, regardless of the number or type of the arguments.
// It is similar to Array() constructor, but it does not create an array from an array-like object.
