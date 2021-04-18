var a = [4,5,3,8,9,34,56,78]
a.map((data) =>  {console.log(data)})

a.map((data) =>  {return (data)})
(8) [4, 5, 3, 8, 9, 34, 56, 78]
a.map((data) =>  {return (data*2)})
(8) [8, 10, 6, 16, 18, 68, 112, 156]

> map is use to iterate over the Array
> it always return same length of output array as input array
> it is use to apply logics (sum,mul,div) return html, bind data


> filter is use to filter out of the value
> it may or may not return same length of output
> it only return those value for which condition/output is true

var b = [20,35,34,26,67,21,19,32]
b.filter((data) => {return data>25})
[35, 34, 26, 67, 32]