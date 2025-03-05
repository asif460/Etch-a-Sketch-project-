const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");

function createGrid(size) {
    container.innerHTML = ""; // Clear existing grid
    let squareSize = 480 / size; // Ensure it fits within 480px

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Hover effect to change background color
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
    }
}

// Function to get a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Button to reset and create a new grid
resetButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter grid size (max 100):"));

    if (newSize > 100 || newSize < 1 || isNaN(newSize)) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(newSize);
    }
});

// Initial grid creation
createGrid(16);
