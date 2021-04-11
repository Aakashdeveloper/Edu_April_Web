Regex 
Regular Expression
^$


var a = "hi"
a.match("^([a-z])$")
null
var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]
var a = "hii"
a.match("^([a-z]{2})$")
null
var a = "hii"
a.match("^([a-z]{2,5})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]0: "hii"1: "hii"groups: undefinedindex: 0input: "hii"length: 2__proto__: Array(0)
var a = "hii"
a.match("^([a-z]+)$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]


var a = "hi"
a.match("^([a-zA-Z0-9]+)$")

var a = "hi97FA"
a.match("^([a-zA-Z0-9]+)$")
(2) ["hi97FA", "hi97FA", index: 0, input: "hi97FA", groups: undefined]
var a = "hi97FA$"
a.match("^([a-zA-Z0-9$#]+)$")
null

var phone = 8978778888
phone.match("^([0-9]{10})$")

var phone = 8978778888
phone.toString().match("^([0-9]{10})$")
(2) ["8978778888", "8978778888", index: 0, input: "8978778888", groups: undefined]
var phone = 89787788881
phone.toString().match("^([0-9]{10})$")
null

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")