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
//console.log(loginUserMessage()) //if you not defined any argument here then you get undefined

//functions with objects and arrays
function calculateCartPrice(...num1){ // to store multiple values in one parameter use ...num1

    return num1
}
//console.log(calculateCartPrice(99,199,299))

const user = { //predefine obj
    username:'bharath',
    price:199
}

//accessing objects using functions
function hanldeObj(user){
//    console.log(`username is ${user.username} and price is ${user.price}`)
}
//hanldeObj(user) 
hanldeObj({ //post define obj
    username:'hitesh',
    price:121
})

//functions with arrays
const arr = [1,2,3,4,5] //predefine

function funcarr(arr){
    return arr
}
//console.log(funcarr(arr))

//console.log(funcarr([12,21,23,32]))

 //my example and understanding of obj and functions

 const ECM  = {
    student1 :{
        name:'bharath',
        rollno:17,
        result:true
    },
    student2 :{
        name:'rahul',
        rollno:10,
        result:true
    },
    student3 :{
        name:'ashok',
        rollno:20,
        result:true
    },
    student4 :{
        name:'hasan',
        rollno:11,
        result:false
    },
    student5 :{
        name:'huvi',
        rollno:19,
        result:false
    }
  
 }

 function ECMRESULTS(ECM){
    console.log(`Dear Parents! Your ward ${ECM.student1.name} , RollNo : ${ECM.student1.rollno} . ${ECM.student1.result} in exam.`)
 }

 ECMRESULTS(ECM)

 //my example and understanding of arrays and obj

 const marks = [21,23,34,12,22]

 function yourmarks(marks){
    if(marks[3]<20){
      console.log('you are failed')
    }
    else{
        console.log("you are passed")
    }
 }

 yourmarks(marks)
 