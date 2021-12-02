console.log("test file for testing")
let obj =  { name : "Heikki", age:23, employed:true }
let obj2  = {...obj}
obj.employed = false
console.log(obj)
console.log(obj2)
