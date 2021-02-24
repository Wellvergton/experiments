import directions from "./directions.js";

let currentAxes = "";
let lastAxes = "";

function axisAsString(axisIndex, value) {
  if (axisIndex % 2 === 0) {
    return value > 0 ? "right" : "left";
  } else {
    return value > 0 ? "down" : "up";
  }
}

function axesHandler(axes) {
  let pressedAxes = [];
  currentAxes = "";

  if (axes) {
    axes.forEach((axis, index) => {
      if (axis !== 0) {
        pressedAxes.push(axisAsString(index, axis));
      }
    });

    if (pressedAxes.length > 1) {
      pressedAxes = pressedAxes.sort();
    }

    currentAxes = pressedAxes.join("");

    if (currentAxes && currentAxes != lastAxes && directions[currentAxes]) {
      directions[currentAxes]();
    }
  }

  lastAxes = currentAxes;
}

export default axesHandler;
