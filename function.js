function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var q1 = new Question ('Is JavaScript the coolest programming language?', ['Yes', 'No'], 0);