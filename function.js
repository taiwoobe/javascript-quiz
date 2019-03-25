function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var q1 = new Question ('Is JavaScript the coolest programming language?', ['Yes', 'No'], 0);

var q2 = new Question ('What is the name of the person who invented JavaScript?', ['Mark Goldberg', 'Tom Cruise', 'None of the Above'], 2);

var q3 = new Question ('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);