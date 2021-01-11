'use strict'

var ulDisplay = document.getElementById("ul-display");
var key1 = "value"
var obj1 = {
    name: "name",
    email: "email@example.com"
};
var key2, obj2;
const appendLIChild = function (objVar, ul) {
    let li = document.createElement("li");
    li.innerHTML = `${Object.keys(objVar)[0]}: ${Object.values(objVar)[0]}`;
    li.classList.add("list-group-item", "list-group-item-action");
    ul.appendChild(li);
};

// Check local storage availability
if (typeof (Storage) == "undefined") {
    alert("Local Storage is not available");
}

// Simple storing
localStorage.setItem("key", key1);
key2 = localStorage.getItem("key");
appendLIChild({ key2 }, ulDisplay);

// Storing objects
localStorage.setItem("obj", JSON.stringify(obj1));
obj2 = localStorage.getItem("obj");
console.log(JSON.parse(obj2));
appendLIChild({ obj2 }, ulDisplay);

// localStorage.removeItem("key");
// localStorage.clear();
console.log(localStorage.length);
