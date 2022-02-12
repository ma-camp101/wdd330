
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const todos = JSON.parse(localStorage.getItem("todos"));


if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        const done = document.createElement("button");
        done.innerHTML = '✅';
        const remove = document.createElement("button");
        remove.innerHTML = '❌';
        if (todo && todo.completed) {
            done.classList.add("completed");
        }

        todoEl.innerText = todoText;

        done.addEventListener("click", () => {
            done.classList.toggle("completed");

            updateLS();
        });

        remove.addEventListener("click", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
    
    function updateLS() {
        const todosEl = document.querySelectorAll("li");
    
        const todos = [];
    
        todosEl.forEach((todoEl) => {
            todos.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains("completed"),
            });
        });
    
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

