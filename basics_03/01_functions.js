function myName(){
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("A")
    console.log("T")
    console.log("H")
}

//myName()
/*
function addTwoNumbers1(number1,number2){
console.log(number1+number2)
}
    const res = addTwoNumbers1(2,3)
console.log("result :", res)
*/
function addTwoNumbers(number1,number2){
let result = number1+number2
return result

}
//const results = addTwoNumbers(1,3)
//console.log('result:',results)

function loginUserMessage(username){
//if username is not defined
if(!username){
    console.log("please enter a username")
  return //if we dont use return here then below line will also print undefined just logged in  
  
}
    return `${username} just logged in`
}
console.log(loginUserMessage()) //if you not defined any argument here then you get undefined
