//if 
const isUserloggedIn = true
const temperature = 42

if(temperature != 42){ //try with differnt operators >,<,>=...
    console.log("temp is greater than 40")
} 
else{
    console.log("temp is less than 40")
}

//<, >, <=, >=, ==, ===, !=, (!== not equal value or not equal type)
//== just check value but === check the datatype and value very strictly

// scopes in conditionals
const score = 200
if(score > 100){
    let power ="fly"
    console.log(`user power : ${power}`)
}
//console.log(`user power : ${power}`) //gets error cause you are trying to access the variable out of scope

//implicit condition
const balance = 1000
if(balance > 500) console.log('test'); //should only use one console.log afer every if statement

if(balance<500){
    console.log("less than 500")
} else if (balance < 750){
    console.log("less than 750")
} else if(balance < 900){
    console.log('less than 900')
} else {
    console.log("your balance is 1200")
}

//&& and || operators
const userlogged = true
const debitcard = true
if(userlogged && debitcard){ //two conditions should true
    console.log('allow to buy')
}

const loginWithgoogle = true
const loginWithfacebook = false

if(loginWithgoogle || loginWithfacebook){ //anyone condition should true
    console.log('user logged in')
}