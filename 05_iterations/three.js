    // for of loop
const arr=[1,3,4,5,3,5]
for(const num of arr){
    console.log(num)
}

const greetings="Hello world!"
for(const char of greetings){
    console.log(char)
}

const map=new Map()
map.set('IN',"India")
map.set('US',"America")
map.set('UK',"United Kingdom")

console.log(map)
for(const key of map[]){
    console.log(key)
}

for(const [key,value] of map.entries()){
    console.log(key, ':-',value)
}

//for of ->ke help se object ko iteratre nhi kiya ja skta hai