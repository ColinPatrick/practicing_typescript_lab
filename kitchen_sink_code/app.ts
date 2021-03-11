// assigns value to the 'name' variable
const myName: string = "Colin";
// assigns value to the 'states' variable
const states: number = 50;

// assigns values to the 'vegetables' array
var vegetables: string[] = ["green beans", "carrots", "broccoli", "potatoes", "corn"];

interface petLayout {
  name: string
  breed: string
}

let pet = {} as petLayout;
pet.name = "Bo";
pet.breed = "Golden Doodle"

// assigns values to multiple objects in the 'people' array

let people: {
  name: string;
  age: number;
}[] = [
  { name: "Bob", age: 20 },
  { name: "Jeff", age: 22 },
  { name: "Hank", age: 45 },
  { name: "Joe", age: 18 },
  { name: "Mason", age: 17 }
];

// creates a function to return the number of characters in a given word
function getLength(word: string) {
  return word.length;
}

let charCount = getLength('Hello world!');

// creates a function to display 'Hello world!' as an alert
function sayHello() {
  alert('Hello world!')
}
// calls the 'sayHello' function
sayHello();

// creates a function to check the name and age of a person, displaying a message if they are below the age of 21... I added a message to display if they are over 21 as well
function checkAge(name: string, age: number) {
  if (age < 21) {
    alert("Sorry " + name + " you aren't old enough to view this page!")
  } else {
    alert("Hello, " + name + "!")
  }
}

// bellow the 'checkAge' function is called four times with different arguments assigned
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
// a loop that displays each value of the 'vegetables' array to the console
for(var n = 0; n < vegetables.length; n++) {
  console.log(vegetables[n]);
}
// displaying both the name and breed properties from the 'pet' object to the console
console.log(pet.name);
console.log(pet.breed);
// creates a loop that calls the 'checkAge' function for each object in the 'people' array
for(var n = 0; n < people.length; n++) {
  checkAge(people[n].name, people[n].age);
}
// conditional statement that displays a different message to the console depending on whether the value of 'charCount' is odd or even
if (charCount % 2 == 0) {
  console.log('The world is nice and even!');
} else {
  console.log('The world is an odd place!');
}



