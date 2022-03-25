const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Enter a password to validate:", function(input){
	tokens = input.split(' ');
	
	password = String(tokens[0]);
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (password.length >= 10){
		console.log("Success!")
	}else{
		console.log("Your password needs to be at least 10 characters.")
	}
	// This line closes the connection to the command line interface.
	reader.close()

});