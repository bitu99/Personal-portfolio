var menuBtn = document.querySelector(".ri-menu-line");
var navpart3 = document.querySelector(".nav-part3");
var navpart2 = document.querySelector(".nav-part2");
var cancelBtn = document.querySelector(".ri-close-fill");
// var toggleNavStatus = false;
console.log("1");

menuBtn.addEventListener("click", toggle);
cancelBtn.addEventListener("click", toggleOff);

function toggle(){
    if(menuBtn.style.display == "block") { // if is menuBox displayed, hide it
        menuBtn.style.display = "none";
        cancelBtn.style.display = "block";
        navpart2.style.display = "none";
        
        navpart3.style.display = "flex";
        navpart3.style.width = "50vw";
        navpart3.style.flexDirection = "column";
    }
    else { // if is menuBox hidden, display it
        menuBtn.style.display = "block";
    }
}

function toggleOff(){
    if(cancelBtn.style.display == "block") { // if is menuBox displayed, hide it
        cancelBtn.style.display = "none";
        menuBtn.style.display = "block";
        navpart3.style.display = "none";
        navpart3.style.flexDirection = "column";
    }
    else { // if is menuBox hidden, display it
        cancelBtn.style.display = "block";
    }
}

