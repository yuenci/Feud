import { Avatar } from '../script/avatar.js';
import { questionData } from './data.js';
import { Question } from './question.js';

class Tools {
    static gamesList = [];
    static currentQuestion = 1;
    static clearFeudAnswers() {
        const feud = document.querySelectorAll('#feudBox');
        const childs = feud[0].childNodes;

        for (let i = 0; i < childs.length; i++) {
            feud.removeChild(childs[i]);
        }
    }


    static initGamer() {
        // add red team gamers
        const redTeamGamer1 = new Avatar('red');
        const redTeamGamer2 = new Avatar('red');
        const redTeamGamer3 = new Avatar('red');
        const redTeamGamer4 = new Avatar('red');
        // add blue team gamers
        const blueTeamGamer1 = new Avatar('blue');
        const blueTeamGamer2 = new Avatar('blue');
        const blueTeamGamer3 = new Avatar('blue');
        const blueTeamGamer4 = new Avatar('blue');

    }


    static initQustion() {
        // number to string

        let currentQuestionNum = Tools.currentQuestion.toString();
        let currentQuestion = questionData[currentQuestionNum];
        let question = currentQuestion.question;

        $('#questionBox').text(question);

        let answers = currentQuestion.answers;
        // console.log(answers);
        // for 8
        for (let i = 1; i <= 8; i++) {
            let answer = answers[i.toString()];
            let question = new Question(answer, false);
        }

    }
}

export { Tools };