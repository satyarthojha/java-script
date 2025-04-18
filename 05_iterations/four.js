    // for in loop
const myObject={
    js:'JavaScript',
    cpp:'c++',
    rb:"rubby",
    swift:"swift by apple"
}
for(const key in myObject){
    console.log(key)
    console.log(myObject[kay]);
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const prog=["js","cpp","rb","swift"]
for(const key in prog){
    console.log(prog[key])
}

//for in ke help se app map ko iterare nhi ker skte hai

//but object ko iterate ker skte hai
const map=new Map()
map.set('IN',"India")
map.set('US',"America")
map.set('UK',"United Kingdom")

for(const key in map){
    console.log(key)
}// map iterable nhi hota hai aur (for in )loop unhi pe lagta hai vo iterate ho sake like array or object