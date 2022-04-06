
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
    countActive();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        // todoEl.innerText = todoText;
        const done = document.createElement("button");
        done.innerHTML = '✅';
        todoEl.appendChild(done);
        const text = document.createElement("span");
        text.innerHTML = todoText;
        todoEl.appendChild(text);
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = '❌';
        todoEl.appendChild(remove);

        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        done.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
            countActive();
        });

        remove.addEventListener("click", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
            countActive();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

