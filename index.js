// Iteration 1: Names and Input
let hacker1 = 'Karl';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Peter';
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log('Wow, you both have equally long names, XX characters!')
}

// Iteration 3: Loops
let whiteSpace = '';
for (let i = 0; i< hacker1.length; i++) {
    whiteSpace += hacker1[i].toUpperCase() + ' ';
}

console.log(whiteSpace);

let reversedNavigator = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);


let a = hacker1;
let b = hacker2;
if (a.localeCompare(b) === -1) {
  console.log("The driver's name goes first.");
} else if (a.localeCompare(b) === 0) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.");
}