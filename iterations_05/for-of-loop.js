//for of

//["", "", ""]
//[{}, {}, {}] - to iterate over the array in which it consists of obj
// for -of loop is used to iterate over arrays
const arr = [1,324,53,64,5]
for (const iterator of arr) {

console.log(iterator) //here iterator is not the index of the array it is the actual value

}

//iterate over the string
const greeting = 'hello world'
for (const iterator of greeting) {
    console.log(iterator)

}

//Maps - for unquie key:value paris doesnot allow duplicate
const map = new Map()
map.set('IN','India')
map.set('USA','America')
map.set('UK','United Kingdom')
console.log(map)

for(const [key, values] of map){ //if you use key as noraml iterator then it does not show key values it shows complete map
    console.log(`Here is your country ${values} , and its code ${key}`); //if you want only keys then use destructuring [key] then only keys and only values will be displayed
}
//iterate through obj using for of loop

const obj  ={
    name:'bharath',
    rollno:12,

}

/*for (const [key,value] of obj) {
    console.log(key,value)
    
} // will get error cause objects cannot be iteratable */




