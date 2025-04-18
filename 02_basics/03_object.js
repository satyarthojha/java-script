//Singleton
// This is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
// The singleton pattern is often used to manage shared resources, such as database connections or configuration settings.

const mySym=Symbol("key1")



//object.create


                       //object literals
const JsUser = {
    name:"Satyarth", //key ko aap " "comma ke ander bhi define ker skte hai aur baher bhi
    "full name":"Satyarth ojha",
    [mySym]:"mykey1",
    age:20,
    location:"India",
    email:"satyarthojha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Maonday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
//console.log(JsUser."full name")  wrong method
console.log(JsUser["full name"])//ager key " "invertd comma ke ander define hai to aap .ka use nhi ker skte then aap ko [] use kerna padega

JsUser.email="satyarthojha670@gmail.com"//email ko change ker diya
Object.freeze(JsUser)//object ko freeze ker diya hai ab aap is object ko change nhi ker skte
//Object.freeze() method freezes an object. A frozen object can no longer be changed. Frozen objects can still have their properties read. The values of the properties can still be changed.

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//console.log(JsUser.greetingTwo())//this keyword is used to refer to the current object. It is used to access the properties and methods of the current object.