import '../style/main.css'


class Frame {
    static render() {
        let container = document.createElement('div');
        container.id = 'feudContainer';
        document.body.appendChild(container);
        container.innerHTML = `
            <div class="teamBox" id="teamBox-left">
                <div id="scorebarLeft">
                    <div>Points: </div>
                    <div id="scorered">0</div>
                </div>
                <div id="avatarBoxLeft"></div>
                </div>
                <div id="mainBox">
                    <div id="feudBox">
                        <div id="questionBox"></div>
                        <div id="answerBox"></div>
                    </div>
                    <div class="optionBox">
                        <div id="current-gamer"></div>
                        <div id="inputBox">
                            <input type="text" id="inputField" placeholder="Enter your answer here">
                        </div>
                        <div id="okayBtn" class="btn">
                            <div>OK</div>
                        </div>
                    </div>
                </div>
                <div class="teamBox" id="teamBox-right">
                    <div id="scorebarRight">
                        <div>Points: </div>
                        <div id="scoreblue">0</div>    
                    </div>
                    <div id="avatarBoxRight"></div>
            </div>
        `;
        // insert to app
        document.querySelector('#app').appendChild(container);
    }
}

export { Frame };