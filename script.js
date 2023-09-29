var menuBtn = document.querySelector(".ri-menu-line");
var navpart3 = document.querySelector(".nav-part3");
var navpart2 = document.querySelector(".nav-part2");
var cancelBtn = document.querySelector(".ri-close-fill");
var intro = document.querySelector(".intro");
var sec1_img = document.querySelector(".sec1-img");

var isMenuOpen = false; // Use a variable to track the menu's open/close state

menuBtn.addEventListener("click", toggle);
cancelBtn.addEventListener("click", toggleOff);

function toggle() {
  if (!isMenuOpen) { // If the menu is closed, open it
    menuBtn.style.display = "none";
    cancelBtn.style.display = "block";
    navpart2.style.display = "none";
    
    navpart3.style.width = "45vw";
    intro.style.opacity = "0.3";
    sec1_img.style.opacity = "0.3";

    isMenuOpen = true; // Update the state
  } else { // If the menu is open, close it
    menuBtn.style.display = "block";
  }
}

function toggleOff() {
  if (isMenuOpen) { // If the menu is open, close it
    cancelBtn.style.display = "none";
    menuBtn.style.display = "block";
    navpart3.style.width = "0";
    intro.style.opacity = "1";
    sec1_img.style.opacity = "1";
    navpart3.style.flexDirection = "column";

    isMenuOpen = false; // Update the state
  } else { // If the menu is closed, open it
    cancelBtn.style.display = "block";
  }
}


// var menuBtn = document.querySelector(".ri-menu-line");
// var navpart3 = document.querySelector(".nav-part3");
// var navpart2 = document.querySelector(".nav-part2");
// var cancelBtn = document.querySelector(".ri-close-fill");
// var intro = document.querySelector(".intro");
// var sec1_img = document.querySelector(".sec1-img");

// // var toggleNavStatus = false;
// console.log("1");

// menuBtn.addEventListener("click", toggle);
// cancelBtn.addEventListener("click", toggleOff);

// function toggle(){
//     if(menuBtn.style.display == "block") { // if is menuBox displayed, hide it
//         menuBtn.style.display = "none";
//         cancelBtn.style.display = "block";
//         navpart2.style.display = "none";

//         console.log("menu clicked");
        
//         navpart3.style.width = "45vw";
//         intro.style.opacity = "0.3";
//         sec1_img.style.opacity = "0.3";
//     }
//     else { // if is menuBox hidden, display it
//         menuBtn.style.display = "block";
//     }
// }

// function toggleOff(){
//     if(cancelBtn.style.display == "block") { // if is menuBox displayed, hide it
//         cancelBtn.style.display = "none";
//         menuBtn.style.display = "block";
//         navpart3.style.width = "0";
//         intro.style.opacity = "1";
//         sec1_img.style.opacity = "1";


//         navpart3.style.flexDirection = "column";
//     }
//     else { // if is menuBox hidden, display it
//         cancelBtn.style.display = "block";
//     }
// }
