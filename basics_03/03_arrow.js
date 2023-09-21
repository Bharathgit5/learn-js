//before learing about arrow function learn about this keyword

const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(this.username) //this is used to know the current updated values in an obj
    }
}

user.welcomeMessage()
user.username = 'bharath'
user.welcomeMessage()


//console.log(this)  {}

//one way of creating functions
function myfunc1(){
    let name ="bharath1"
    console.log(name)
}
myfunc1()

//second way of creating functions
const myfunc2 = function(){
    console.log('bharath2')
}
myfunc2()

//third way of creating functions
 //ARROW FUNCTIONS

 const myfunc3 = () =>{ //EXPLICIT FUNCTIONS
    console.log('bharath3')
 }

 myfunc3()

 const myfunc4 = (num1,num2) =>{ //EXPLICIT FUNCTION
    return num1+num2;
 }
 console.log(myfunc4(12,67))

 const myfunc5 = (num1,num2) => (num1+num2) //IMPLICIT FUNCTION WITHOUT RETURN KEYWORD
 console.log(myfunc5(12,23))

 const myfunc6 = () => ({username:'bharath'}) //OBJECTS IN ARROW FUNCTIONS({}) 

 console.log(myfunc6())

