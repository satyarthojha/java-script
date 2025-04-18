//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Satyarth",
            lastname:"ojha"
        }
    }

}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4)
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)

console.log(Object.keys(tinderUser))//object ke keys ko array me convert ker dega
console.log(Object.values(tinderUser))//object ke values ko array me convert ker dega
console.log(Object.entries(tinderUser))//object ke keys and values ko array of array me convert ker dega
console.log(Object.entries(tinderUser).length)//object ke length ko de dega

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course={
    coursenmae:"js in hindi",
    price:"999",
    courseInsetructor:"Hitesh "
}
console.log(course.courseInsetructor)
console.log(course["courseInsetructor"])
const {courseInsetructor,price}=course//destructuring
console.log(courseInsetructor)//Hitesh
console.log(price)//999
//destructuring is a way to extract values from an object and assign them to variables.
// It is a shorthand syntax for extracting values from an object and assigning them to variables.

//json file structure
// {
//     "name":"satyarth",
//     "age":20,
//     "isLoggedIn":true,
//     "courses":["js","python"],
//     "courseDetails":{
//         "courseName":"js in hindi",
//         "price":999,
//         "isFree":false
//     }
// }