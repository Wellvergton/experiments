const inputs = document.getElementById("inputs");

function makeArrow(direction, rotate) {
  const arrow = document.createElement("i");
  arrow.setAttribute(
    "class",
    `fas fa-arrow-alt-circle-${direction} ${rotate ? "rotate" : ""} fa-2x arrow`
  );

  return arrow;
}

const directions = {
  up: function () {
    inputs.appendChild(makeArrow("up", false));
  },
  rightup: function () {
    inputs.appendChild(makeArrow("up", true));
  },
  right: function () {
    inputs.appendChild(makeArrow("right", false));
  },
  downright: function () {
    inputs.appendChild(makeArrow("right", true));
  },
  down: function () {
    inputs.appendChild(makeArrow("down", false));
  },
  downleft: function () {
    inputs.appendChild(makeArrow("down", true));
  },
  left: function () {
    inputs.appendChild(makeArrow("left", false));
  },
  leftup: function () {
    inputs.appendChild(makeArrow("left", true));
  },
};

export default directions;
