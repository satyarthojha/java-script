//let & const me scoping kam kerti hai but var pe scoping kam nhi 
//karte hai isleye hum usko code me use nhi kerte hai

if(true){
    var a=100
}
console.log(a); //100
//let & const me scoping kam kerti hai but var pe scoping kam nhi

let c=300
if(true){
     let c=10  //in c++ you can not declare same variable more than 1 time
    console.log(c); //10
}
console.log(c)//300
//let & const me scoping kam kerti hai but var pe scoping kam nhi kerti

let b=300
if(true){
    b=10
    console.log(b); //1n
}
console.log(b)//300

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(usernmae);
    }
    two()
}
one()
//+++++++++++++++++++intersting +++++++++++++++++++++++++

addone(4)//c++ me aisa nhi hota hai
function addone(num){  // when you declare the function in this way then u van call function before the function declaration
    return num+1 
}
addone(4)

const addTwo=function(num){// // when you declare the function in this way then u can not call function before the function declaration
    return num+2 
}
addTwo(5)