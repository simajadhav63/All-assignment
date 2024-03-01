const crl = document.querySelector('.white_circle');
const hd = document.querySelector('.heading');


crl.addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    heading.style.color = heading.style.color === 'white' ? 'black' : 'white';


});

let tog_right = false;

function toggle() {
    var div = document.getElementById("white_round");

    if (!tog_right) {
        div.style.transform = "translateX(70px)";
    } else {
        div.style.transform = "none";
    }
    tog_right = !tog_right;

}

const sun_tog = document.querySelector('#sun_png')

sun_tog.addEventListener("click", function () {
    var div = document.getElementById("white_round");

    if (!tog_right) {
        div.style.transform = "translateX(70px)";
    } else {
        div.style.transform = "none";
    }
    tog_right = !tog_right;

    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    heading.style.color = heading.style.color === 'white' ? 'black' : 'white';
});

const moon_tog = document.querySelector('#moon_png')

moon_tog.addEventListener("click", function () {
    var div = document.getElementById("white_round");

    if (!tog_right) {
        div.style.transform = "translateX(70px)";
    } else {
        div.style.transform = "none";
    }
    tog_right = !tog_right;

    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    heading.style.color = heading.style.color === 'white' ? 'black' : 'white';
});