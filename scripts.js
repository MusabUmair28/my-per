document.addEventListener("DOMContentLoaded", () => {
    const rollDiceButton = document.getElementById("rollDice");
    const diceResult = document.getElementById("diceResult");
    const player1Position = document.getElementById("player1Position");
    const player2Position = document.getElementById("player2Position");

    let currentPlayer = 1;
    let positions = [0, 0]; // Positions for Player 1 and Player 2

    rollDiceButton.addEventListener("click", () => {
        const dice = rollDice();
        diceResult.textContent = `Dice: ${dice}`;
        movePlayer(dice);
        switchPlayer();
    });

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function movePlayer(dice) {
        positions[currentPlayer - 1] += dice;
        if (positions[currentPlayer - 1] >= 9) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
        } else {
            updateBoard();
        }
    }

    function updateBoard() {
        player1Position.textContent = positions[0];
        player2Position.textContent = positions[1];
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }

    function resetGame() {
        positions = [0, 0];
        updateBoard();
        currentPlayer = 1;
    }
});
