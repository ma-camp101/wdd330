const allButton = document.querySelector('.all');
const activeButton = document.querySelector('.active');
const completedButton = document.querySelector('.completed');

allButton.addEventListener('click', () => {
    const goalsEl = document.querySelectorAll("li");
    goalsEl.forEach((goal) => {
            goal.classList.remove('hide');
    })
});

activeButton.addEventListener('click', () => {
    const goalsEl = document.querySelectorAll("li");
    goalsEl.forEach((goal) => {
        goal.classList.remove('hide');
        if(goal.classList.contains('completed')) {
            goal.classList.add('hide');
        }
    })
});

completedButton.addEventListener('click', () => {
    const goalsEl = document.querySelectorAll("li");
    goalsEl.forEach((goal) => {
        goal.classList.remove('hide');
        if(!goal.classList.contains('completed')) {
            goal.classList.add('hide');
        }
    })
});

function countActive() {
    const goalsEl = document.querySelectorAll("li");
    let counts = 0;
    goalsEl.forEach((goal) => {
        if(!goal.classList.contains('completed')) {
            counts += 1; 
        }
    })
    document.querySelector('.count').innerHTML = counts;
}