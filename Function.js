const { fuchsia } = require("color-name");

//기존 fuctnion
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

//Parameters
function changeName(obj) {
  obj.name = "coder";
}
const ggyu = { name: "ggyu" };
console.log(ggyu);
changeName(ggyu);
console.log(ggyu);

//Default parameters (ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hello");

//Rest parameters (ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "cpding", "ggyu");

//Local scope (밖에서는 안을 볼 수 없고 안에서는 밖을 볼 수 있다.)
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
}
printMessage();
// console.log(message);  //message is not defined

//Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum : ${sum(1, 2)}`);

//기존함수
const simplePrint = function () {
  console.log("simplePring!");
};

//Arrow function
const simplePrint1 = () => console.log("simplePring!");
const simpleMultiply = (a, b) => {
  return a * b;
};

//IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
