// 1. Write a program, which chooses either rock, paper or scissors randomly each time it is run. 
//If you want an extra challenge with that, you can use the prompt() function to get an input from the user and compare his input to what the program chose and display who is
// the winner.
let person = prompt();
let random = Math.random();
	if(random < .4){console.log("Rock")};
	if(random > .4 && random < .8){
		console.log("Paper")};
	if(random > .8){console.log("Scissors")};
	


//2.Write a program, which uses the prompt() function to get an input from the user. 
//We want this input to represent the age of the user, so if he provides an input with incorrect format, the code should ask him until he 
//provides a valid option (a number which is more than zero and less than 130).	

let PersonAge = 0 ;
PersonAge = prompt('Enter your age');
 while(PersonAge <1 || PersonAge >= 130){
	 PersonAge = prompt('Enter your age again');
 }
  if(PersonAge != '' ) console.log(' ÿour age is ' + PersonAge );
 

  
//3.Write a program, which calculates the area of a circle (check google for the formula). 
//You'll need only the radius as a variable, your choice whether you take the radius as an input from the user or hardcode it.

  let radius = 0;
  radius = prompt('Enter a radius');
  if (radius <= 0) prompt('ënter again'); 
  let AreaCircle=console.log(Math.PI * radius * radius);
  
 
  
  


	