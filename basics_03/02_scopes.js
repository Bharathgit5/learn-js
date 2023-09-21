// story of var vanishing
//var c = 300; //this code is not considered if we use var here it only print under the scoope only
let a = 300; //global scope 
if(true){
    const a= 10; //doesnot give output
    console.log("Inner :",a) //first preference to print is global scope. we cannot use variables inside the block outside but we can use the global variable inside the block
    let b = 20;  //doesnot give output
//var c= 30;  //gives output here is the problem


}
console.log("Outer :",a);
//console.log(b);
//console.log(c);
