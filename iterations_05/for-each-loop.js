const coding = ['js','c','c++','java','python']

coding.forEach( function (val){ //forEach loop is a call back function it require a function inside ()
    //console.log(val)
})

coding.forEach( (i) => {
   // console.log(i)
})

function printme(i){
 //   console.log(i)
}
coding.forEach(printme)
//takes three parameters 1.items 2.index 3.array itself
coding.forEach( (item, index, arr) => {
   // console.log(item, index, arr) //item(js) index(0) arr[total array]
})

const myCoding =[
    {
        name:'javascript',
        extension:'.js'
    },
    {
        name:'python',
        extension:'.py'
    },
    {
        name:'java',
        extension:'.java'
    }
]

myCoding.forEach( (i) =>{
console.log(i.name)
})