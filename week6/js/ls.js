function updateLS() {
    const todosEl = document.querySelectorAll("li");
        
    const todos = [];

    todosEl.forEach((todoEl) => {
        const text = todoEl.querySelector("span");
        todos.push({
            text: text.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}