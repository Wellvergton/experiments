import buttonsHandler from "./buttonsHandler.js";
import axesHandler from "./axesHandler.js";

const inputs = document.getElementById("inputs");
const gamepads = {};
const config = {
  buttonsLayout: "fourButtons",
  choosenPad: 0,
};

function showInputs() {
  if (gamepads[config.choosenPad]) {
    buttonsHandler(gamepads[config.choosenPad].buttons, config.buttonsLayout);
    axesHandler(gamepads[config.choosenPad].axes);
  }

  if (inputs.children.length > 200) {
    inputs.removeChild(inputs.children[0]);
  }

  requestAnimationFrame(showInputs);
}

function addGamepad(event) {
  let gamepad = event.gamepad;

  gamepads[gamepad.index] = gamepad;
}

function removeGamepad(event) {
  let gamepad = event.gamepad;

  delete gamepads[gamepad.index];
}

window.addEventListener("gamepadconnected", addGamepad);
window.addEventListener("gamepaddisconnected", removeGamepad);

showInputs();
