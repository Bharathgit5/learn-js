//singleton 

/*const user = new Object()
console.log(user)  using singleton*/
//object.create

//object literals

const student1 = {
 //name:value pairs is called as properties   
    name:'bharath',
    rollno:23,
    age:15,
    color:'black',
    address:'hyderabad',
    subjectspass:['pps','oops through java','cn','os'],

}

//access the values from obj
console.log(student1.subjectspass)

//another way of accessing is 
console.log(student1["name"])

//when should we use 1st access method and 2nd access method
//when we have to access symbols we need to use 2nd method
let id = Symbol('newid')
let details = {
    name:'bharath',
    [id]:12
}
console.log(details.id) //you cannot access symbols by (details.id) you shoudl add details[id]
//adding new values
student1.name="ganesha"
console.log(student1.name)

//if you dont want to change or add any new values to the obj
Object.freeze(details)
details.name='hanuman'
console.log(details)
//you cannot change or add
student1.results = function(){
    console.log(`hello ${this.name} you have passed in ${this.subjectspass}`)
}
console.log(student1.results())
console.log(student1)