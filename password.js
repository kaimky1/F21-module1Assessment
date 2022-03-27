const readline = require('readline');
const { isTypedArray } = require('util/types');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Enter a password to validate:", function(input){
	tokens = input.split(' ');
	password = String(tokens[0]);
	let hasNumber = false;
	let hasCapital = false;
	let character = '';
	for(let i = 0; i < password.length; i++){
		if(!isNaN(input.charAt(i)) === true){
			hasNumber = true;
		}
	}

	for(let i = 0; i < password.length; i++){
		character = password.charAt(i)
		if(character === character.toUpperCase() && character !== character.toLowerCase()){
			hasCapital = true;
		}
	}
	
	if (password.length >= 10 && hasNumber === true && hasCapital === true){
		console.log("Success!")
	}else{
		console.log("Your password needs to be at least 10 characters, at least one number, and an uppercase letter.")
	}

	// This line closes the connection to the command line interface.
	reader.close()

});