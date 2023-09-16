/* data types in js are of two types 
1.primitive datatype
2.non primitive datatype

1.primitive datatype
String - let color = "black"
         let name = "bharath"
         console.log(color)

Number - let length=34
         let weight = 59
         console.log(weight)

Bigint - let bignum = BigInt("232123232221212122323232")
         console.log(bignum)

Boolean - let x=5
          let y =5;
          let z =9;
          (x==y)
          (x==z)


Undefined - let userEmail;
            console.log(userEmail)

Null - const outsideTemp=null
       console.log(outsideTemp)

Symbol - UNIQUE 
         const id = Symbol('123')
         const id2 = Symbol('123')
         console.log(id == id2)

 */
/*Non primitive (reference) 
Array,Objects,Functions
Arrays - const heros = ["pawankalyan","virat","steeve"];
Object - let mydetails = {
    name:'bharath',
    age:98,
    phone:9879878980
}
Functions - const myFunction = function(){
    console.log("bharath")
}
 console.log(typeof(mydetails))
*/
// stack (primitive) - copy , heap (non-primitive) - reference(original)
// stack - copy of the variable is used
// heap - original value will also change if the second variable change first variable value
let myname = "bharath" 
let anothername = myname
anothername = "pawankalyan" //anothername value changes to new name
console.log(anothername) //but orignal myname value doesnot change

//heap
let userone ={
    name:'bharath',
    sub:'MPMC',
    marks:90
}
let usertwo = userone

userone.name = "hanuma" //both userone and usertwo name changes
console.log(usertwo)

