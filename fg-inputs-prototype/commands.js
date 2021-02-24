const inputs = document.getElementById("inputs");

function createButtonGroup(layout, pressedButtons) {
  if (pressedButtons.length > 0) {
    const buttonGroup = document.createElement("div");
    const button = document.createElement("i");
    const topRow = document.createElement("div");
    const bottomRow = document.createElement("div");

    buttonGroup.setAttribute(
      "class",
      `button-group ${layout === 4 ? "four-buttons" : ""}`
    );
    topRow.setAttribute("class", "top");
    bottomRow.setAttribute("class", "bottom");

    for (let i = 0; i < layout; i++) {
      let isPressed = pressedButtons.includes(i);
      let newButton = button.cloneNode();
      newButton.setAttribute("class", `fa${isPressed ? "s" : "r"} fa-circle`);

      if ([0, 1, 5].includes(i)) {
        bottomRow.appendChild(newButton);
      } else {
        topRow.appendChild(newButton);
      }
    }

    buttonGroup.append(topRow, bottomRow);

    inputs.appendChild(buttonGroup);
  }
}

const commands = {
  fourButtons: function (pressedButtons) {
    let necessaryButtons = pressedButtons.filter((value) => value < 4);
    createButtonGroup(4, necessaryButtons);
  },
  sixButtons: function (pressedButtons) {
    let necessaryButtons = pressedButtons.filter((value) => value < 6);
    createButtonGroup(6, necessaryButtons);
  },
};

export default commands;
