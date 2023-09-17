//strings
const name= "bharath "
const age = "21"

 // dont use this method for concate 
 //console.log(name + age + " years old")

//console.log(`hello my name is ${name} and my age is ${age}`)
// `` prints what you write and ${variable_name} store variable name
const newString = new String("bharath")
/*
console.log(newString[6]) 
console.log(newString.length)
console.log(newString.anchor('name'))
console.log(newString.at(0));
console.log(newString.charAt(4));
console.log(newString.big());
console.log(newString.bold());
console.log(newString.charAt(8));
console.log(newString.charCodeAt(0));
console.log(newString.concat(' yadav'));
console.log(newString.endsWith('n'));
console.log(newString.italics());
console.log(newString.localeCompare('bharath-k-in'));
console.log(newString.match('rath')); //return (index) in array
console.log(newString.search('rath')); //return in index

console.log(newString.padEnd(11,"xxx"));
console.log(newString.repeat(4));
console.log(newString.replace('in','com'));
*/
console.log(newString.slice(0,6));
console.log(newString.split(" "));
console.log(newString.trimStart())
console.log(newString.trimEnd(2));
console.log(newString.toLowerCase());
console.log(newString.toUpperCase());


