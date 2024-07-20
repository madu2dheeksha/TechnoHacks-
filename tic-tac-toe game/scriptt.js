document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    const turnMessage = document.getElementById('turn-message');
    const resetButton = document.getElementById('reset-btn');
    
    let currentPlayer = 'X';
    let moves = 0;
    let gameEnded = false;
    
    // Add event listener to each cell
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && !gameEnded) {
                cell.textContent = currentPlayer;
                moves++;
                if (checkWin()) {
                    turnMessage.textContent = `Player ${currentPlayer} wins!`;
                    gameEnded = true;
                } else if (moves === 9) {
                    turnMessage.textContent = "It's a draw!";
                    gameEnded = true;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    turnMessage.textContent = `Player ${currentPlayer}'s Turn`;
                }
            }
        });
    });

    // Reset game button
    resetButton.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        moves = 0;
        gameEnded = false;
        turnMessage.textContent = `Player ${currentPlayer}'s Turn`;
    });

    // Function to check if a player has won
    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return (
                cells[a].textContent !== '' &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent
            );
        });
    }
});
