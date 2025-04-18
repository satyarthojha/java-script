const userEmail="satyarthojha@gamil.com"
if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}

               //falsy values

   //false,0,-0, BigInt 0n, "",null,undefined,nan    
   //in value ko ager use kaoge contional statement then the never run     

              //truthy values
   //"0",'false'," "[],{},function(){}
   //double inverted or single inverted comma ke ander kuch bhi likho 
   // ge to vo truthy values ban jayegi(it means ager is use these values in if 
   // else conditon statement then conditon is alwayrs true and statement always run)

const array=[]
if(array.length===0){
    console.log("array is empty")
}  

const user={}
if(Object.keys(user).length===0){
    console.log("user is empty")
}   

// false==0 //true
// false=="" //true
// false==null //true
// false==undefined //true
// false==NaN //true
// false==BigInt(0) //true
// false==[] //true
// false=={} //true
// false==function(){} //true
// 0=="" //true
// 0==null //true
// 0==undefined //true

 //              nullish coalescing operator(??)
 //firebase ya kahi aur se koi data aa raha hai to usko check karne ke liye use hota hai  ager undefined or null hai to uskko koi aur value ane side se de do
let val1=5??10
let val2=null??10
let val3=undefined??10
let val4=null??10??34
//jo bhi value pehle defined aa jayege usko le lega
console.log(val1,val2,val3,val4)//5 10 10 10

//         ternary operator
//(condition ? true : false)  //condition true hai to true wala part chalega warna false wala part chalega

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80")

//<,>,<=,>=,==,===,!=,!==,&&,||