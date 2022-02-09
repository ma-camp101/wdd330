const form = document.querySelector('.todo');
const input = document.querySelector('.input');
const jobs = document.querySelector('.getDone');
const tracker = document.querySelector('.taskTracker');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;

    if (todo){

        const tasks = document.createElement('div');
        tasks.classList.add('job');

        tasks.forEach(task => {

            const completed = document.createElement('button');
            completed.classList.add('done');
            completed.innerHTML = '✅';
            const todoItem = document.createElement('span');
            todoItem.innerText = todo;
            const deleteItem = document.createElement('button');
            deleteItem.classList.add('remove');
            deleteItem.innerHTML = '❌';

            task.innerHTML = `${completed} + ${todoItem} + ${deleteItem}`;
            
            input.value = "";
        });
    }        
});