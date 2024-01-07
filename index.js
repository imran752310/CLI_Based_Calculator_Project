#! ./usr/bin/env. node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Let Start Calculation`);
    await sleep();
    console.log(` 
    |  _________________  |
    | | q          1022 | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+
    |D|e|v|e|l|o|p| |B|y| |I|m|r|a|n| |K|h|a|n|
    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+`);
}
Welcome();
async function askQuestion() {
    const ans = await inquirer.prompt([
        {
            type: 'list',
            name: 'operator',
            message: 'Choose an operation to perform:',
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }, {
            type: 'number',
            name: "number1",
            message: `Enter a number 1 :`
        }, {
            type: 'number',
            name: "number2",
            message: `Enter a number 2 :`
        }
    ]);
    if (ans.operator == "Addition") {
        console.log(`${ans.number1} + ${ans.number2} =  ${ans.number1 + ans.number2}`);
    }
    else if (ans.operator == "Subtraction") {
        console.log(`${ans.number1} - ${ans.number2} = ${ans.number1 - ans.number2}`);
    }
    else if (ans.operator == "Multiplication") {
        console.log(`${ans.number1} X ${ans.number2} = ${ans.number1 * ans.number2}`);
    }
    else if (ans.operator == "Division") {
        console.log(`${ans.number1} / ${ans.number2} = ${ans.number1 / ans.number2}`);
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n : "
        });
    } while (again.restart == 'Y' || again.restart == 'yes' || again.restart == 'y');
}
startAgain();
