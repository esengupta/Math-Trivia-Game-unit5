
var questions = [{
  ques: "1. If there is a basket of 13 apples and you take three of them, how many apples do you have?",
  ans: ["10", "1", "16", "3"],
  name: "apple",
  correct: "10",
  divClass: ".apple"
},
{
  ques: "2. How many 2-cent stamps does it take to make a dozen?",
  ans: ["0", "6", "12", "3"],
  name: "stamp",
  correct: "6",
  divClass: ".stamp"
},

{
  ques: "3. How many gallons are in 20 quarts?",
  ans: ["10", "5", "2.5", "4."],
  name: "gallon",
  correct: "5",
  divClass: ".gallon"
},
{
  ques: "4. What is 84 inches in feet and inches?",
  ans: ["6 Feet 8 Inches", "7 Feet 0 Inches", "10 Feet 8 Inches", "8 Feet 0 Inches"],
  name: "feet",
  correct: "7 Feet 0 Inches",
  divClass: ".feet"
},
{
  ques: "5. If you divide 14 by 1/2, what do you get?",
  ans: ["7", "0.50", "2", "28"],
  name: "divide",
  correct: "7",
  divClass: ".divide"
},
{
  ques: "6. Within the same day, how much time will pass between 2:15 PM and 5:15 PM?",
  ans: ["3 Hours 15 Minutes", "2 Hours 45 Minutes", "3 Hours", "2 Hours 15 Minutes"],
  name: "hours",
  correct: "3 Hours",
  divClass: ".hours"
},

] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(40);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions").empty();
// loops through the 6 questions 
for (var j = 0; j < questions.length; j++) {
$('.questions').append('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
  $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').append('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
  $('.container').fadeOut(500);
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  // loop through correctArray & radioName to match html elements & answers
  for (var i = 0; i < 6; i++) {

      if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

          correctAnswers++;
          console.log("this is correct! number:" + i)
      } else {
          wrongAnswers++;
          console.log("this is wrong! number:" + i)
      };
  }
  $('#correctTimesUp').append(correctAnswers);
  // display wrongAnswers
  $('#wrongTimesUp').append(wrongAnswers);
  $('#timesUp').fadeIn(1000).show();

  // alert("Times Up!");
  clearInterval(timer);
  return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 6; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

  correctAnswers++;
} else {
  wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); 
// end gradeQuiz
