'use strict'

var firstName = document.createElement("li");
var lastName = document.createElement("li");
var age = document.createElement("li");
var userDataHTMLElements = [firstName, lastName, age]
var userDataHTMLId = ["first-name", "last-name", "age"];
var ul = document.createElement("ul");
var dataDisplay = document.getElementById("data-display");

function getUserData() {
    for (var index in userDataHTMLElements) {
        userDataHTMLElements[index].innerHTML = document.getElementById(userDataHTMLId[index]).value;
        userDataHTMLElements[index].innerHTML = userDataHTMLElements[index].innerHTML.trim();
        if (userDataHTMLElements[index].innerHTML == null || userDataHTMLElements[index].innerHTML.length == 0) {
            document.getElementById(userDataHTMLId[index]).classList.add("border-danger");
            return false
        } else {
            document.getElementById(userDataHTMLId[index]).classList.remove("border-danger");
        }
    }
    let temp = parseInt(userDataHTMLElements[2].innerHTML);
    if (isNaN(temp) || temp <= 0) {
        console.log(typeof temp);
        document.getElementById(userDataHTMLId[index]).classList.add("border-danger");
        return false
    } else {
        document.getElementById(userDataHTMLId[index]).classList.remove("border-danger");

    }
    return true
}

function showOnDataDisplay() {
    for (const dataElement of userDataHTMLElements) {
        ul.appendChild(dataElement);
        dataElement.classList.add("list-group-item");
    }
    dataDisplay.appendChild(ul)
}

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    ul.classList.add("list-group", "px-5", "pb-3");
    if (getUserData()) {
        showOnDataDisplay();
    } else {
        alert("Invalid or empty input.")
    }
});