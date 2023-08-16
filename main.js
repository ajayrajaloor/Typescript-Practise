"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// by importing or exporting statement typescript treats this file as a module instead of a script 
var message = 'Welcome';
console.log(message);
var isBeginner = true; //we need to initialize the type when it is declared
var total = 1;
var name = 'Ajayraj';
// we can also write template strings in TS ↓
var sentence = "My name is ".concat(name, "\nI am a Beginner in Typescript");
console.log(sentence);
