//Get the button:
var nav = document.getElementById("nav");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.add('untransparent');
    nav.classList.remove('transparented');
  } else {
    
    nav.classList.add('transparented');
    transparented

  }
}
