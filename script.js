document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    trackSession();
    checkUser();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const taskList = document.getElementById("taskList");
    
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
    taskList.appendChild(li);
    saveTask(taskText);
    taskInput.value = "";
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task");
        li.innerHTML = `${task} <button onclick="removeTask(this)">X</button>`;
        taskList.appendChild(li);
    });
}

function removeTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.textContent.slice(0, -1);
    taskItem.remove();
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function trackSession() {
    let count = sessionStorage.getItem("sessionCount") || 0;
    count++;
    sessionStorage.setItem("sessionCount", count);
    document.getElementById("sessionCount").textContent = count;
}

function checkUser() {
    let username = getCookie("username");
    if (!username) {
        username = prompt("Ingrese su nombre:");
        setCookie("username", username, 7);
    }
    document.getElementById("username").textContent = username;
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split("=");
        if (key === name) return value;
    }
    return "";
}