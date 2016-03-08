"use strict";

// Greet users

var greeting = "Foobar";

document.write(greeting);

// Add some dom elements

var box = document.createElement("div");

box.className = "box";
box.appendChild(document.createTextNode("I'm another cool box!"));
