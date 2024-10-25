// Ensure the code runs after the page has Loaded
document.addEventListener("DOMContentLoaded" , () => {
	//Select all divs inside the game board 
	const squares = documnet.querySelectorAll(#board div");

	// Apply the 'square' class to each div in the game board
		squares. forEach(square => {
			square.classsList.add("square");
		});
});
