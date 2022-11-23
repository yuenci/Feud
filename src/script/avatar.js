import '../style/avatar.css'
import { Tools } from './tools';

class Avatar {
    constructor(color, name = null) {
        this.name = name;
        this.color = color;
        this.init();
    }

    init() {
        const avatar = this.createElement();
        const $avatar = this.addEventListeners(avatar);
        this.render($avatar);
    }

    createElement() {
        const avatar = document.createElement('div');
        avatar.classList.add('avatar-container');
        avatar.innerHTML = `
            <div class="avatar"></div>
            <div class="name-input-container">
                <input type="text" class="name-input">
            </div>
        `;
        return avatar;
    }

    addEventListeners(avatar) {
        let $avatar = $(avatar)

        //console.log(avatar.children);
        // get child elements
        let nameAvatar = avatar.children[0];
        let nameInput = avatar.children[1].children[0];


        nameInput.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.name = nameInput.value;
                const firstLetter = this.name.charAt(0).toUpperCase();
                nameAvatar.innerHTML = firstLetter;
                $(nameInput).attr('disabled', true);
            }
        });

        $avatar.find('.name-input-container').on('click', function () {
            const input = $(this).children();
            input.attr('disabled', false);
            input.focus();
        });


        nameAvatar.addEventListener('click', () => {
            $("#current-gamer").css("background", $(nameAvatar).css("background"));
            $("#current-gamer").text($(nameAvatar).text());
            Tools.currentTeam = this.color;

            if (Tools.currentTeam === 'red') {
                // change background color
                $("#teamBox-left").css("background", "#495057");
                $("#teamBox-right").css("background", "#e9ecef");

                $("#scorebarLeft").css("color", "#fff");
                $("#scorebarRight").css("color", "black");
            } else if (Tools.currentTeam === 'blue') {
                $("#teamBox-left").css("background", "#e9ecef");
                $("#teamBox-right").css("background", "#495057");

                $("#scorebarLeft").css("color", "black");
                $("#scorebarRight").css("color", "#fff");
            }
        });
        return $avatar;
    }



    render($avatar) {
        if (this.color === 'red') {
            $avatar.find('.avatar').css('background', '#ff6b6b');
            $("#avatarBoxLeft").append($avatar);

        } else if (this.color === 'blue') {
            $avatar.find('.avatar').css('background', '#339af0');
            $("#avatarBoxRight").append($avatar);
        } else {
            throw new Error('Invalid color');
        }
    }
}

export { Avatar };