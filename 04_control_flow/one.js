const score=200
if(score>100){
    let power="fly"
    console.log(`User power:$(power)`);
}

//if(balance>500) console.log("test"),console.log("teat2");

if(balance<500){
    Console.log("less than");
}
else if(balance<750){
    console.log("less than 750");
}
else{
    console.log("less than 1200");
}

const userLoggedIn=true
const debitCard=true


if(userLoggedIn && debitcard){
    console.log("Allow to buy course")
}

const loggedInFromGoogle=false
const loggedInfromEmail=true

if(loggedInFromGoogle || loggedInfromEmail){
    console.log("User loggedIn")
}

