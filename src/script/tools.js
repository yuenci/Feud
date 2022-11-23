import { Avatar } from '../script/avatar.js';
import { questionData } from './data.js';
import { Question } from './question.js';

class Tools {
    static gamersList = [];
    static answersList = [];
    static currentTeam = null;
    static currentQuestion = 3;

    static init() {
        // set background image
        Tools.initCurrentGamer();
    }


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
        Tools.gamersList.push(redTeamGamer1);
        const redTeamGamer2 = new Avatar('red');
        Tools.gamersList.push(redTeamGamer2);
        const redTeamGamer3 = new Avatar('red');
        Tools.gamersList.push(redTeamGamer3);
        const redTeamGamer4 = new Avatar('red');
        Tools.gamersList.push(redTeamGamer4);
        // add blue team gamers
        const blueTeamGamer1 = new Avatar('blue');
        Tools.gamersList.push(blueTeamGamer1);
        const blueTeamGamer2 = new Avatar('blue');
        Tools.gamersList.push(blueTeamGamer2);
        const blueTeamGamer3 = new Avatar('blue');
        Tools.gamersList.push(blueTeamGamer3);
        const blueTeamGamer4 = new Avatar('blue');
        Tools.gamersList.push(blueTeamGamer4);

        // get avatar width
        let avatarobj = document.getElementsByClassName('avatar')[0];
        let avatarComputedStyleWidth = window.getComputedStyle(avatarobj).width;

        $(".avatar").css("height", avatarComputedStyleWidth);


    }


    static initQustion() {
        // reset answers list and remove all answers

        Tools.answersList = [];
        $("#answerBox").empty();


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
    static initCurrentGamer() {
        let avatarobj = document.getElementById('current-gamer');
        let avatarComputedStyleH = window.getComputedStyle(avatarobj).height;

        $("#current-gamer").css("width", avatarComputedStyleH);
    }



    static initOKBtn() {

        $("#okayBtn").on('click', function () {
            // check input
            let answer = $('#inputField').val();
            //  delect both side space
            answer = answer.trim();
            answer = answer.toLowerCase();
            if (answer === "") {
                console.log("please input answer");
                return;
            }


            // check gamer
            console.log("check gamer disabled");
            // if (!Tools.checkGamer()) {
            //     console.log("please input gamer name");
            //     return;
            // }

            // check current gamer
            if (Tools.currentTeam === null) {
                console.log("please select team");
                return;
            }


            let flag = false;


            for (let i = 0; i < Tools.answersList.length; i++) {
                let question = Tools.answersList[i];
                if (question.correct === false) {
                    let res = question.checkAnswer(answer);
                    if (res) {
                        flag = true;
                        break;
                    }
                } else {
                    flag = "exist"
                }
            }
            // console.log(flag);
            if (flag == "exist") {
                alert("Answer already exist");
            } else if (flag) {
                //Tools.showSuccess();
                Tools.updateScore();
            } else {
                Tools.showFail();
            }

            // check if round finish
            Tools.ifFinish();
        });

        //set enter key
        $('#inputField').on('keypress', function (e) {
            if (e.which == 13) {
                $("#okayBtn").click();
            }
        });


    }

    static ifFinish() {
        let answersNum = 0;

        for (let i = 0; i < Tools.answersList.length; i++) {
            let question = Tools.answersList[i];
            if (question.correct) {
                answersNum++;
            }
        }
        console.log("answersNum: " + answersNum);

        if (answersNum == 8) {
            Tools.currentQuestion++;
            if (Tools.currentQuestion == 4) {
                console.log("game over");
            } else {
                Tools.initQustion();
            }
        }
    }

    static checkGamer() {
        let flag = true;
        $(".avatar").each(function () {
            if ($(this).text() === "") {
                flag = false;
            }
        });

        return flag;
    }

    static showSuccess() {
        let index = layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: `<img class="gifImage" src="../public/correct/${Tools.getRandIntNum()}.gif" style="width:400px">`,
            area: '400px'
        });
        Tools.showParty();
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

    }

    static showParty() {
        if (Tools.currentTeam === null) {
            console.log("please select team");
            return;
        }

        let teamName = Tools.currentTeam.toLowerCase();
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

    static updateScore() {
        let color = Tools.currentTeam;

        let score = document.querySelector(`#score${color}`);
        let scoreNum = parseInt(score.innerHTML);
        scoreNum += 100;
        score.innerHTML = scoreNum.toString();
    }
}

export { Tools };