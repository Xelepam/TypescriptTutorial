/** VARIABLE DECLARATION */
var myName: string = "Omar";
var myAge: number = 24;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;
//const PI = 3.14159;

document.getElementById("tsStuff").innerHTML = "My name is " + myName;

document.write("myName is a " + typeof(myName) + "<br />");
document.write("canVote is a " + typeof(canVote) + "<br />");
document.write("myAge is a " + typeof(myAge) + "<br />");
document.write("anything is a " + typeof(anything) + "<br />");

var strToNumber: number = parseInt("5");
var numToString: number = 5;
document.write("numToStr is a " + typeof(numToString.toString()) + "<br />");



/** INTERFACES */
// Can be used to create complex data types
interface SuperHero {
    realName: String;
    superName: String;
}

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}

document.write(superman.realName + " is " + superman.superName + "<br />");



/** ARRAYS */
var employees: string[] = ["Bob", "Sal", "Sam"];
// employees.push(5); This would produce an error
document.write(employees.toString() + "<br />");



/** ARRAYS + INTERFACES */
var superHeroes: SuperHero[] = [];
superHeroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});

document.write(superHeroes[0].realName + " is " + superHeroes[0].superName + "<br />");



/** MATH */
document.write("5 + 4 = " + (5+4) + "<br />");
document.write("5 - 4 = " + (5-4) + "<br />");
document.write("5 * 4 = " + (5*4) + "<br />");
document.write("5 / 4 = " + (5/4) + "<br />");
document.write("5 % 4 = " + (5%4) + "<br />");
document.write("5 + String 2 = " + (5+'2') + "<br />");

var randomNumber: number = 1;
document.write("randomNumber++ = " + randomNumber++ + "<br />"); // returns 1
document.write("++randomNumber = " + ++randomNumber + "<br />"); // returns 3
document.write("randomNumber-- = " + randomNumber-- + "<br />"); // returns 3
document.write("--randomNumber = " + --randomNumber + "<br />"); // returns 1



/** CONDITIONAL STATEMENTS */
// Note: If, Switch, and Ternary operator are going to operate exactly the same way in TS as they do in JS
// One thing that is different however is the 'let' operator: Variables defined with 'let' inside of a block dont change the value of variables outside of the block

//Example:
//let sampleLet = 123;

//if(true) {
    //let sampleLet = 456;
//}

//document.write("sampleLet : " + sampleLet + "<br />"); // WILL NOT CHANGE

var sampleVar = 123;

if(true) {
    var sampleVar = 456;
}

document.write("sampleVar : " + sampleVar + "<br />");



/** LOOPING */
// Same as JS, with the addition of 'for of'
var randomArray = [5,6,7,8];

for(var val in randomArray) {
    document.write(val + "<br />") // This will print the indexes
}

var strArray = randomArray.map(String);

for(var val of strArray) {
    document.write(val + "<br />") // This will print the actual numbers
}



/** FUNCTIONS */
var getSum = function(num1: number, num2: number): number {
    return num1 + num2;
}
var theSum1: number = getSum(5, 2);
document.write("5 + 2 = " + theSum1 + "<br />");

// ? - means an attribute is not required 
var getDifference = function(num1: number, num2 = 2, num3?: number): number {
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
}
document.write("5 - 2 = " + getDifference(5) + "<br />");
document.write("5 - 2 - 3 = " + getDifference(5, 2, 3) + "<br />");

// ... - means you will receive an unknown number of values
var sumAll = function(...nums: number[]): void {
    var sum = nums.reduce((a, b) => a + b, 0);
    document.write("Sum : " + sum + "<br />");
}
sumAll(1,2,3,4,5,6);

// => - arrow functions - they dont include 'function' in the definition
var addOne = (x) => x + 1;
document.write("1 + 1 = " + addOne(1) + "<br />"); 



/** CLASSES */
class Animal {
    // Public keyword instructs the TS compiler that it's ok to access the property outside of the class
    public animalFavoriteFood: string;

    // Static field means that the value of this field inside of here is going to be shared by every object
    static numberOfAnimals: number = 0;

    // If you want to initialize or set certain values everytime a new object is created you use a constructor function
    constructor(private animalName: string, private animalOwner: string) { 
        Animal.numberOfAnimals++;
    }

    ownerInfo() {
        document.write(this.animalName + " is owned by " + this.animalOwner + "<br />")
    }

    static howManyAnimalsCreated(): number {
        return Animal.numberOfAnimals;
    }

    // Getters & Setters
    private _weight: number;

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}

// Create an Animal object
var Pablito = new Animal("Pablito", "Omar");
Pablito.ownerInfo();
Pablito.weight = 15;
document.write("Pablito's weight is : " + Pablito.weight + " lbs " + "<br />" );
document.write("Number of Animals created so far : " + Animal.howManyAnimalsCreated() + "<br />" );

// Creating sub classes via the key word 'extends' - you inheret methods and fields from prior class - can add additional methods and fields
class Dog extends Animal {
    constructor(name: string, owner: string) {
        // super() calls constructor of the class it is extending
        super(name, owner);
        Dog.numberOfAnimals++;
    }
}

var Grover = new Dog("Grover", "Jimmy");
document.write("# of Animals : " + Dog.howManyAnimalsCreated() + "<br />");
document.write("Is a Dog an Animal : " + (Grover instanceof Animal) + "<br />");
document.write("Does Grover have a name : " + ('name' in Grover) + "<br />");



/** INTERFACES REVISITED */
interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    constructor(private wheels: number) {}

    drive(): void {
        document.write("The car drives with " + this.wheels + " wheels<br />");
    }
}

class Bicycle implements Vehicle {
    constructor(private wheels: number) {}

    drive(): void {
        document.write("The bicycle drives with " + this.wheels + " wheels<br />");
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();



/** GENERIC FUNCTIONS */
// We use generic functions when we want to be able to work with mod-able data types 
// use angle brackets <> - Place one or more data type markers in these angle brakets and use those markers intead of actual data types 
function GetType<T>(val: T): string {
    return typeof(val);
}

var aString = "A String";
var aNumber = 0;
document.write(GetType(aNumber) + "<br />");
document.write(GetType(aString) + "<br />");

function GetWheels<w extends Vehicle>(veh: w): number {
    return veh.drive();
}

GetWheels(car);
GetWheels(bike);




/** GENERIC CLASSES */
class GenericNumber<T>{
    add: (val1: T, val2: T) => T;
}

var someNumber = new GenericNumber<number>();
someNumber.add = function(x, y){return x + y;};
document.write("5 + 4 = " + someNumber.add(5, 4) + "<br />");

var aStrNum = new GenericNumber<string>();
aStrNum.add = function(x, y){return String(Number(x) + Number(y));};
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");



/** DESTRUCTURING */
// PROVIDES A WAY FOR US TO ASSIGN MODABLE VALUES
var randVals = {x: 1, y: 2, z: 3};

var{x, y, z} = randVals;
document.write(x + y + z + "<br />");

[x, y, z] = [z, y, x];
document.write("Switch : " + x + y + z + "<br />");



/** TEMPLATE STRINGS */
// Allows us to create multi line strings
var multStr = `I go on for 
many lines<br />`;
document.write(multStr);
document.write(`<b>${multStr}</b>`);

// Spread operator (...) - Allows us to seperate values in an array into attributes in a function
function theSum(x, y, z): void {
    document.write("Sum : " + x + y + z + "<br />");
}

var args = [4, 5, 6];

// theSum(...args);

// Numerated types
enum Emotion {
    Happy = 1,
    Sad,
    Angry
}

var myFeeling = Emotion.Happy;
myFeeling = 1;