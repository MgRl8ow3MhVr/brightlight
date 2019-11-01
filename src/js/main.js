console.log("it works");

// const gestion = () => {
//   let windowHeight = window.height();
//   console.log(windowHeight);
//   let windowWidth = $(window).width();
//   console.log(windowWidth);
//   window.onresize

//   document.querySelector(".windowSize").textContent = "TEST";
// };
// window.addEventListener("resize", gestion);

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;
  console.log(myHeight);
  document.getElementById("windowSize").innerText = myWidth + "x" + myHeight;
}
