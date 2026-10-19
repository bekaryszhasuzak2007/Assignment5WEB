let items = [];
let tasks = [];

// Task 0: First Script
console.log("Name: Bekarys Zhassuzakh");
console.log("Group: SE-2527");

function showMessage() {
    alert("Hello, JavaScript World!");
}

// Task 1: Variables & Operators
function showVariables() {
    let name = "Bekarys";
    let age = 19;
    let isStudent = true;

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Is student:", isStudent);

    let a = 10;
    let b = 5;

    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);

    let greeting = "Hello, " + name;
    console.log(greeting);
}

// Task 2: Changing Content
function changeText() {
    document.getElementById("message").textContent =
        "The text has changed!";
}

// Task 3: Changing Styles

function changeBackground() {
    let box = document.getElementById("styleBox");

    if (box.style.backgroundColor === "rgb(199, 210, 254)") {
        box.style.backgroundColor = "#eeeeee";
    } else {
        box.style.backgroundColor = "#c7d2fe";
    }
}

function changeFontSize() {
    let box = document.getElementById("styleBox");

    if (box.style.fontSize === "24px") {
        box.style.fontSize = "16px";
    } else {
        box.style.fontSize = "24px";
    }
}


// Task 4: Creating & Removing Elements
function addItem() {
    let list = document.getElementById("itemList");
    let item = document.createElement("li");

    item.textContent = "New item";
    list.appendChild(item);
    items.push("New item");
}

function removeItem() {
    let list = document.getElementById("itemList");

    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        items.pop();
    }
}

// Task 5: Mouse Events
function changeBoxColor() {
    document.getElementById("hoverBox").style.backgroundColor = "#a7f3d0";
}

function restoreBoxColor() {
    document.getElementById("hoverBox").style.backgroundColor = "#eeeeee";
}

// Task 6: Keyboard Events
function showInput() {
    let value = document.getElementById("liveInput").value;

    document.getElementById("inputOutput").textContent = value;
}

// Task 7: Calculator
function calculate(operator) {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            document.getElementById("calcResult").textContent =
                "Cannot divide by zero!";
            return;
        }

        result = a / b;
    }

    document.getElementById("calcResult").textContent =
        "Result: " + result;
}

// Task 8: To-Do List
function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(text);

    let list = document.getElementById("taskList");
    let item = document.createElement("li");

    item.textContent = text;

    item.onclick = function () {
        item.classList.toggle("completed");
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function (event) {
        event.stopPropagation();

        let index = Array.from(list.children).indexOf(item);
        tasks.splice(index, 1);
        list.removeChild(item);
    };

    item.appendChild(deleteButton);
    list.appendChild(item);

    input.value = "";
}
