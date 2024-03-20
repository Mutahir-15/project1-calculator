#! /usr/bin/env node

import inquirer from "inquirer";

const answer:any = await inquirer.prompt([
  { message: "Enter First Number:", type: "number", name: "firstNumber" },
  { message: "Enter Second Number:", type: "number", name: "secondNumber" },
  {
    message:
      "Please select the arithmetic operation you'd like to perform from the options:",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional operators...

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} 
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Select an Appropriate Operator.");
}