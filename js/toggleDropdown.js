function toggleDropdown() {
  console.log("this 2222 is happening");
  var dropdownContainer = document.getElementsByClassName(
    "dropdown-menu-container"
  );
  var dropdownButtonContainer = document.getElementsByClassName(
    "dropdown-button-container"
  );
  var dropdownLinks = document.getElementsByClassName("dropdown-nav-element");
  //   var hamburger = document.getElementById("hamburger");
  var hamburgerLines = document.getElementsByClassName("hamburger-line");

  console.log(dropdownContainer[0].style.display);

  if (dropdownContainer[0].style.display == "none") {
    var count = 0.15;
    // document.body.style.overflow = "hidden";
    // position: fixed; overflow - y: scroll
    document.body.style.position = "fixed";
    document.body.style.overflowY = "scroll";
    dropdownContainer[0].style.display = "block";
    // dropdownContainer[0].style.overflow = "scroll";
    dropdownContainer[0].style.animation =
      "dropdown-container-appear 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
    for (var i = 0; i < dropdownLinks.length; i++) {
      dropdownLinks[i].style.opacity = "0";
      dropdownLinks[i].style.animation =
        "dropdown-link-appear 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
      dropdownLinks[i].style.animationDelay = count + "s";
      count = count + 0.05;
    }

    for (var i = 0; i < hamburgerLines.length; i++) {
      var lineNumber = i + 1;
      hamburgerLines[i].style.animation =
        "humberger-line-" +
        lineNumber +
        " 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
    }

    dropdownButtonContainer[0].style.animation =
      "rotate-hamburger 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
  } else {
    // dropdownContainer[0].style.display = "none";
    // document.body.style.overflow = "scroll";
    document.body.style.position = "static";
    document.body.style.overflowY = "auto";
    dropdownContainer[0].style.display = "block";
    dropdownContainer[0].style.animation =
      "dropdown-container-disappear 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
    for (var i = 0; i < dropdownLinks.length; i++) {
      dropdownLinks[i].style.opacity = "1";
      dropdownLinks[i].style.animation = "none";
    }
    for (var i = 0; i < hamburgerLines.length; i++) {
      var lineNumber = i + 1;
      hamburgerLines[i].style.animation =
        "humberger-line-" +
        lineNumber +
        "-backwards 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
    }
    dropdownButtonContainer[0].style.animation =
      "rotate-hamburger-backwards 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
    setTimeout(function() {
      dropdownContainer[0].style.display = "none";
    }, 500);
  }
}
