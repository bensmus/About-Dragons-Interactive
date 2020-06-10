let myImage = document.querySelector('img');

/* Works, but not cool
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'dragon-0.png') {
      myImage.setAttribute ('src','dragon.gif');
    } else {
      myImage.setAttribute ('src','dragon-0.png');
    }
}
*/

/* Works, but very unintuitive
myImage.onmouseover = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'dragon-0.png') {
    myImage.setAttribute ('src','dragon.gif');
  } else {
    myImage.setAttribute ('src','dragon-0.png');
  }
}
*/

myImage.onmouseover = function() {
  myImage.setAttribute('src', 'dragon.gif');
}

myImage.onmouseleave = function() {
  myImage.setAttribute('src', 'dragon-0.png')
}