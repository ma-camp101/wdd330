const allButton = document.querySelector('.all');
const activeButton = document.querySelector('.active');
const completedButton = document.querySelector('.completed');

allButton.addEventListener('click', () => {
    const todosEl = document.querySelectorAll("li");
    todosEl.forEach((todo) => {
            todo.classList.remove('hide');
    })
});

activeButton.addEventListener('click', () => {
    const todosEl = document.querySelectorAll("li");
    todosEl.forEach((todo) => {
        todo.classList.remove('hide');
        if(todo.classList.contains('completed')) {
            todo.classList.add('hide');
        }
    })
});

completedButton.addEventListener('click', () => {
    const todosEl = document.querySelectorAll("li");
    todosEl.forEach((todo) => {
        todo.classList.remove('hide');
        if(!todo.classList.contains('completed')) {
            todo.classList.add('hide');
        }
    })
});

function countActive() {
    const todosEl = document.querySelectorAll("li");
    let counts = 0;
    todosEl.forEach((todo) => {
        if(!todo.classList.contains('completed')) {
            counts += 1; 
        }
    })
    document.querySelector('.count').innerHTML = counts;
}