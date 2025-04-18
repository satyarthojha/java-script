const user={
    usename:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="Satyarth"
user.welcomeMessage()

console.log(this) //this is window object in browser and global object in nodejs
// this is used to refer the current object in which it is used

//this ko hum object ke ander use karte hai to refer the current object in which it is used
//this ko hum function ke ander use nhi kerte  hai to refer the current function in which it is used

//+++++++++++arraow function +++++++++++++++++++++++++
const chai = function(){
    let username="satyarth"
    console.log(this.username);
}

const chai2 = () =>{
    let username="satyarth"
    console.log(this.username); //undefined
}
const addTwo = (num1,num2) =>{
    return num1+num2  //{} ager use kiye ho to return likhna padega
}

const addTwo2 = (num1,num2) => num1+num2 //{} nhi use kiye ho to return likhna nahi padega
const addTwo3 = (num1,num2) => (num1+num2 )//
console.log(addTwo(3,4))