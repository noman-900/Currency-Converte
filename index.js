import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n \t Welcome to currency convertor\n"));
//Degine the list of currencies and thier  exchange rates
let exchange_rate = {
    "USD": 1, // Base currency
    "EUR": 0.9,
    "JPY": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
};
// promt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// perfrom currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of conversion 
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${converted_amount}`);
