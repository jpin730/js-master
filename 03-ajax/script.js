'use strict'

// Variables and constants
const ul = document.getElementById("users");
const id = 1;

// Functions
const getUsers = () => fetch('https://reqres.in/api/users');
const getUser = id => fetch(`https://reqres.in/api/users/${id}`);
const listData = (data) => {
    if (Array.isArray(data)) {
        data.map((user) => {
            let li = document.createElement('li');
            li.innerHTML = `${user.id}. ${user.first_name} ${user.last_name}`;
            li.classList.add("list-group-item", "list-group-item-action");
            ul.appendChild(li);
        });
    } else {
        let li = document.createElement('li');
        let img = document.createElement('img');
        li.innerHTML = `${data.id}. ${data.first_name} ${data.last_name}`;
        li.classList.add("list-group-item", "list-group-item-action", "list-group-item-primary", "d-flex", "flex-column", "align-items-center");
        img.src = data.avatar;
        img.classList.add("rounded-circle")
        li.appendChild(img);
        ul.appendChild(li);
        img.addEventListener("load", () => document.getElementById("loading-spinner").style.display = "none");
    }
}

getUsers()
    .then(response => response.json())
    .then(responseContent => {
        listData(responseContent.data);
        return getUser(id);
    })
    .then(response => response.json())
    .then(responseContent => {
        listData(responseContent.data);
    })
    .catch(e => {
        console.error("Catch: " + e);
    });