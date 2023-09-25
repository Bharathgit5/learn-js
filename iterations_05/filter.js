const coding = ['js','python','ruby','c++','java']

const values = coding.forEach( (i) => {
  //  console.log(i)
  return i
})

//console.log(values) //in foreach loop you cannot return or store the values in variables 
//so in filter it is possible to store and return the values in a variable

const nums = [1,2,3,4,5,6,7]

const mynewnums = nums.filter( (i) => { //using filter
    return i<3
})
//console.log(nums)
//console.log(mynewnums)

//adding valus to a new array using foreach loop 

const myarr = []

nums.forEach( (i) =>{
    if(i>4){
        myarr.push(i)
    }
})
//console.log(myarr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userbook = books.filter( (bk ) => bk.genre === 'History') //without return dont use {}
//console.log(userbook)

userbook = books.filter ( (bk) => {
    return bk.publish >= 1900 && bk.genre === 'Fiction' //if you use {} you must use return keyword
 })
 //console.log(userbook)

 userbook = books.filter ( (bk) => {
    return bk.title === 'Book Eight' && bk.genre === 'Science' && bk.publish > 2000
 })
 //console.log(userbook)
 //console.log(books)