const instaUser = {} //creating an obj using singleton

instaUser.id="this_is_bharath12"
instaUser.name="bharath"
instaUser.isLoggedIn= false
instaUser.followers = 130

//console.log(instaUser)

const userDetails = {
    email:'bharath@gmail.com',
    username:{
        fullname:{
            firstname:'bharath',
            lastname:'yadav'
        }
    }
}

//console.log(userDetails.username.fullname.firstname)
//to concat obj
const obj1 = {
    name2:'bharath',
    email2:'bharath@gmail.com',
    age2:98
}
const obj2 = {
    name3:'hariana',
    email3:'harinam@gmail.com',
    age3:98
}
const obj3 = {
    name4:'karthik',
    email4:'karthih@gmail.com',
    age4:98
}

// dont use this method
//const obj4 = {obj1,obj2,obj3}
//console.log(obj4)
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)


/*const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3)
*/
/*const user =[
    {
        id:1,
        email:'hello@gmail.com'
    },
    {
        id:2,
        email2:'hello2@gmail.com'
    }
]
console.log(user[1]) //array as obj and accessing as array 
*/

console.log(Object.keys(instaUser)) //used to know the keys in obj
console.log(Object.values(instaUser)) //used to know the values in obj

console.log(instaUser.hasOwnProperty('isLoggedIn')) //to check whether we have that key property or not
// destructuring in obj
const course = {
    coursename:'js in hindi',
    price:'999',
    courseInstructor:'hitesh'
}

//normally 
console.log(course.price)
// but in destructuring 
const {price,coursename,courseInstructor} = course
console.log(price)
console.log(coursename);
console.log(courseInstructor);
// you can access the properties without using course.price method


//talk about json and apis
/*{
    'name':'bharath',
    'age':'20',
    'address':'hyd'
}
format of json
*/