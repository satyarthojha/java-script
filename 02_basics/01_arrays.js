//array

const myArr=[0,2,4,5,4,6];
const myHeros=["batman","superman","spiderman"];

const myArr2= new Array(1,2,3,4,5,6,7);
console.log(myArr[3]);

//Array methods

myArr.push(4)
myArr.push(44)
myArr.push(483)
myArr.pop()

myArr.unshift(101)//101 ko starting me add ker dega
myArr.shift()// 0 index element ko delete ker dega

console.log(myArr.includes(9));//true or false me ans hoga ager element present hai then true otherwise false
console.log(myArr.indexOf(3));//if 3 is present in array then you will get index of 3 otherwise you get -1

const newArray=myArr.join();//join()->array ko string me convert  ker deta hai
console.log(typeof newArray);//string me convert ho jayega
console.log(newArray);//array ko string me convert ker dega

//slics ,splice
//slice() method is used to copy the elements of an array and return a new array.
// It does not change the original array.
//slice(startIndex, endIndex)
//startIndex is inclusive and endIndex is exclusive
//slice() method does not change the original array.
//splice() method is used to add or remove elements from an array.
// It changes the original array.
//splice(startIndex, deleteCount, item1, item2, ...)
//startIndex is the index at which to start adding or removing elements

console.log("A",myArr);
const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3,100,200);//splice() method changes the original array.
console.log("C",myArr);
console.log(myn2);//splice() method returns the deleted elements