//script to execute various onload functions: "loadEvent"
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(stickyGlobFunc);
//end LoadEvent



//Sticky NavBar
function stickyGlobFunc() {
window.onscroll = function() {stickyFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var mainCont = document.getElementById("mainCont");


    function stickyFunction() {
     if ((window.pageYOffset - 40) >= sticky) {
       navbar.classList.add("sticky");
       mainCont.classList.add("contMargin");
       navbar.style.backgroundImage = imgPath;

     } else {
       navbar.classList.remove("sticky");
       mainCont.classList.remove("contMargin");
       navbar.style.backgroundImage = "";
     }
}



};
//end NavBar
