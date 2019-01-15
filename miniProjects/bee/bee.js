let button = document.querySelector('button');
let body = document.querySelector('body');
let audio = document.querySelector('audio');




button.addEventListener('click', function() {
    audio.play();

    if (body.className === 'yellow') {
        body.className = 'black';
    } else {
        body.className = 'yellow';
    }
});