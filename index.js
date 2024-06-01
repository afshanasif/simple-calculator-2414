#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "enter first number", type: "number", name: "firstNumber" },
    { massage: "enter second number", type: "number", name: "secondNumber" },
    {
        massage: "select one of the operator action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
