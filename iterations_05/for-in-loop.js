//loops used to iterate in obj, use for-in loop

const mySkills = {
    skill1:'html',
    skill2:'css',
    skill3:'js',
    skill4:'reactjs',
    skill5:'appwrite'
}
// to iterate over obj us for-in loop
for (const key in mySkills) {
 console.log(`${key} is ${mySkills[key]}`) //gives property name as output myskills[key] gives actual value
}

//in for-of iterator  acts as a index value where as in for of iterator acts as the property name 
//do not use for in over an array
const map = new Map()
map.set('IN','INDIA')
map.set('pak','pak')
map.set('uk','unitedkingdom')

//console.log(map)
for(const keyd in map){ //map is not iteratable in this loop
    //console.log(keyd)
}