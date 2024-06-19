document.getElementById('roll-dice').addEventListener('click', function() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-value').textContent = diceValue;

    // For simplicity, we move a single piece for demonstration
    movePiece('red', diceValue);
});

function movePiece(color, steps) {
    let startCell = document.getElementById(`start-${color}`);
    let currentCell = startCell;

    for (let i = 0; i < steps; i++) {
        let nextCell = getNextCell(currentCell);
        if (nextCell) {
            currentCell = nextCell;
        } else {
            break;
        }
    }

    // Update piece position
    startCell.textContent = '';
    currentCell.textContent = color.charAt(0).toUpperCase();
}

function getNextCell(currentCell) {
    let currentId = parseInt(currentCell.id);
    if (isNaN(currentId)) return null;

    let nextId = currentId + 1;
    if (nextId > 16) nextId = 1; // Loop back to the start

    return document.getElementById(nextId.toString());
}
