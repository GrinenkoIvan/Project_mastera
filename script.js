"use strict";


let id = document.querySelector("#dt");

let text = id.innerHTML;

let i = 1;
// console.log(id);
// console.log(text);

window.addEventListener("load", animText);

function animText(){
    id.innerHTML = text.substring(0, i);
    i ++;
    if (i > text.length){
        i = 0;
    }
    setTimeout(animText, 75);
}
 
// const el = document.getElementById("div-03");

// // the closest ancestor with the id of "div-02"
// console.log(el.closest("#div-02")); // <div id="div-02">

// // the closest ancestor which is a div in a div
// console.log(el.closest("div div")); // <div id="div-03">

// // the closest ancestor which is a div and has a parent article
// console.log(el.closest("article > div")); // <div id="div-01">

// // the closest ancestor which is not a div
// console.log(el.closest(":not(div)")); // <article>