export {}
// by importing or exporting statement typescript treats this file as a module instead of a script 
let message = 'Welcome'
console.log(message);



let isBeginner : boolean = true; //we need to initialize the type when it is declared
let total : number = 1;
let name : string = 'Ajayraj';

// we can also write template strings in TS ↓
let sentence : string = `My name is ${name}
I am a Beginner in Typescript`;

console.log(sentence);
