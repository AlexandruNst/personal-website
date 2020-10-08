var slogan = document.getElementById("slogan");
var sloganNext = document.getElementById("slogan-next");

var text = ["creative coder", "public speaker", "challenge seeker"];
var i = 2;

var sloganStyle = slogan.style;
var sloganNextStyle = sloganNext.style;

setTimeout(function() {
  resetAnimations();
}, 2400);

setTimeout(function() {
  setAnimations();
}, 2000);

window.onload = function() {
  // not mentioning the state at all does not provide the expected result, so you need to set
  // the state to paused and set it to running on window load
  document.getElementById("slonan").style.webkitAnimationPlayState = "running";
  document.getElementById("slogan-next").style.animationPlayState = "running";
};

function setAnimations() {
  sloganStyle.animation = "slogan-slide-up";
  sloganStyle.animationDuration = "2s";
  sloganStyle.animationTimingFunction = "ease";
  sloganStyle.animationIterationCount = "infinite";

  sloganNextStyle.animation = "slogan-slide-down";
  sloganNextStyle.animationDuration = "2s";
  sloganNextStyle.animationTimingFunction = "ease";
  sloganStyle.animationIterationCount = "infinite";
  setTimeout(setAnimations, 2 * 1000);
}

function resetAnimations() {
  sloganStyle.animation = "paused";
  sloganNextStyle.animation = "paused";

  slogan.innerHTML = sloganNext.innerHTML;

  if (i >= text.length) i = 0;
  sloganNext.innerHTML = text[i];
  i++;

  console.log(i);

  setTimeout(resetAnimations, 2 * 1000);
}
