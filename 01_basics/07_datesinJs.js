//Date

let myDate=new Date();
console.log(myDate);

console.log(myDate.getFullYear()); // 2023
console.log(myDate.getMonth()+1); // 9 (0-11)
console.log(myDate.getDate()); // 5
console.log(myDate.toString());//Sun Apr 13 2025 10:42:57 GMT+0530 (India Standard Time)
console.log(myDate.toJSON());//2025-04-13T05:12:57.328Z

console.log(myDate.toDateString());  //Sun Apr 13 2025
//console.log(myDate.toLocalString());
console.log(typeof myDate); //object

let myCreatedDate=new Date(2025,3,5);
let myCreatedDate2=new Date(2025,0,23,5,3);
//console.log(myCreatedDate).toDateString; // 2025-01-23T05:03:00.000Z

let myCreatedDate1=new Date("01-14-20255")

let myTimeStamp=Date.now()
console.log(myTimeStamp); // 1696492810000    quiz me use kiya jata hai
console.log(myCreatedDate.getTime()); // 1701431600000
console.log(Math.floor(Date.now()/1000));

let newDate2=new Date();
console.log(newDate2);//2025-04-13T05:12:57.339Z
console.log(newDate2.getMonth()+1);//4
console.log(newDate2.getDate());//13

newDate2.toLocaleString('default',{
    weeday:"long",
    year:"numeric",
})
