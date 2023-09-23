const userEmail =[]  //'bharath@gmail.com' // 0 is falsy value condition will be false

if(userEmail){
    console.log('got user email')
} else {
    console.log('dont have user email')
}

//falsy values

//false, 0, -0, BigInt 0n, "" - without spaces, null, undefined, NaN

//truthy values
//"0",'false', " ","content" - anything inside string is true, [], {}, function()

//check whether the obj is empty or not

const obj ={} //empty obj
if(Object.keys(obj).length === 0){
    console.log("obj is empty")
}

//check whether the array is empty or not
if(userEmail.length === 0){
    console.log('array is empty')
}

//Nullish Coalescing Operator (??): null undefined
//when the values are null and undefined we will use alternative of null and undefined by assignin some  values default

let val1;
val1 = 5 ?? 10
val1 = null ?? 10 //doesnot print null print 10 as default value
val1 = undefined ?? 18 //same as null
console.log(val1)

//Terniary operator

//condition ? true:false

const score = 10
score >=50 ? console.log('go to next level') : console.log('play this level only')