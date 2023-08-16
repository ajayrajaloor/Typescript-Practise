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
var n = null;
var u = undefined;
//in TS, null and undefined are classified as subtypes of all other types
//However we can write like this ↓
//we can declare Array type in two ways of syntaxes
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// A tuple type is a type in TypeScript that represents a collection of values of different types. Tuples are similar to arrays, but they have a fixed length and the types of the elements in the tuple are known.
var person1 = ['Ajay', 25];
//An enum type is a type in TypeScript that represents a set of named constants. Enums are similar to constants, but they have a few key differences. First, enums are typed, so you can be sure that the values of an enum are always of the correct type. Second, enums can have members, which are individual constants that are part of the enum.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); //we are getting the result 1 that the green is located in index 1
// when we assign a value to any of the color the next color enum will be next of the value like,
var Colour;
(function (Colour) {
    Colour[Colour["Blue"] = 5] = "Blue";
    Colour[Colour["Green"] = 6] = "Green";
    Colour[Colour["Red"] = 7] = "Red";
})(Colour || (Colour = {}));
var a = Colour.Green;
console.log(a); //here the result will get 6 as the result of the value we assigned to before the green is 5.
//if we are unsure about what a variable type wanted to be, then we can use 'any' type.
var randomValue = 10;
randomValue = true;
randomValue = 'Ajayraj';
// 'any' type is the most capable type in TS. Here we cannot see any error
//The unknown type in TypeScript is a type that represents a value that is not known at compile time. This can be useful for representing values that come from external sources, such as user input or data from a database.↓
//The unknown type is a supertype of all other types, which means that it can be assigned to any variable of any type. However, you cannot perform any operations on a variable of type unknown unless you first narrow it down to a more specific type. ↓
var myVariable = 10;
//after ↓
function hasname(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasname(myVariable)) {
    console.log(myVariable.name);
}
//we can write functions like this in unknown type
myVariable.toUpperCase(); //we can write unknown type like this also
