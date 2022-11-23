class Question {
    constructor(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    displayQuestion() {
        console.log(this.question);
        for (let i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }
    checkAnswer(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)');
        }
    }
}