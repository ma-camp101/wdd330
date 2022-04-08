function updateLS() {
    const goalsEl = document.getElementsByClassName("goalId");        
    const goals = [];
    const temp = [];
    for (i = goalsEl.length - 1; i >= 0; i--){
        temp.push (goalsEl[i]);
    }
    
    temp.forEach((goalEl) => {
        const text = goalEl.querySelector("span");
        goals.push({
            text: text.innerText,
            completed: goalEl.classList.contains("completed")
        });
    });
    
    localStorage.setItem("goals", JSON.stringify(goals));
}