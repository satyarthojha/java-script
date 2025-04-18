for(let i=1;i<10;i++){
    if(i==5){
        console.log("5 is my fav number")
        break
    }
    console.log(`value of i is ${i}`)
}

for(let i=1;i<10;i++){
    if(i==5){
        console.log("5 is my fav number")
        continue
    }
    console.log(`value of i is ${i}`)
}