var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's Your name? ");
console.log("Hey...!"  +userName)
console.log("Welcome to do you know Briju ");
console.log("Type the appropriate option i.e a or b or c");
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
{
  console.log("Your Right..!");
  score = score + 1;
}
else
{
  console.log("Your Wrong..!");
}
console.log("Current score : ", score)
console.log("----------");
}
var questions =
[
  {
    question:"1. Whats briju's favourite color ? a. Black b. White c. Blue ",
    answer : "c"
  },
  {
    question : "2. What's Briju's favourite food ?  a. Sandwich b. Panner c. Noodels ",
    answer : "b"
  },
  {
    question : "3. Which genre book's does Briju read a lot ? a. Philosophical b. Romance c. Horror ",
    answer : "a"
  },
  {
    question : "4. Which is Briju's favourite subject ? a. physics b. Mathematics c. Sanskrit ",
    answer : "b"
  },
  {
    question : "5. Briju's favourite Super-hero would be ? a. Superman b. Batman c. Deadpool ",
    answer : "b"
  },
  {
    question : "6. Briju's favourite writer would be ? a. Joseph Murphy b. Chethan Bhagat c. Ayn Rand ",
    answer : "a"
  },
  {
    question : "7. Which would Briju prefer to do among this ?, a. Meditation b. Work-Out c. Browsing-Internet ",
    answer : "a"
  },
  {
    question : "8. Do Briju believe in god ?, a. Yes b. No c. Depend's on the situation ",
    answer : "b"
  },
  {
    question : "9. Among this movie's which movie does Briju hate the most ? a. Raabta b. Saakshyam c. Love aaj kal-2 ",
    answer : "b"
  },
  {
    question : "10. Who's philosophy inspire's Briju the most ? a. Ayn Rand's philosophy b. Murray Rothbard's philosophy c. Ron Paul's philosophy ",
    answer : "a"
  }
];
for (var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("There You go , You have scored : ", score);
console.log("Send a screen-shot of your score");