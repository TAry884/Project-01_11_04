/*  Project 01_11_04

    Author: Ty Ary
    Date: 9.7.18

    Filename: script.js
*/

"use strict";

//Global Variables
var httpRequest = false;

function checkInput() {
    alert("checkInput()");
}

//Event Handlers
var zip = document.getElementById("zip");
if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
    zip.attachEvent("onkeyup", checkInput);
}
