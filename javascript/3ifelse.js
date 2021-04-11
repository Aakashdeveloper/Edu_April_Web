if(condition){
    // do something
}else{
    // do something
}

var a = 8878
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 8878 is even

var a = 88781
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 88781 is odd

var name = "Priya"
if(name == "Nikita"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Priya"){
    console.log(`Hi ${name} you are user`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} i dont know `)
}
Hi Priya you are user

var a = 1
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
hii 

var a = 0
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
bie

var a = -1
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
hii

truthy  => any number either + or - except 0 / string / true 
falsy   => 0 , false, null ,undefined

///////////
Ternary (single line if else)
var a = 10
a>10 ? "Hii" : "Bie"
"Bie"
var a = 10
a<10 ? "Hii" : "Bie"
"Bie"
var a = 10
a==10 ? "Hii" : "Bie"
"Hii"

var a = 10
a>10 ? a+1 : a-1
9