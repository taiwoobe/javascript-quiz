function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}


Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

var q1 = new Question ('Is JavaScript the coolest programming language?', ['Yes', 'No'], 0);

var q2 = new Question ('What is the name of the person who invented JavaScript?', ['Mark Goldberg', 'Tom Cruise', 'None of the Above'], 2);

var q3 = new Question ('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);


var questions = [q1, q2, q3]; 

// Generate random numbers between 0 and the total number of questions.
// Using Math.floor to remove all the decimals
var num = Math.floor(Math.random() * questions.length);

questions[num];

