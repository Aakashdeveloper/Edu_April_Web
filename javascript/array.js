array is a collection of homogenious as well as hetrogenious data type 

var a = [1,3,4,34,46,23,572,66,52] (array of number)
var b = ['ef','gf','eerg','dvge','gegerg'] (array of strings)
var c = [true,true,false,true,false] (array of Boolean)

var d = [43,'3t','erger',true,54,false,78,'ew']

var city = ['London','Delhi','NewYork','Amsterdam']
undefined
typeof(city)
"object"
typeof(city[0])
"string"
city[0]
"London"
city[1]
"Delhi"
city.length
4
city[city.length-1]
"Amsterdam"

var city = ['London','Delhi','NewYork','Amsterdam']
city.push('Venice')
5
city
(5) ["London", "Delhi", "NewYork", "Amsterdam", "Venice"]
city.push('Helsinki')
6
city
(6) ["London", "Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki"]
city.push('Dubai','Nice')
8
city
(8) ["London", "Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki", "Dubai", "Nice"]

var city = ["London", "Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki", "Dubai", "Nice"]
city.pop()
"Nice"
city
(7) ["London", "Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki", "Dubai"]
city.pop()
"Dubai"
city
(6) ["London", "Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki"]
city.pop(2)
"Helsinki"
city
(5) ["London", "Delhi", "NewYork", "Amsterdam", "Venice"]
city.pop(2000000000)
"Venice"


var city = ["London", "Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki", "Dubai", "Nice"]
undefined
city.shift()
"London"
city
(7) ["Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki", "Dubai", "Nice"]
city.unshift('Paris')
8
city
(8) ["Paris", "Delhi", "NewYork", "Amsterdam", "Venice", "Helsinki", "Dubai", "Nice"]


push > add in the end of the array
unshift > add in begining of the array
pop > remove last value of the array
shift> remove the first value of the array

//////////////
var city = ["Paris", "Delhi", "NewYork", "Amsterdam"]
city.splice(index, deletecount, values)
undefined
city.splice(2,0,'Red','Yellow')
[]
city
(6) ["Paris", "Delhi", "Red", "Yellow", "NewYork", "Amsterdam"]
city.splice(3,1)
["Yellow"]
city
(5) ["Paris", "Delhi", "Red", "NewYork", "Amsterdam"]
city.splice(1,2,'Audi','BMW')
(2) ["Delhi", "Red"]
city
(5) ["Paris", "Audi", "BMW", "NewYork", "Amsterdam"]

var a  =[1,2,3,4]
var b =['a','b','c','d']
undefined
a+b
"1,2,3,4a,b,c,d"
a.concat(b)
(8) [1, 2, 3, 4, "a", "b", "c", "d"]

var myarr = ["London", "Delhi", ['red','yellow',['Audi','Skoda','Bmw'],'green','orange'], "Venice", "Helsinki"]
undefined
myarr[0]
"London"
myarr[2]
(5) ["red", "yellow", Array(3), "green", "orange"]
myarr[2][1]
"yellow"
myarr[2][2]
(3) ["Audi", "Skoda", "Bmw"]
myarr[2][2][0]
"Audi"
myarr[2][2][1]
"Skoda"

var myarr = ["London", "Delhi", ['red','yellow',['Audi','Skoda','Bmw'],'green','orange'], "Venice", "Helsinki"]

undefined
myarr.flat()
(9) ["London", "Delhi", "red", "yellow", Array(3), "green", "orange", "Venice", "Helsinki"]
myarr.flat(2)
(11) ["London", "Delhi", "red", "yellow", "Audi", "Skoda", "Bmw", "green", "orange", "Venice", "Helsinki"]


var myarr = ["London", "Delhi", 1,33,62,"Skoda", "Bmw", "green", "Helsinki"]
undefined
myarr.indexOf('Delhi')
1
myarr.indexOf('Venice')
9
myarr.indexOf(62)
4
myarr.indexOf(99)
-1
myarr.indexOf('Mumbai')
-1

var myarr = ["London", "delhi", 1,33,62,"Skoda", "Bmw",true, "green",6, "Helsinki"]
undefined
myarr.sort()
(11) [1, 33, 6, 62, "Bmw", "Helsinki", "London", "Skoda", "delhi", "green", true]
var myarr = ["London", "delhi", 1,33,62,"Skoda", "Bmw",true, "green",6, "Helsinki",'Zebi']
undefined
myarr.sort()
(12) [1, 33, 6, 62, "Bmw", "Helsinki", "London", "Skoda", "Zebi", "delhi", "green", true]
var myarr = ["London", "delhi", 1,33,62,"Skoda", "Bmw",true, "green",6, "Helsinki",'zebi']
undefined
myarr.sort()
(12) [1, 33, 6, 62, "Bmw", "Helsinki", "London", "Skoda", "delhi", "green", true, "zebi"]


var a = "hi"
var b = ["Hi","Bie"]

var a = "hi"
var b = ["Hi","Bie"]
undefined
Array.isArray(a)
false
Array.isArray(b)
true