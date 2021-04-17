let css = ".fp-sr-only ~ span {background-color: #333 !important;}",
  head = document.head || document.getElementsByTagName("head")[0],
  style = document.createElement("style");

function changeDot() {
  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
}

function toBlack() {
  logo.classList.add("black");
  twitter.src = "assets/img/twitter-black.png";
  facebook.src = "assets/img/facebook-black.png";
  linkedin.src = "assets/img/linkedin-black.png";
  instagram.src = "assets/img/instagram-black.png";
  number.classList.add("black");
  menu.src = "assets/img/menu-black.svg";
  header.classList.add("border-white");

  css = ".fp-sr-only ~ span {background-color: #333 !important;}";
}

function toWhite() {
  logo.classList.remove("black");
  twitter.src = "assets/img/twitter.png";
  facebook.src = "assets/img/facebook.png";
  linkedin.src = "assets/img/linkedin.png";
  instagram.src = "assets/img/instagram.png";
  menu.src = "assets/img/menu-white.svg";
  number.classList.remove("black");
  header.classList.remove("border-white");
  css = ".fp-sr-only ~ span {background-color: white !important;}";
}

let logo = document.getElementById("logo");
let number = document.querySelector(".number");
let twitter = document.getElementById("twitter");
let facebook = document.getElementById("facebook");
let linkedin = document.getElementById("linkedin");
let instagram = document.getElementById("instagram");
let dots = document.querySelector(".fp-sr-only");
let menu = document.querySelector(".menu-img");
let header = document.getElementById("header");
let s6 = document.querySelector(".s6");

var obj = {
  autoScrolling: true,
  navigation: true,
  fitToSection: true,
  css3: true,
  easingcss3: "cubic-bezier(.8,.08,.18,.94)",

  anchors: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"],

  onLeave: function (origin, destination, direction) {
    var leavingSection = this;

    //animating my element
    if (origin.index == 0 && direction == "down") {
      setTimeout(toBlack, 400);
      setTimeout(changeDot, 400);
    }
    if (origin.index == 1 && direction == "up") {
      toWhite();
      changeDot();
    }
    if (origin.index == 1 && direction == "down") {
      toBlack();
      changeDot();
    }

    if (origin.index == 3 && direction == "down") {
      setTimeout(toWhite, 400);
      setTimeout(changeDot, 400);
    }
    if (origin.index == 4 && direction == "down") {
      toWhite();
      changeDot();
    }
    if (origin.index == 4 && direction == "up") {
      toBlack();
      changeDot();
    }

    if (origin.index == 4 && direction == "down") {
      setTimeout(toBlack, 400);
      setTimeout(changeDot, 400);
    }
    if (origin.index == 5 && direction == "up") {
      toWhite();
      changeDot();
    }
  },
};
var myFullPage = new fullpage("#fullPage", obj);
if (s6.classList.contains("active")) {
  obj.autoScrolling = false;
  scrollOverflow = true;
}

function closeSide() {
  // document.getElementById('sidebar').classList.add('hide-menu')
  document.getElementById("sidebar").style.transform = "translateX(100%)";
  document.getElementById("sidebar__up").classList.remove("animate");
  document.getElementById("sidebar__down").classList.remove("animate");
  document.getElementById("copyright").classList.remove("animate");
}
function openSide() {
  // document.getElementById('sidebar').classList.remove('hide-menu')
  document.getElementById("sidebar").style.transform = "translateX(0%)";
  document.getElementById("sidebar__up").classList.add("animate");
  document.getElementById("sidebar__down").classList.add("animate");
  document.getElementById("copyright").classList.add("animate");
}
