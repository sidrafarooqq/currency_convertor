import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.96,
    GBP: 0.76,
    INR: 74.56,
    PKR: 280,
};
let user_Answer = await inquirer.prompt([
    {
        name: "from_currency",
        message: "enter from currency",
        type: "list",
        choices: ["USD", 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to_currency",
        message: "enter to currency",
        type: "list",
        choices: ["USD", 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "Amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let fromAmount = currency[user_Answer.from_currency];
let toAmount = currency[user_Answer.to_currency];
let amount = user_Answer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
