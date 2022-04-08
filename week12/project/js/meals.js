
const meal = document.getElementById("meal");
const tasty = document.getElementById("tasty");
const mealsUL = document.getElementById("meals");
const meals = JSON.parse(localStorage.getItem("meals"));

if (meals) {
    meals.forEach((meal) => {
        addmeal(meal);
    });
}

meal.addEventListener("keypress", (e) => {
    if (e.key === 'Enter'){
        e.preventDefault();
        addmeal();
    }
});

function addmeal(meal) {
    let mealText = tasty.value;

    if (meal) {
        mealText = meal.text;
    }

    if (mealText) {
        const mealEl = document.createElement("li");
        mealEl.classList.add('mealId');
        const text = document.createElement("span");
        text.innerHTML = mealText;
        mealEl.appendChild(text);
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = '❌';
        mealEl.appendChild(remove);

        remove.addEventListener('click', (e) => {
            e.preventDefault();
            mealEl.remove();
            updateMealsLS();
        });

        mealsUL.appendChild(mealEl);
        tasty.value = "";
        updateMealsLS();
    }
}

