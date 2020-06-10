const data = [
    {caption: "Apep, image 1/3", src: "apep.jpg"}, 
    {caption: "Hydra, image 2/3", src: "hydra.jpg"},
    {caption: "Jormungandr, image 3/3", src: "jormungandr.jpg"}
];

/*
// load html content depending on slidenumber
let slidenumber = 0;

let ancientImage= document.querySelector('#ancient-dragon-image');
let slideshowDescription = document.querySelector('#slideshow-description')

ancientImage.src = data[slidenumber]['src']
slideshowDescription.innerHTML = data[slidenumber]['caption']
*/

// global with var, bad form but i'm bad.
var ancientImage= document.querySelector('#ancient-dragon-image');
var slideshowDescription = document.querySelector('#slideshow-description')

// index which should always be 0 1 or 2 
var n = 0;

function displaySlide() {
    ancientImage.src = data[n]['src']
    slideshowDescription.innerHTML = data[n]['caption']
}

function next() {
    if (n < 2) {
        n += 1;
        displaySlide(n);
    }
}

function prev() {
    if (n > 0) {
        n -= 1;
        displaySlide(n);
    }
}

document.querySelector('#next').onclick = next()
document.querySelector('#prev').onclick = prev()