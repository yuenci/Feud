import '../style/avatar.css'

class Avatar {
    constructor(color, name = "none") {
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
        avatar.style.background = this.color;
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
        $avatar.find('.avatar').on('keypress', function (e) {
            if (e.keyCode === 13) {
                console.log("hihi");
                const name = $(this).val();
                const firstLetter = name.charAt(0).toUpperCase();
                // get brother element
                $(this).siblings('.avatar').text(firstLetter);
                // read only
                $(this).attr('readonly', true);
            }
        });

        $avatar.find('.name-input-container').on('click', function () {
            const input = $(this).children();
            input.attr('disabled', false);
            input.focus();
        });
        return $avatar;
    }

    render($avatar) {
        if (this.color === 'red') {
            $avatar.find('.avatar').css('background', 'red');
            $("#avatarBoxLeft").append($avatar);

        } else if (this.color === 'blue') {
            $avatar.find('.avatar').css('background', 'blue');
            $("#avatarBoxRight").append($avatar);
        } else {
            throw new Error('Invalid color');
        }
    }
}

export { Avatar };