console.log("it works");

// # # # # # # # #  rotation autos

function rotation(element, num) {
  let degres = (Math.random() * 360) / num;
  element.style.transform = `rotate(${degres}deg)`;
}

function shakeit(element, num) {
  let degres = (Math.random() * 360) / num;
  if (degres * num > 350) {
    element.style.transform = `scale(1.5)`;
  } else {
    element.style.transform = `rotate(${degres}deg)`;
  }
}

function rotation(element) {
  let centaine = Number(element.style.transform.charAt(7));
  centaine = (centaine + 1) % 10;
  element.style.transform = `rotate(${centaine}00deg)`;
}

function shaketranslation(element, num) {
  xtrans = Math.random() * 15;
  if (xtrans > 14.8) {
    xtrans = 100;
  }
  if (xtrans > 14.9) {
    xtrans = -100;
  }
  xtrans -= 7;
  xtrans = xtrans / num;
  element.style.transform = `translate(0px,${xtrans}px)`;
  if (xtrans < -6.95 / num) {
    console.log("coucou");
    element.style.transform = `translate(0px,${xtrans}px) scale(2)`;
  }
}

var svgel = document.querySelector(".svgel");
var idsvgel = setInterval(shakeit, 200, svgel, 1);

var slantedrectanges = document.querySelectorAll(".slantedrectange");
slantedrectanges.forEach(item => {
  setInterval(shakeit, 50, item, 40);
});
var seemore = document.querySelector(".seemore div");
var idseemore = setInterval(shaketranslation, 30, seemore, 1);

var count = document.querySelector(".count");
var idcount = setInterval(rotation, 200, count);

var arrow = document.querySelector(".seemore svg");
var idcarrow = setInterval(rotation, 200, arrow);

var titre = document.querySelector(".hero h1");
var idtitre = setInterval(shaketranslation, 100, titre, 1);

var carts = document.querySelectorAll(".addtocart");
carts.forEach(cart => {
  setInterval(shaketranslation, 100, cart, 3);
});

var windowSize = document.querySelector("#windowSize");
var idwindowSize = setInterval(shakeit, 200, windowSize, 40);

// # # # # # # # # NightShift

const hero = document.querySelector(".hero");
const nightButton = document.querySelector(".svgel");

const changenight = () => {
  nightButton.animate(({ left: "0px" }, { duration: 400 }));
  if (hero.classList[0] === "hero") {
    hero.classList.remove("hero");
    hero.classList.add("heronight");
    hero.classList.add("hero");
  } else {
    hero.classList.remove("heronight");
  }
  console.log(hero);
};

nightButton.addEventListener("click", changenight);

// # # # # # # window Size # # # # # #

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;
  console.log(myHeight);
  document.getElementById("windowSize").innerText = myWidth + "x" + myHeight;
}
