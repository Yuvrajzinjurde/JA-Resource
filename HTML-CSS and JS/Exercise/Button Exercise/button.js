const buttonElement = document.querySelector('.js-button');
const result = buttonElement.classList.contains('js-button');
console.log(result);

function doChecks(buttonClass) {

    if (!buttonClass.classList.contains('is-toggle')) {
        if (buttonClass.classList.contains('gaming-button2')) {
            if ((!document.querySelector('.Music').classList.contains('is-toggle')) && (!document.querySelector('.Tech').classList.contains('is-toggle'))) {
                buttonClass.classList.add('is-toggle');
            }

        } else if (buttonClass.classList.contains('Music')) {

            if ((!document.querySelector('.gaming-button2').classList.contains('is-toggle')) && (!document.querySelector('.Tech').classList.contains('is-toggle'))) {
                buttonClass.classList.add('is-toggle');
            }

        } else if (buttonClass.classList.contains('Tech')) {

            if ((!document.querySelector('.Music').classList.contains('is-toggle')) && (!document.querySelector('.gaming-button2').classList.contains('is-toggle'))) {
                buttonClass.classList.add('is-toggle');
            }

        }
    }
    else {
        buttonClass.classList.remove('is-toggle');
    }
}



