#! usr/bin/env node
import inquirer from 'inquirer';

const systemGenretedno = Math.floor(Math.random() * 100);

console.log('System Generated Number:', systemGenretedno);

type ansType ={
    userGuess:number
}

const answer :ansType = await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message: "Write Your Guess b/w 1 to 10"
    }
])

console.log('User Guess:', answer.userGuess);

if(answer.userGuess === systemGenretedno){
    console.log("Yaaa Your answer is Correct \n you are Win!  ");
    
}else {
    console.log("Please try again Better luck next time!");
}