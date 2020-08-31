$(window).on("load", function() {
	$(".loading").fadeOut(1000, function() {
		$(".navbar").css("animation-play-state", "running");
		$(".navlinks p").css("animation-play-state", "running");
		$("#logo").css({"animation-play-state":"running","display":"block"});
		$(".container").css("animation-play-state", "running");
		$(".intro-tag").css("animation-play-state", "running");
		$("body").css("overflow-y", "scroll");
	});
});
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
var mainCont = document.getElementById("intro-tag");


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


function scrollWorks() {
  var fStop = document.getElementById("mainCont");
      fStop.scrollIntoView({ behavior: 'smooth' });
}

function scrollAbout() {
  var fStop = document.getElementById("about");
      fStop.scrollIntoView({ behavior: 'smooth' });
}

function scrollContact() {
  var fStop = document.getElementById("contact");
      fStop.scrollIntoView({ behavior: 'smooth' });
}

function animationRestart() {


}
