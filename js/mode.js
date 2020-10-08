function changeMode() {
  console.log("this is happening");
  var texts = document.getElementsByClassName("normal-text");
  var blueTexts = document.getElementsByClassName("blue-text");
  var sections = document.getElementsByClassName("mode-section");
  var cards = document.getElementsByClassName("mode-card");
  var secondaryButtons = document.getElementsByClassName("secondary-button");
  var paths = document.getElementsByTagName("path");
  var circles = document.getElementsByTagName("circle");
  var ellipses = document.getElementsByTagName("ellipse");
  var delimiters = document.getElementsByClassName("delimiter");
  var dropdownContainer = document.getElementsByClassName(
    "dropdown-navigation-container"
  );
  var hamburgerLines = document.getElementsByClassName("hamburger-line");
  if (document.getElementById("mode").checked == false) {
    document.getElementById("mode").checked = true;
    //dark
    document.body.style.backgroundColor = "#121212";
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.color = "white";
    }
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.backgroundColor = "#121212";
    }
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#1e1e1e";
    }
    for (var i = 0; i < blueTexts.length; i++) {
      blueTexts[i].style.color = "#57adff";
    }
    document.getElementById("slogan").style.color = "#57adff";
    document.getElementById("slogan-next").style.color = "#57adff";
    for (var i = 0; i < secondaryButtons.length; i++) {
      secondaryButtons[i].style.borderColor = "#57adff";
    }
    for (var i = 0; i < delimiters.length; i++) {
      delimiters[i].style.backgroundColor = "#57adff";
    }
    //contact icons
    for (var i = 0; i < paths.length; i++) {
      paths[i].style.stroke = "white";
    }
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.stroke = "white";
    }
    for (var i = 0; i < ellipses.length; i++) {
      ellipses[i].style.stroke = "white";
    }

    //dropdown
    dropdownContainer[0].style.backgroundColor = "#121212";
    for (var i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "#57adff";
    }
  } else {
    document.getElementById("mode").checked = false;
    //light
    document.body.style.backgroundColor = "#fff";
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.color = "black";
    }
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.backgroundColor = "white";
    }
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "white";
    }
    for (var i = 0; i < blueTexts.length; i++) {
      blueTexts[i].style.color = "#5575ff";
    }

    document.getElementById("slogan").style.color = "#5575ff";
    document.getElementById("slogan-next").style.color = "#5575ff";

    for (var i = 0; i < secondaryButtons.length; i++) {
      secondaryButtons[i].style.borderColor = "#5575ff";
    }
    for (var i = 0; i < delimiters.length; i++) {
      delimiters[i].style.backgroundColor = "#5575ff";
    }
    //contact icons
    for (var i = 0; i < paths.length; i++) {
      paths[i].style.stroke = "black";
    }
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.stroke = "black";
    }
    for (var i = 0; i < ellipses.length; i++) {
      ellipses[i].style.stroke = "black";
    }
    dropdownContainer[0].style.backgroundColor = "white";
    for (var i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "#297bff";
    }
  }
}
