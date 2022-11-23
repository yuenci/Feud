import { Avatar } from '../script/avatar.js';

class Tools {
    static gamesList = [];
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

    }
}

export { Tools };