//reduce - gives single output

const nums =[1,2,3]

//acc is accumulator is an empty space to store the value

const sum = nums.reduce( (acc,currentval) =>{
    return acc + currentval
},0 )
console.log(sum)

//without return and {}

const newsum = nums.reduce( (acc,currentval) => acc+currentval,0)

//reallife example

const shoppingCart = [{
    courseName:'HTML',
    price:999
},{
courseName:'HTML',
price:1999
},{
courseName:'HTML',
price:2999
},{
courseName:'REACTJS',
price:3999
}]

const pricetopay = shoppingCart.reduce( (acc, i ) => acc + i.price,0)
console.log(pricetopay)