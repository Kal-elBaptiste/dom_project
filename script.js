// Add your code to this file

// Body color black -> blue
let body = document.querySelector("body");

body.style.backgroundColor = "#00008B"

// "Pokemon!" -> add underline
let heading = document.querySelector("h1");

heading.style.textDecoration = "underline";


//  Subheading text (i forgot what it said) -> "Here are Pokemon's incredible Gen 1 starters!"
let subheading = document.querySelector("h2");

subheading.style.textAlign = "center";
subheading.innerHTML = "Here are Pokemon's incredible Gen 1 starters!"
 
// Blue border on gen 1 starters image -> yellow dotted border
// firstElementChild is used over firstChild to skips whitespaces, comments, and other non-elements
let imgBorder = document.getElementById("starters_image_div").firstElementChild;

imgBorder.style.borderStyle = "dotted";
imgBorder.style.borderColor = "red";

let images = document.querySelectorAll("img");
for (const image of images){
    image.style.borderStyle = "dotted";
    image.style.borderColor = "#FFCB05";
}

// [Footer] UGLY HTML PROJECT -> DOM PROJECT 
let footer = document.querySelector("footer");

footer.innerHTML = `All Star Code - DOM Project`;
footer.style.textDecorationLine = "underline overline";
footer.style.fontStyle = "italic";