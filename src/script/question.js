class Question {
    constructor(question, answer, correct) {
        this.question = question;
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
            <div class="answer-text">Show encouragement</div>
        `;
        return question;
    }

    render(question) {
        $("#questionBox").append(question);
    }


    checkAnswer(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)');
        }
    }
}