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



let n : null = null;
let u : undefined = undefined;
//in TS, null and undefined are classified as subtypes of all other types
//However we can write like this ↓

//we can declare Array type in two ways of syntaxes

let list1 : number[] = [1,2,3]
let list2 : Array<number> = [1,2,3]


// A tuple type is a type in TypeScript that represents a collection of values of different types. Tuples are similar to arrays, but they have a fixed length and the types of the elements in the tuple are known.
let person1 : [string,number] = ['Ajay',25];



//An enum type is a type in TypeScript that represents a set of named constants. Enums are similar to constants, but they have a few key differences. First, enums are typed, so you can be sure that the values of an enum are always of the correct type. Second, enums can have members, which are individual constants that are part of the enum.
enum Color {Red,Green,Blue};

let c : Color = Color.Green;
console.log(c); //we are getting the result 1 that the green is located in index 1


// when we assign a value to any of the color the next color enum will be next of the value like,

enum Colour {Blue = 5,Green,Red}
let a : Colour = Colour.Green
console.log(a); //here the result will get 6 as the result of the value we assigned to before the green is 5.




//if we are unsure about what a variable type wanted to be, then we can use 'any' type.
let randomValue : any = 10
randomValue = true
randomValue = 'Ajayraj'
// 'any' type is the most capable type in TS. Here we cannot see any error







//The unknown type in TypeScript is a type that represents a value that is not known at compile time. This can be useful for representing values that come from external sources, such as user input or data from a database.↓
//The unknown type is a supertype of all other types, which means that it can be assigned to any variable of any type. However, you cannot perform any operations on a variable of type unknown unless you first narrow it down to a more specific type. ↓


let myVariable : unknown = 10;

//after ↓
function hasname(obj : any) : obj is {name : string} {
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if(hasname(myVariable)){
    console.log(myVariable.name);
}
//we can write functions like this in unknown type



// (myVariable as string).toUpperCase(); 
//we can write unknown type like this also





//type infernce ↓
let z;
z=10;
z = true;
//here we can able to change the type by not declaring the value first


let b = 20;
//But here we cannot able to change the type.





//union type ↓
let multiType : number | boolean;
multiType = 20;
multiType = true;
//we cannot be assign any string to the multitype and it will cause error because it restricts the specific types
//Also we get intellisence support in 'union' type
//But not in 'any' type ↓

let anyType : any;
anyType = 30;
anyType = true;
anyType = 'Hello';










//Functions in TS

function add(num1:number,num2:number) : number{ //functional parameters... This is about the types to write
    return num1+num2;
    //we can also specify the type of the return like we added the number type after the function parameters↑
}

add(5,10)
// we cant write like this => add(5,'10')  coz it is a string and the type we declared is not same or add(5) and here there is only one argument






//Optional functional parameters ↓
//optional parameters must be after the required parameters
function addd(num1:number , num2?:number):number{
if(num2){
    return num1 + num2
}else{
    return num1
}
}
addd(5,10)
addd(5) //when we pass only one value the second value will treated as undefined





//Default functional parameters ↓
//they are mostly alike optional parameters but here with a set of value assigned instead of undefined
function addddd(num1:number,num2:number = 20):number{
    if(num2){
        return num1 + num2
    }else{
        return num1
    }
}
console.log(addddd(5,10));
 // it will return 15 as expected
console.log(addddd(5));
 // but here it will return as 25  coz here the num2 is already assigned a value of 20









//Interfaces in TS ↓

interface Person {
    firstName : string;
    lastName : string; //here we also can make this lastname as optional property of person type like ..... lastname ?: string ... now there is no problem if we remove the lastname property from object p
}

function fullName(person : Person){
    console.log(`${person.firstName} ${person.lastName}`);
    
}

let p ={
    firstName : 'Ajay',
    lastName : 'Raj'
}

fullName(p);