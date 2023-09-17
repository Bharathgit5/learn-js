// **********NUMBERS IN JS *********
const score = 200
//console.log(score);
const balance= new Number(11210000)
/*console.log(balance);
console.log(typeof(balance))
console.log(balance.toString())
console.log(balance.toFixed(2));
console.log(balance.toPrecision(4));
console.log(balance.toLocaleString('en-IN'));
*/

// ************MATHS IN JS ******************
console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(78.212));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));
console.log(Math.max(2,1,33,21,221,2))
console.log(Math.min(12.2,3,0.1,1.2))
//console.log(Math.random());
//Dice game code
const min = 1
const max = 6
console.log(Math.round(Math.random() * (max-min +1)) + min )