
// Getting the HTML elements.
const submit = document.getElementById("submit");
const dataBox = document.getElementById("data");
const fields = document.getElementsByTagName("input")

// Setting the initial values for the data.
const startTime = performance.now();
const data = {
    clicks: 0,
    keyPresses: 0,
}

// Calculates the time spent in seconds.
function getTimeSpent () {
    return Math.round((performance.now() - startTime) / 1000);
}

// Calculate the total characters typed in all fields.
function getCharactersTyped () {

    // Start with a character sum of zero.
    let characters = 0;

    // For each of the fields of the form:
    for (let i = 0; i < fields.length; i++) {
        
        // Add the length of the input to the total sum of characters.
        characters += fields.item(i).value.length;
    }

    // Return the result
    return characters;    
}

// Displays the currently stored data.
function displayData () {
    // Reveal the div containing the data.
    dataBox.style.display = "block";

    // Set the contents of the div to the neatly
    // formatted data.
    dataBox.innerHTML = `
        Number of mouse clicks: ${data.clicks}<br>
        Total time spent: ${getTimeSpent()} seconds<br>
        Total key presses: ${data.keyPresses}<br>
        Total characters typed: ${getCharactersTyped()}
    `;
}

// Keep track of the clicks and keypresses.
document.onclick = () => data.clicks += 1;
document.onkeydown = () => data.keyPresses += 1;

// Display the data when the "submit" button is clicked.
submit.onclick = displayData;

