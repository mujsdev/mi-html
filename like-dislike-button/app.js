const buttonLike = document.querySelector(".button--like");
const buttonLikeText = document.querySelector(".button__text-like");

const buttonDislike = document.querySelector(".button--dislike");
const buttonDislikeText = document.querySelector(".button__text-dislike");

buttonLike.addEventListener("click", () => setActive(buttonLike, "liked", buttonLikeText, "Like"));
buttonDislike.addEventListener("click", () => setActive(buttonDislike, "disliked", buttonDislikeText, "Dislike"));

function setActive(button, activeClass, buttonText, text) {
  button.classList.toggle(activeClass);
  checkText(buttonText, text);
}

function checkText(buttonText, text) {
  if (buttonText.innerHTML === text) {
    buttonText.innerHTML = text + "d";
  } else {
    buttonText.innerHTML = text;
  }
}
