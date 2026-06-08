// let temperature = 25;

// if (temperature < 10) {
//   console.log("Please Wear Your Coat!");
// }

// if (temperature < 37 && temperature > 30) {
//   console.log("Go Out And Enjoy your Day!");
// }

// let connected = "moderator";

// if (connected === "user") {
//   console.log("Welcome User!");
// } else if (connected === "moderator") {
//   console.log("Welcome Moderator!");
// } else if (connected === "admin") {
//   console.log("Welcome Admin!");
// } else {
//   console.log("Welcome!");
// }

// switch (connected) {
//   case "user":
//     console.log("Welcome User!");
//     break;

//   case "moderator":
//     console.log("Welcome Moderator!");
//     break;

//   case "admin":
//     console.log("Welcome Admin!");
//     break;

//   default:
//     console.log("Welcome!");
//     break;
// }

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// let result = (num1 + num2 + num3) / 3;

// console.log(result);

// let value1 = 100
// let value2 = 200
// let value3 = 300

// result =  (value1 + value2 + value3) / 3

// console.log(result)

// for (let i = 0; i < 3; i++) {
//   console.log("Hello");
// }

// let numbers  = [10, 20, 30, 40]

// let sum  = numbers[0] + numbers[1] + numbers[2] + numbers[3]

// console.log("Sum: ", sum)

let names = ["Moslem", "Alina", "Taraf"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i].toUpperCase());
// }

let colors = ["red", "green", "blue"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i].toUpperCase());
// }

// function definitions
function converToUpperCase(strings) {
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i].toUpperCase());
  }
}

// function calls
//converToUpperCase(colors);

function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    // total = total + numbers[i];

    total += numbers[i];
  }

  return total;
}

// const result = sum([10, 20, 30, 40]);

// console.log("Sum: ", result);

let person = {
  firstName: "Adam",
  lastName: "Smith",
  age: 30,
  id: "123cvl",
  height: 1.72,
};

// using dot notation
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.id);
// console.log(person.height);

// let description =
//   "this is " +
//   person.firstName +
//   " " +
//   person.lastName +
//   " he is " +
//   person.age +
//   " years old";

let description = `this is ${person.firstName} ${person.lastName} he is ${person.age} years old`;

//console.log(description);


// using bracket notation
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
// console.log(person["id"]);
// console.log(person["height"]);
