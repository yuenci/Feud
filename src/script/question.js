import '../style/question.css';

class Question {
    constructor(answer, correct) {
        this.answer = answer;
        this.correct = correct;
        this.init();
    }

    init() {
        const question = this.createElement();
        this.render(question);
    }

    createElement() {
        const question = document.createElement('div');
        question.classList.add('question-container');
        question.innerHTML = `
            <div class="answer-text">${this.answer}</div>
        `;
        return question;
    }

    render(question) {
        $("#answerBox").append(question);
    }


    checkAnswer(ans) {
        if (ans === this.answer) {
            //console.log('Correct answer!');
            this.correct = true;
            return true;
        } else {
            //console.log('Wrong answer. Try again :)');
            this.correct = false;
            return false;
        }
    }
}

export { Question };