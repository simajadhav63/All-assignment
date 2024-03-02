const pressedKeyDisplay = document.getElementById("pressedKey");
const keyCodeDisplay = document.getElementById("keyCode");
const keyHistoryList = document.getElementById("keyHistory");

// Map for special key codes
const specialKeys = {
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Ctrl",
    18: "Alt",
    20: "Caps Lock",
    27: "Escape",
    32: "Space",
    37: "Arrow Left",
    38: "Arrow Up",
    39: "Arrow Right",
    40: "Arrow Down",
    46: "Delete",
};

// Function to display pressed key and its keycode
function displayKeyPress(event) {
    const pressedKey = event.key;
    const keyCode = event.keyCode;

    // Display pressed key
    pressedKeyDisplay.textContent = pressedKey;

    // Display key code
    keyCodeDisplay.textContent = keyCode;

    // Add pressed key to key history
    const keyListItem = document.createElement("li");
    keyListItem.textContent = pressedKey + " (KeyCode: " + keyCode + ")";
    keyHistoryList.appendChild(keyListItem);
}

// Add event listener for keydown event
document.addEventListener("keydown", displayKeyPress);
