var a = 10
var b = 20
a+b
30

//es5
function add(a,b){
    return a+b
}

add(1,2)
3
add(5,3)
8
add('a','b')
"ab"

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = console.log(`Number ${a} is even`)
    }else{
        out = console.log(`Number ${a} is odd`)
    }
    return out
}
isEven(5)
Number 10 is odd

isEven(10)
Number 10 is even


function add(a,b){
    return a+b
}

// arrow function (es6)
var add = (a,b) => { return a+b}
add(1,2)


var isEven = (userInput) => {
    var out;
    if(userInput%2==0){
        out = console.log(`Number ${a} is even`)
    }else{
        out = console.log(`Number ${a} is odd`)
    }
    return out
}