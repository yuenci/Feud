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


        $avatar.find('.name-input').on('keypress', function (e) {
            if (e.keyCode === 13) {
                const name = $(this).val();
                const firstLetter = name.charAt(0).toUpperCase();
                // get parent brother element
                const avatar = $(this).parent().prev();
                avatar.text(firstLetter);
                // disable input
                $(this).attr('disabled', true);
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