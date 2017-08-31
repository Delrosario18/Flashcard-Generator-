var inquirer = require("inquirer");
var clozeQuestions = require("./clozeQuestions.json");
var counter = 0;


function ClozeCard(cloze, partial){
  this.cloze = cloze;
  this.partial = "..." + partial;
  this.fullText = [cloze] + " " +partial;
  this.returnCloze = function(){
    console.log("Answer: " + this.cloze);
};

this.returnPartial = function(){
  console.log(this.partial);
};
  this.returnFullText = function(){
  console.log(this.fullText);

};

};

var questions = function (){

  if(counter < 1){

  inquirer.prompt([

    {type: "input",
      message: "..." + clozeQuestions[counter].partial,
      name: "question"
      }//if
 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === clozeQuestions[counter].cloze){
          console.log("\nCorrect!");
          
        }//if

        else{
          console.log("\nWrong answer!");
        }//else

  console.log(clozeQuestions[counter].fullAnswer);
  counter++
  questions();

  });//closing then
} //closing if

else{
  console.log("\nyou are done!")
  
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to try again?",
        name: "tryAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.tryAgain === true){
        counter = 0;
        
        questions();

      }
      else{
        console.log("Thank you for participating!");
      }

  });
}

}; //closing function

questions();
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
//console.log(firstPresidentCloze.cloze); 
//console.log(firstPresidentCloze.partial);
//console.log(firstPresidentCloze.fullText);
var brokenCloze = new ClozeCard("This doesn't work", "oops");