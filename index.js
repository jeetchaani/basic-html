var readlineSync = require('readline-sync');
var name = readlineSync.question("What is your name?");
console.log("Welcome ",name);
console.log("Let's play quiz game?");

//put questions here

var quizList =[
   {
      quiz:'Solve 4*3?',
      answer:{a:'12', b:'10', c:'9', d:'78'},
      correct:'a'
   },
   {
    quiz:'Solve 4*5?',
    answer:{a:'12', b:'20', c:'9', d:'78'},
    correct:'b'
 }
];

var scoreCount = 0;
for(var i=0;i<quizList.length;i++){
    console.log(quizList[i].quiz);
     var ansObj=quizList[i].answer;
       for(let key in ansObj)
       {
          console.log(key,") ",ansObj[key]);
       }
     var takeAnswer = readlineSync.question("Your answer?"); 
      
       if(takeAnswer.toLowerCase()==quizList[i].correct)
       {
         scoreCount++;
         console.log("Your Answer is correct, Your score - ",scoreCount);
       }
       else
          {
            console.log("Wrong Answer","Correct Answer is :",quizList[i].correct," Your score is-", scoreCount);
          }

}