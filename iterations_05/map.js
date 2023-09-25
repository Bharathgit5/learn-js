const num = [1,2,3,4,5,6,7,8,9,10]

const newnums = num.filter( (i) => {
    return i+10
})
//console.log(newnums)

const person = [{
    firstname:'bharath',
    lastname:'yadav'
},
{
    firstname:'urvashi',
    lastname:'rawtala'
},
{
    firstname:'pawankalyan',
    lastname:'konidela'
}]

let fullnames = person.map( (i) => {
    return `${i.firstname} ${i.lastname}`//remember to use 'i' not person.name
})
console.log(fullnames)