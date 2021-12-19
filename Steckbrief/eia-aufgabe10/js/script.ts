     // tslint:disable-next-line: class-name
     interface todosDOMInterface {
        text: string;
        checked: boolean;
    }
    
     var todosArray: todosDOMInterface[] = [
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
    
     var inputDOMElement: HTMLInputElement; 
     var addButtonDOMElement: HTMLElement;
     var todosDOMElement: HTMLElement;

     var counterDOMElement: HTMLElement;
     var openDOMElement: HTMLElement;
     var completeDOMElement: HTMLElement;
     var artyomOn: boolean = false;
    
     window.addEventListener("load", function(): void {
    
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        openDOMElement = document.querySelector("#open");
        completeDOMElement = document.querySelector("#complete");

        addButtonDOMElement.addEventListener("click", function(): void {
            addTodo(inputDOMElement.value);
        });

        drawListToDOM();
    });
    
     function drawListToDOM(): void {
        todosDOMElement.innerHTML = "";

        for (let index: number = 0; index < todosArray.length; index++) {

            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML =  "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                                + todosArray[index].text +
                                "<span class='trash fas fa-trash-alt'></span>";
    
            todo.querySelector(".check").addEventListener("click", function(): void {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function(): void {
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

            const key: string = inputDOMElement.value;
            const storageValue: string = inputDOMElement.value;
            localStorage.setItem(key, storageValue);
        }
    
        updateCounter();
    }
     let taskOpen: number = 2;
     let taskComplete: number = 1;
    
     function updateCounter(): void {
        counterDOMElement.innerHTML = todosArray.length + " in total";
        openDOMElement.innerHTML = taskOpen + " task(s) in progress";
        completeDOMElement.innerHTML = taskComplete + " task(s) completed";
    }

     function addTodo(text: string): void {

        if (inputDOMElement.value != "") {

            todosArray.unshift({
                text: inputDOMElement.value,
                checked: false
            });

            inputDOMElement.value = "";
    
            taskOpen ++;
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

     function toggleCheckState(index: number): void {
    
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

     function deleteTodo(index: number): void {
        if (todosArray[index].checked == true) {
            taskComplete--;
        }
        else if (todosArray[index].checked == false) {
            taskOpen--;
        }
        
        todosArray.splice(index, 1);
        
        drawListToDOM();
    }
    
     window.addEventListener("load", function(): void {
        const artyom: any = new Artyom();
        artyom.addCommands({
            smart: true,
            indexes: ["Erstelle Aufgabe *"],
            action: function (i: any, wildcard: string): void {
                artyomOn = true;
                addTodo(wildcard);
            }
        });
    
        document.querySelector("#mic").addEventListener("click", function(): void {
            artyom.say("Hey buddy! Just say Erstelle Aufgabe to use your voice as input :)");
            artyom.dontObey();
            artyom.initialize({
                lang: "de-DE"
            });
            setTimeout(function (): void {
                artyom.obey();
            },         250);
            startArtyom();
        });
        function startArtyom(): void {
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