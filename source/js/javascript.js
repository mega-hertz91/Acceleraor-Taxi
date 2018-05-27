var buttonToggle = document.querySelector(".main-nav__button-toggle");
var menuToggle = document.querySelector(".main-nav");

  buttonToggle.addEventListener("click", function(evt){
    evt.preventDefault();
    if(menuToggle.classList.contains("main-nav--opened")){
     menuToggle.classList.remove("main-nav--opened");
      menuToggle.classList.add("main-nav--closed");
    } else {
      menuToggle.classList.remove("main-nav--closed");
      menuToggle.classList.add("main-nav--opened");
    }
  });
