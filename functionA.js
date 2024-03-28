// callback functions - functions passed as values into other functions and may or maynot be executed 
function functionA(func) {
//func()
console.log("i am inside a function A")
}

function functionB() {
    console.log("i am inside function B")
}

functionA(function someCoolName()  {
    console.log("inside anonymous function")
})

const name = "john"

function printName(word) {
    console.log(word)
}

printName(name)