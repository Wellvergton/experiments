import commands from "./commands.js";

let pressedButtons = [];
let previousButtons = [];
let elapsedFrames = 0;

function buttonsHandler(buttons, layout) {
  const someButtonIsPressed = buttons.some((button) => button.pressed);

  elapsedFrames++;

  if (someButtonIsPressed) {
    buttons.forEach((button, index) => {
      if (button.pressed && !pressedButtons.includes(index)) {
        pressedButtons.push(index);
      }
    });
  }

  if (elapsedFrames > 3) {
    const notHeldButtons = pressedButtons.filter(
      (button) => !previousButtons.includes(button)
    );

    if (commands[layout]) {
      commands[layout](notHeldButtons);
    }

    previousButtons = Array.from(pressedButtons);
    pressedButtons = [];
    elapsedFrames = 0;
  }
}

export default buttonsHandler;
