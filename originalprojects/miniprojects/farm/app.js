
// assigning html div elements to variables.
let cow = document.querySelector('#cow');
let chicken = document.querySelector('#chicken');
let pig = document.querySelector('#pig');
let horse = document.querySelector('#horse');
let sheep = document.querySelector('#sheep');
let duck = document.querySelector('#duck');
let dog = document.querySelector('#dog');
let bird = document.querySelector('#bird');
let cat = document.querySelector('#cat');

// assigning audio elements to variables.
let cowsound = document.querySelector('#cowsound');
let chickensound = document.querySelector('#chickensound');
let pigsound = document.querySelector('#pigsound');
let horsesound = document.querySelector('#horsesound');
let sheepsound = document.querySelector('#sheepsound');
let ducksound = document.querySelector('#ducksound');
let dogsound = document.querySelector('#dogsound');
let birdsound = document.querySelector('#birdsound');
let catsound = document.querySelector('#catsound');


cow.addEventListener('click', function() {
    cowsound.play();
});

chicken.addEventListener('click', function() {
    chickensound.play();
});

pig.addEventListener('click', function() {
    pigsound.play();
});

horse.addEventListener('click', function() {
    horsesound.play();
});

sheep.addEventListener('click', function() {
    sheepsound.play();
});

duck.addEventListener('click', function() {
    ducksound.play();
});

dog.addEventListener('click', function() {
    dogsound.play();
});

bird.addEventListener('click', function() {
    birdsound.play();
});

cat.addEventListener('click', function() {
    catsound.play();
});


let oldMcdonald = document.querySelector('#oldMcdonald');

window.addEventListener('click', function() {
    oldMcdonald.play();
    oldMcdonald.volume = 0.3;
})

