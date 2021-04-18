//local scope
//global scope
//enclose something

var ai = 10
function add(){
    var bi = 20
    return ai+bi
}

console.log(add())
console.log(ai)
console.log(bi)
30
10
Uncaught ReferenceError: bi is not defined
    at <anonymous>:9:13

// variable that can be access outside the curly bracket and inside also that is in global scope
// variable that can be access only inside the curly bracket is in local scope
