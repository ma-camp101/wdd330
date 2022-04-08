function updateMealsLS() {
    const mealsEl = document.getElementsByClassName("mealId");        
    const meals = [];
    const temp = [];
    for (i = 0; i < mealsEl.length; i++){
        temp.push (mealsEl[i]);
    }
    
    temp.forEach((mealEl) => {
        const text = mealEl.querySelector("span");
        meals.push({
            text: text.innerText
        });
    });
    
    localStorage.setItem("meals", JSON.stringify(meals));
}