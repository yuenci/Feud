


class Frame {
  static render() {
    let container = document.createElement('div');
    container.id = 'feudContainer';
    document.body.appendChild(container);
    container.innerHTML = `
<div class="teamBox">
            <div id="scorebarLeft"></div>
            <div id="avatarBoxLeft"></div>
        </div>
        <div id="mainBox">
            <div id="feudBox"></div>
            <div class="optionBox">
                <div id="inputBox">
                    <input type="text" id="inputField" placeholder="Enter your answer here">
                </div>
                <div id="okayBtn" class="btn">
                    <div>OK</div>
                </div>
            </div>
        </div>
        <div class="teamBox">
            <div id="scorebarRight"></div>
            <div id="avatarBoxRight"></div>
        </div>
`;
  }
}