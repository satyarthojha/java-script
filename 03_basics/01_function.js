function addTwonumbers(num1,num2){
    console.log(num1+num2);
}

function addTwonumbers(num1,num2){
    let result=num1+num2;
    return result;
}
const result=addTwoNumbers(3,5);
console.log("The sum is: ",result);


function loginUserMessage(username){//we can also use default parameters in function
    

    if(username === undefinied){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Satyarth"));


function calculateCartPrice(...num1){//when user add multiple things in cart and u don't know how many things he will add in cart
    //then we can use rest operator to take multiple inputs in function
    return num1
}
console.log(calculateCartPrice(200,433,500,999))

//object pass in parameter

const user={
    username:"satyarth",
    price:200,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

//or we can also do this
handleObject({
    username:"satyarth",
    price:200,
})
handleObject(user)

//array pass in function

const myNewarray=[200,400,900,340]
function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue(myNewarray))//400