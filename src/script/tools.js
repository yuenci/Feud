import { Avatar } from '../script/avatar.js';
import { questionData } from './data.js';
import { Question } from './question.js';

class Tools {
    static gamesList = [];
    static answersList = [];
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
            Tools.answersList.push(question);
        }
    }

    static initOKBtn() {
        $("#okayBtn").on('click', function () {
            let answer = $('#inputField').val();
            let flag = false;

            for (let i = 0; i < Tools.answersList.length; i++) {
                let question = Tools.answersList[i];
                let res = question.checkAnswer(answer);
                if (res) {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                Tools.showSuccess();
            } else {
                Tools.showFail();
            }
        });
    }

    static showSuccess() {
        console.log("right");
        let index = layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: `<img class="gifImage" src="../public/correct/${Tools.getRandIntNum()}.gif" style="width:400px">`,
            area: '400px'
        });

        Tools.showParty("red");
    }

    static showFail() {
        console.log("wrong");
        let index = layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: `<img class="gifImage" src="../public/incorrect/${Tools.getRandIntNum()}.gif" style="width:400px">`,
            area: '400px'
        });

        Tools.showParty("blue");
    }

    static showParty(team) {
        let teamName = team.toLowerCase();
        let teamObj = null;
        if (teamName === 'red') {
            teamObj = document.getElementById("avatarBoxLeft");
        } else if (teamName === 'blue') {
            teamObj = document.getElementById("avatarBoxRight");
        }
        party.confetti(teamObj, {
            count: party.variation.range(60, 80),
            spread: party.variation.range(30, 40),
            size: party.variation.range(1.5, 2)
        });
    }

    static initNextBtn() {

    }

    static getRandIntNum() {
        let min = 0;
        let max = 9;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static updateScore(color) {
        let score = document.querySelector(`#score${color}`);
        let scoreNum = parseInt(score.innerHTML);
        scoreNum += 100;
        score.innerHTML = scoreNum.toString();
    }
}

export { Tools };