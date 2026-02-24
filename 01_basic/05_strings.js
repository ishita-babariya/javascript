const name = "ishita"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ishita-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) //Ex-ishita-> ish -> (length-value)
console.log(anotherString);

const newStringOne = "   ishita    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ishita.com/ishita%20babariya"

console.log(url.replace('%20', '-'))

console.log(url.includes('hduiewh'))

console.log(gameName.split('-'));
