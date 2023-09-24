//for 
for(let i=0; i<=10; i++){
    const element = i
   // console.log(element)
    if(element == 5){
        console.log('iam 5') //can also add if statements inside loop
    }
} //0 to 10
//console.log(element) //cannot access element out of scope

//we can also add loop inside a loop

/*for(let i =1; i<=10; i++){
    console.log(`outer loop value : ${i}`) //first run this acc to 1st for loop i.e i & nxt it will move on to next step i.e is loop
    for(let j=1; j<=10; j++){  //until this condition is false this loop will exceute 10  times and increment value and goes to i
        console.log(`inner loop value : ${j} and inner loop is ${i}`)
    }
}*/

//print a table
/*for(let num1 = 1; num1<=1; num1++){  // this num1 is responsible to print which table it is that means outerloop
    for(let numc = 1; numc<=10; numc++){ //numc is responsible to iterate from 1 to 10 at a time
        console.log(`${num1} * ${numc} = ${num1*numc}`)
    }
}*/

//loop through an array
let name =['bharath','manikesh','karthik','omkar']

//console.log(name.length)
for(let i =0; i<2; i++){ //you can set range from which index to get print
    const ele = name[i]
  //  console.log(ele)
}

//break and continue

for(let i =1; i<=10; i++){
    if(i==6){
        console.log(`${i} you are suspended`)
        break
    }
    console.log(i)
}

//continue
for(let i =1; i<=10; i++){
    if(i%2 == 0){
        console.log(`${i} - you are out from game`)
        continue
    }
    console.log(i)
}
