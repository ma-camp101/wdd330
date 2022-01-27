/* When a cell is touched it should add either an 'X or an 'O', 
depending on whether it is player 1 or player 2's turn. */

const cells = document.querySelectorAll("td");
let player = "O";

const resetBtn = document.querySelector(".reset");

const cell1 = document.getElementById("one").innerText;
const cell2 = document.getElementById("two").innerText;
const cell3 = document.getElementById("three").innerText;
const cell4 = document.getElementById("four").innerText;
const cell5 = document.getElementById("five").innerText;
const cell6 = document.getElementById("six").innerText;
const cell7 = document.getElementById("seven").innerText;
const cell8 = document.getElementById("eight").innerText;
const cell9 = document.getElementById("nine").innerText;

let winner;

function handlePlayerTurn(player) {
    if (player == "O") {
        player = "X"
    }
    else {
        player = "O"
    }
    return player
}

function checkrow() {
    if (cell1 == "X" && cell2 == "X" && cell3 == "X"){
        console.log("here")
        winner = true
    }

    else if (cell4 == "X" && cell5 == "X" && cell6 == "X"){
        winner = true
    }

    else if (cell7 == "X" && cell8 == "X" && cell9 == "X"){
        winner = true
    }

    return winner
}

function checkWinner() {
    winner = checkrow();
    if (winner) {
        console.log("there is a winer");
    }

}



cells.forEach(cell => {
    cell.addEventListener("click", function(){        // this will make sure that the player doesn't go to a taken cell
        if (cell.textContent != "") {
        }
        else {
            // handle player turn
            player = handlePlayerTurn(player);

            // update the cell content 
            cell.textContent = player;
        }
        checkWinner()
    })
});

// When touched the reset button should remove all of the marks from the board.
resetBtn.addEventListener("click", function() {
    cells.forEach(cell => {
        cell.textContent = "";
    });
})