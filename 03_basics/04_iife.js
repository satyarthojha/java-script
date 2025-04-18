//Immediately Invoked Function Expressions(IIFE)

// A function that runs as soon as it is defined

function chai(){
    console.log("DB CONNECTED")
}
chai()

(function chai(){//name IIFE
    console.log(`DB CONNECTED`)
})();

( (name) =>{//name is parameter of IIFE
    console.log(`DB CONNECTED ${name}`)
})("Satyarth")

//if we use more than 1 IIFE function then we have to use ; after all function except the last one