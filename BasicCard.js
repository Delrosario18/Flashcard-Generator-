var inquirer = require("inquirer");
var basicQuestions = require("./basicQuestions.json");
var counter=0;

var BasicCard = function(front, back){
 this.front = front;
 this.back= back;
};

var questions = function(){
if(counter<1){

	inquirer.prompt([

      {type: "input",
      message: basicQuestions[counter].frontCard,
      name: "question"
      }
		]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].backCard){
          console.log("\nCorrect!");
          
        }//if

        else{
          console.log("\nWrong answer!");
        }//else

  console.log(basicQuestions[counter].fullAnswer);
  counter++
  questions();

  });
}else{
console.log("\nYou are done");
inquirer.prompt([
        {type: "confirm",
         message: "Do you want to try again",
         name: "tryagain",
         default: true

        }
	]).then(function(answer){

		if(answer.tryagain===true){
			counter=0;
			questions();
		}else{
			console.log("Thank you for participating");
		}
	});


}



}
questions();
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
//console.log(firstPresident.front);
//console.log(firstPresident.front);
