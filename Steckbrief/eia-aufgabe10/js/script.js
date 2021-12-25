var todosArray = [
    {
        text: "Lorem",
        checked: true
    },
    {
        text: "Ipsum",
        checked: false
    },
    {
        text: "Dolor",
        checked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var openDOMElement;
var completeDOMElement;
var artyomOn = false;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    completeDOMElement = document.querySelector("#complete");
    addButtonDOMElement.addEventListener("click", function () {
        addTodo(inputDOMElement.value);
    });
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < todosArray.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
            + todosArray[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
        /*const edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerText = "Edit";

        todosDOMElement.appendChild(edit);

        edit.addEventListener("click", (e) => {
        if (edit.innerText.toLowerCase() == "edit") {
            edit.innerText = "Save";
            todo.removeAttribute("readonly");
            todo.focus();
    } else {
         edit.innerText = "Edit";
         todo.setAttribute("readonly", "readonly");
        }*/
        const key = inputDOMElement.value;
        const storageValue = inputDOMElement.value;
        localStorage.setItem(key, storageValue);
    }
    updateCounter();
}
let taskOpen = 2;
let taskComplete = 1;
function updateCounter() {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    openDOMElement.innerHTML = taskOpen + " task(s) in progress";
    completeDOMElement.innerHTML = taskComplete + " task(s) completed";
}
function addTodo(text) {
    if (inputDOMElement.value != "") {
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        taskOpen++;
        drawListToDOM();
    }
    if (artyomOn == true) {
        todosArray.unshift({
            text: text,
            checked: false
        });
        artyomOn = false;
        taskOpen++;
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    if (todosArray[index].checked == true) {
        todosArray[index].checked = false;
        taskComplete--;
        taskOpen++;
    }
    else if (todosArray[index].checked == false) {
        todosArray[index].checked = true;
        taskComplete++;
        taskOpen--;
    }
    drawListToDOM();
}
function deleteTodo(index) {
    if (todosArray[index].checked == true) {
        taskComplete--;
    }
    else if (todosArray[index].checked == false) {
        taskOpen--;
    }
    todosArray.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    const artyom = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Erstelle Aufgabe *"],
        action: function (i, wildcard) {
            artyomOn = true;
            addTodo(wildcard);
        }
    });
    document.querySelector("#mic").addEventListener("click", function () {
        artyom.say("Hey buddy! Just say Erstelle Aufgabe to use your voice as input :)");
        artyom.initialize({
            lang: "de-DE"
        });
        setTimeout(function () {
            artyom.obey();
        }, 5500); //5500ms 5,5sec
        startArtyom();
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
            speed: 1
        });
    }
});
//# sourceMappingURL=script.js.map