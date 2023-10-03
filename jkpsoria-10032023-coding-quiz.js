// Instructions
// Create a javascript file named `<yourid>-10032023-coding-quiz.js`
// Put your answer beside the commented question number.
// Use JavaScript best practice.
// Submit on or before 5 PM today

// #1 Create an object called `person` with the properties `name`, `age`, and `hobbies`. The variable must be immutable.
// #2 Add a method called `introduce` to the `person` object. The method should return the string “Hi, my name is <person’s name>. I am <age> <”year” or “years” depending on the age> old. My hobbies are <hobby1>, <hobby2> and <hobby3>”.
const person = {
    name: "Jiki",
    age: 4,
    hobbies: ["Sleeping", "Walking", "Watching movies or tv-series"],
    introduce: function() {
        console.log(`Hi, my name is ${this.name}. I am ${this.age} ${this.age > 1 ? "years" : "year"} old. My hobbies are ${this.hobbies[0]}, ${this.hobbies[1]}, and ${this.hobbies[2]}`);
    },
}

console.log(person.introduce())


const arr = [1, 2, 3, 4, 5]

// #3 Find the Maximum Value: Create a function that takes an array of numbers as input and returns the maximum value in the array.
function maxValue(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else{

        }
    }
    return max
}

console.log(maxValue(arr))


// #4 Create a JavaScript function to find the sum of all elements in a given array.

function sumOfValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(sumOfValues(arr))


// #5 Write a JavaScript class named `Human2` that extends `Human`, additionally takes birthdate, greeting returns concatenate what `Human.greeting` returns with "Nice to meet you!", and have `age` getter that returns the current age.

class Human {
	name = ''
	favorites = []
	constructor(name, ...favorites) {
		this.name = name
		this.favorites = favorites
	}
	
	greeting(name) {
		return `Hello, ${name}! I'm ${this.name}.`
	}
}

class Human2 extends Human {
    constructor(name, birthdate) {
        super("Kali", "Sleeping, eating")
        this.name
        this.birthdate = birthdate
    }
    greeting(name) {
        return `${super.greeting(name)} nice to meet you!`
    }
}

const human = new Human("Jiki", "Sleeping, walking")
const human2 = new Human2("January 3, 2000")

console.log(human.greeting("Kali"))
console.log(human2.greeting("Jiki"))

console.log(human2.name)

// #6 Rewrite `Human` and `Human2` to a class that uses `function` and `prototype`, you cannot use `class` keyword and `...` syntax.

function human() {
    
}
