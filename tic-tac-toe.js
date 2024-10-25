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
            }
        });
    });
});
});
