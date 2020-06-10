const data = [
    {caption: "Apep, image 1/3", src: "apep.jpg"}, 
    {caption: "Hydra, image 2/3", src: "hydra.jpg"},
    {caption: "Jormungandr, image 3/3", src: "jormungandr.jpg"}
];

// load html content depending on slidenumber
let slidenumber = 0;

let ancientImage= document.querySelector('#ancient-dragon-image');
let slideshowDescription = document.querySelector('#slideshow-description')

ancientImage.src = data[slidenumber]['src']
slideshowDescription.innerHTML = data[slidenumber]['caption']

