// let temperature = 25;

// if (temperature < 10) {
//   console.log("Please Wear Your Coat!");
// }

// if (temperature < 37 && temperature > 30) {
//   console.log("Go Out And Enjoy your Day!");
// }

let connected = "moderator";

if (connected === "user") {
  console.log("Welcome User!");
} else if (connected === "moderator") {
  console.log("Welcome Moderator!");
} else if (connected === "admin") {
  console.log("Welcome Admin!");
} else {
  console.log("Welcome!");
}

switch (connected) {
  case "user":
    console.log("Welcome User!");
    break;

  case "moderator":
    console.log("Welcome Moderator!");
    break;

  case "admin":
    console.log("Welcome Admin!");
    break;

  default:
    console.log("Welcome!");
    break;
}
