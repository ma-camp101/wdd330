/* When a cell is touched it should add either an 'X or an 'O', 
depending on whether it is player 1 or player 2's turn. */
const messageDisplay = document.querySelector(".message");
const cells = document.querySelectorAll("td");
let player = "O";
let winner;

const resetBtn = document.querySelector(".reset");
const cell1 = document.getElementById("one");
const cell2 = document.getElementById("two");
const cell3 = document.getElementById("three");
const cell4 = document.getElementById("four");
const cell5 = document.getElementById("five");
const cell6 = document.getElementById("six");
const cell7 = document.getElementById("seven");
const cell8 = document.getElementById("eight");
const cell9 = document.getElementById("nine");



function handlePlayerTurn(player) {
  if (player == "O") {
    player = "X";
  } else {
    player = "O";
  }
  return player;
}

function resetBoard(message) {
    cells.forEach((cell) => {
        cell.textContent = "";
        messageDisplay.textContent = message;
        winner = false;
      });
}


function checkRow() {
  if ((cell1.textContent == cell2.textContent) && (cell1.textContent == cell3.textContent) && (cell1.textContent != "")) {
    winner = true;
  }
  else if ((cell4.textContent == cell5.textContent) && (cell4.textContent == cell6.textContent) && (cell4.textContent != "")) {
    winner = true;
  }
  else if ((cell7.textContent == cell8.textContent) && (cell7.textContent == cell9.textContent) && (cell7.textContent != "")) {
    winner = true;
  }
  return winner;
}

function checkColumn() {
    if ((cell1.textContent == cell4.textContent) && (cell1.textContent == cell7.textContent) && (cell1.textContent != "")) {
      winner = true;
    }
    else if ((cell2.textContent == cell5.textContent) && (cell2.textContent == cell8.textContent) && (cell2.textContent != "")) {
      winner = true;
    }
    else if ((cell3.textContent == cell6.textContent) && (cell3.textContent == cell9.textContent) && (cell3.textContent != "")) {
      winner = true;
    }
    return winner;
  }

function checkDiagonal() {
if ((cell1.textContent == cell5.textContent) && (cell1.textContent == cell9.textContent) && (cell1.textContent != "")) {
    winner = true;
}
else if ((cell3.textContent == cell5.textContent) && (cell3.textContent == cell7.textContent) && (cell3.textContent != "")) {
    winner = true;
}

return winner;
}

function checkTie() {
    var isEnd = true;
    cells.forEach((cell) => {
        if (cell.textContent == "") {
            isEnd = false;
        }
    });
    if (isEnd) resetBoard("The game is Tie. Please reset again the game")
}

function checkWinner() {
    if (checkRow()) {
        messageDisplay.textContent = "There is a winner row";
        winner = false;
    }
    else if (checkColumn()) {
        messageDisplay.textContent = "There is a winner column";
        winner = false;
    }
    else if (checkDiagonal()) {
        messageDisplay.textContent = "There is a winner diagonal";
        winner = false;
    }
}


cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    // this will make sure that the player doesn't go to a taken cell
    if (cell.textContent != "") {
    } else {
      // handle player turn
      player = handlePlayerTurn(player);

      // update the cell content
      cell.textContent = player;
    }    

    checkWinner()
    checkTie()

  });
});


// When touched the reset button should remove all of the marks from the board.
resetBtn.addEventListener("click", function () {
    resetBoard("");
});
