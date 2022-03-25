const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Enter a password to validate:", function(input){
	tokens = input.split(' ');
	password = String(tokens[0]);
	if (password.length >= 10){
		console.log("Success!")
	}else{
		console.log("Your password needs to be at least 10 characters and contain one uppercase character.")
	}

	// This line closes the connection to the command line interface.
	reader.close()

});