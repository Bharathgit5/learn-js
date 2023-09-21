// story of var vanishing
var c = 300; //this code is not considered if we use var here it only print under the scoope only
let a = 300; //global scope 
if(true){
    const a= 10; //doesnot give output
  //  console.log("Inner :",a) //first preference to print is global scope. we cannot use variables inside the block outside but we can use the global variable inside the block
    let b = 20;  //doesnot give output
var c= 30;  //gives output here is the problem only insdie scoope code is only considered -output 30


}
//console.log("Outer :",a);
//console.log(b);
//console.log(c);

//Scope level and mini hoisting
function one(){
    const username = "bharath"
    function two(){
        const website = " printfc.in"
        console.log(username) //bigger function i.e  above function csn give its variable to use in smaller function i.e  current function .
        console.log(username+ website) //variables declared inside the small function are used only in small function only.

    }
   // console.log(website) //this gives an error cause it is out of scope . we cannnot use smaller function variable outside of its scope

    
    two()
}

//one()

//same in if statement also

if(true){
    const name ='bharath'
    if(name === 'bharath'){
        const lastname = " yadav"
        console.log(name+lastname)

    }
    //console.log(lastname) //cannot use lastname here it is out of scoope

}
//console.log(name) //cannot access name here it is out of its scoope

//++++++++++++++++ INTERESTING ++++++++++++++++++++++


console.log(myfunc(8)) //can call function before its declaration
function myfunc(num){
    return num +1;
}

//another way of creating function

//console.log(myfunc1) //shows error because function is stored as a variable const

const myfunc1 = function(num1){
    return num1 +2;
}

console.log(myfunc1(8))