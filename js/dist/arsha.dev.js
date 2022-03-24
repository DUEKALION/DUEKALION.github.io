"use strict";

/*var scrollspy = new bootstrap.ScrollSpy(document.header, {
    target: '#navbarWork'
});
*/

/* Responsive Grid Images */
var _require = require("react-bootstrap"),
    NavLink = _require.NavLink; //Selecting my buttons for manipulations


var button1 = document.querySelector("#butt1");
var button2 = document.querySelector("#butt2");
var button3 = document.querySelector("#butt3");
var button4 = document.querySelector("#butt4");
var imagesMap = document.querySelectorAll(".imgRes");
button1.addEventListener("click", function () {
  for (var i = 0; i < imagesMap.length; i++) {
    imagesMap[0].setAttribute('src', 'assets/img/portfolio/portfolio-1.jpg');
    imagesMap[1].setAttribute("src", "assets/img/portfolio/portfolio-6.jpg");
    imagesMap[2].setAttribute('src', 'assets/img/portfolio/portfolio-2.jpg');
    imagesMap[3].setAttribute("src", "assets/img/portfolio/portfolio-4.jpg");
    imagesMap[4].setAttribute('src', 'assets/img/portfolio/portfolio-5.jpg');
    imagesMap[5].setAttribute("src", "assets/img/portfolio/portfolio-3.jpg");
    imagesMap[6].setAttribute('src', 'assets/img/portfolio/portfolio-7.jpg');
    imagesMap[7].setAttribute("src", "assets/img/portfolio/portfolio-8.jpg");
    imagesMap[8].setAttribute('src', 'assets/img/portfolio/portfolio-9.jpg');
    imagesMap[0].style.display = "inline-block";
    imagesMap[1].style.display = "inline-block";
    imagesMap[2].style.display = "inline-block";
    imagesMap[3].style.display = "inline-block";
    imagesMap[4].style.display = "inline-block";
    imagesMap[5].style.display = "inline-block";
    imagesMap[6].style.display = "inline-block";
    imagesMap[7].style.display = "inline-block";
    imagesMap[8].style.display = "inline-block";
  }
});
button2.addEventListener("click", function () {
  for (var i = 0; i < imagesMap.length; i++) {
    //Changing the attributes for the images to be displayed
    imagesMap[0].setAttribute('src', 'assets/img/portfolio/portfolio-1.jpg');
    imagesMap[2].setAttribute('src', 'assets/img/portfolio/portfolio-3.jpg');
    imagesMap[5].setAttribute("src", "assets/img/portfolio/portfolio-6.jpg");
    imagesMap[1].style.display = "none";
    imagesMap[3].style.display = "none";
    imagesMap[4].style.display = "none";
    imagesMap[6].style.display = "none";
    imagesMap[7].style.display = "none";
    imagesMap[8].style.display = "none";
  }
});
button3.addEventListener("click", function () {
  imagesMap[0].setAttribute("src", "assets/img/portfolio/portfolio-7.jpg");
  imagesMap[2].setAttribute("src", "assets/img/portfolio/portfolio-8.jpg");
  imagesMap[5].setAttribute("src", "assets/img/portfolio/portfolio-9.jpg");
  imagesMap[1].style.display = "none";
  imagesMap[3].style.display = "none";
  imagesMap[4].style.display = "none";
  imagesMap[6].style.display = "none";
  imagesMap[7].style.display = "none";
  imagesMap[8].style.display = "none";
  imagesMap[9].style.display = "none";
});
button4.addEventListener("click", function () {
  imagesMap[0].setAttribute("src", "assets/img/portfolio/portfolio-2.jpg");
  imagesMap[2].setAttribute("src", "assets/img/portfolio/portfolio-5.jpg");
  imagesMap[5].setAttribute("src", "assets/img/portfolio/portfolio-9.jpg");
  imagesMap[1].style.display = "none";
  imagesMap[3].style.display = "none";
  imagesMap[4].style.display = "none";
  imagesMap[6].style.display = "none";
  imagesMap[7].style.display = "none";
  imagesMap[8].style.display = "none";
  imagesMap[9].style.display = "none";
});
/* Navbar Scroll Function */

var myNav = document.getElementById("navbarWork");
myNav.classList.add("nav-colored");

window.onscroll = function () {
  "use strict";

  if (document.body.scrollTop || document.documentElement.scrollTop >= 100) {
    myNav.classList.remove("nav-colored");
    myNav.classList.add("nav-transparent");
  } else {
    myNav.classList.remove("nav-transparent");
    myNav.classList.add("nav-colored");
  }
};
/* changing activenl button */