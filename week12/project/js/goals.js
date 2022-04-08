
const form = document.getElementById("form");
const input = document.getElementById("input");
const goalsUL = document.getElementById("goals");
const goals = JSON.parse(localStorage.getItem("goals"));

if (goals) {
    goals.forEach((goal) => {
        addgoal(goal);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addgoal();
    countActive();
});

function addgoal(goal) {
    let goalText = input.value;

    if (goal) {
        goalText = goal.text;
    }

    if (goalText) {
        const goalEl = document.createElement("li");
        goalEl.classList.add('goalId');
        const done = document.createElement("button");
        done.innerHTML = '✔️';
        goalEl.appendChild(done);
        const text = document.createElement("span");
        text.innerHTML = goalText;
        goalEl.appendChild(text);
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = '❌';
        goalEl.appendChild(remove);

        if (goal && goal.completed) {
            goalEl.classList.add("completed");
        }

        done.addEventListener("click", () => {
            goalEl.classList.toggle("completed");

            updateLS();
            countActive();
        });

        remove.addEventListener("click", (e) => {
            e.preventDefault();

            goalEl.remove();

            updateLS();
            countActive();
        });

        goalsUL.appendChild(goalEl);

        input.value = "";

        updateLS();
    }
}

