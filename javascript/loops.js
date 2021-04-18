for 
for of
for in 
Map
filter

/////////
for > generate series of value or iterate over array
////
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var a = ["Paris", "Audi", "BMW", "NewYork", "Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Paris
VM1710:3 Audi
VM1710:3 BMW
VM1710:3 NewYork
VM1710:3 Amsterdam

var a = ["Paris", "Audi",['Red','Yellow','Green'], "BMW", "NewYork", "Amsterdam"]
for(i=0;i<a.length;i++){
    console.log(a[i])
}
Paris
Audi
(3) ["Red", "Yellow", "Green"]
BMW
NewYork
Amsterdam

for(i=0;i<a.length;i++){
    if(Array.isArray(a[i])){
        for(j=0;j<a[i].length;j++){
            console.log(a[i][j])
        }
    }else{
        console.log(a[i])
    }
}

Paris
VM1727:7 Audi
VM1727:4 Red
VM1727:4 Yellow
VM1727:4 Green
VM1727:7 BMW
VM1727:7 NewYork
VM1727:7 Amsterdam

//es6
var city = ["Paris", "Audi", "BMW", "NewYork", "Amsterdam"]
for(mycity of city){
    console.log(mycity)
}


var movie = {
    name:'Jab We Met',
    rating: 4.5,
    lang: 'Hindi'
 }

 for(keys in movie){
     console.log(keys)
}
name
rating
lang

 for(keys in movie){
     console.log(movie[keys])
}
Jab We Met
4.5
Hindi