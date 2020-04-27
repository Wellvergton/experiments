const content = document.querySelector("[data-content]");
const squares = content.children;

function onArrowLeft() {
  document.removeEventListener("keydown", checkInput);
  let firstSquare = squares[0];
  let firstSquareCopy = firstSquare.cloneNode();

  firstSquare.classList.add("fade-out");
  firstSquare.style.opacity = "0";

  document.addEventListener("animationend", checkAnimation);

  function checkAnimation(event) {
    if (event.animationName === "fade-out") {
      firstSquare.classList.remove("fade-out");

      [...squares].forEach((element) => {
        element.classList.add("move-left");
      });
    }

    if (event.animationName === "move-left") {
      firstSquareCopy.classList.add("fade-in");

      if (content.contains(firstSquare)) {
        content.removeChild(firstSquare);
      }
      
      content.appendChild(firstSquareCopy);
    }

    if (event.animationName === "fade-in") {
      [...squares].forEach((element) => {
        element.classList.remove("move-left");
        element.classList.remove("fade-in");
      });

      document.removeEventListener("animationend", checkAnimation);
      document.addEventListener("keydown", checkInput);
    }
  }
}

function onArrowRight() {
  document.removeEventListener("keydown", checkInput);
  let lastElement = squares[2];
  let lastElemCopy = lastElement.cloneNode();

  lastElement.classList.add("fade-out");
  lastElement.style.opacity = "0";

  document.addEventListener("animationend", checkAnimation);

  function checkAnimation(event) {
    if (event.animationName === "fade-out") {
      lastElement.classList.remove("fade-out");

      [...squares].forEach((element) => {
        element.classList.add("move-right");
      });
    }

    if (event.animationName === "move-right") {
      lastElemCopy.classList.add("fade-in");

      if (content.contains(lastElement)) {
        content.removeChild(lastElement);
      }

      content.insertBefore(lastElemCopy, squares[0]);
    }

    if (event.animationName === "fade-in") {
      [...squares].forEach((element) => {
        element.classList.remove("move-right");
        element.classList.remove("fade-in");
      });

      document.removeEventListener("animationend", checkAnimation);
      document.addEventListener("keydown", checkInput);
    }
  }
}

function checkInput(event) {
  if (event.key === "ArrowLeft") {
    onArrowLeft();
  } else if (event.key === "ArrowRight") {
    onArrowRight();
  }
}

document.addEventListener("keydown", checkInput);
