// Ensure the code runs after the page has Loaded
document.addEventListener("DOMContentLoaded" , () => {
	//Select all divs inside the game board 
	const squares = documnet.querySelectorAll(#board div");

	// Apply the 'square' class to each div in the game board
		squares. forEach(square => {
			square.classsList.add("square");
		});
	// Add click event listener to each square
        square.addEventListener("click", function() {
            // Only allow the square to be clicked if it is empty
            if (!gameState[index]) {
                // Set the text and class based on the current player
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Update game state
                gameState[index] = currentPlayer;

                // Switch players
                currentPlayer = currentPlayer === "X" ? "O" : "X";

		    // Mouseover event to add 'hover' class
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });

        // Mouseout event to remove 'hover' class
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover"); 

		const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X"; // Track the current player ("X" starts)
    const gameState = Array(9).fill(null); // Array to track the game state for each square
    const statusDiv = document.getElementById("status"); // Status div for displaying winner

    // Winning combinations in Tic-Tac-Toe
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    // Function to check for a winner
    function checkWinner() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }

    // Add the 'square' class to each square and set up click and hover events
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Click event to add X or O
        square.addEventListener("click", function() {
            if (!gameState[index] && !statusDiv.classList.contains("you-won")) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;

                // Check for winner
                if (checkWinner()) {
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add("you-won");
                } else {
                    // Switch players if no winner
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });
});
});
