// +++++++++++++  ARRAYS ++++++++++

//const games = new Array('cricket','football','kabaddi') -- one way and second is best
//console.log(games[2])

const names = ['bharath', 'om','gopi'];
names[1]='hemanth' //can get by index number no name based access
//console.log(names.toString()); converts to string
// typeof array is object console.log(typeof names)

//names[2] =89; can also be collection of numbers,strings,booleans etc 

/* object need name to access person.name in array need index names[0]
const person = {
    name:'bharath',
    rollno:90,
    branch:'ECM'
}
console.log(person.name)
*/

// use arrays when elements are in numbers
//use objects when elements are in strings

// console.log(names.length) length is a property
// console.log(names.length -1) to access the last element of an array
console.log(names.push('ramesh')) 
//console.log(Array.isArray(names)) // to get type of array as array instead of object

//************** ARRAY METHODS  ********
console.log(names.join('-')) //adds the seperators in b/w the elements
console.log(names.pop()); // removes last element and output the removed element
console.log(names.push('keerthi') ) //adds new element
console.log(names.shift()); //removes first elemeent and o/p the removed elemt . if 0 removed then 1 will converted as 0 
console.log(names.unshift('keerthi')) //adds new element in first
//delete names[0] delete but.. [ <1 empty item>, 'hemanth', 'gopi', 'keerthi' ]
const rollno =[12,23,34,4]
console.log(names.concat(rollno))

// another way of concat
const studentdetails = [...names,...rollno]
console.log(studentdetails)

//slice and splice
const arr1 = [0,1,2,3,4,5]
const newarr1 = arr1.slice(0,3) //removes other elements which are no included in (0-3) 3 is excluded i.e(0-2) will have and rest will be out

console.log(newarr1)
console.log(arr1) // main array arr1 will not change only newarr1 will change to [0,1,2]
const newarr2 = arr1.splice(0,3)// removes the elements which are mentioned in splice(0-3) 3 is excluded i.e (0-2) will be removed and [3,4,5] will have
console.log(newarr2)
console.log(arr1) // but here main array will change 

const mainarr = [1,2,3,2,[2,1,3],21,4,5,[23,34,[23,34,[1]]]]
console.log(mainarr.flat(Infinity))