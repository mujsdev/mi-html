const button = document.getElementById("button");
const buttonText = document.getElementById("button-text");
const buttonIcon = document.getElementById("button-icon");

button.addEventListener("click", playAnimation);

function playAnimation() {
  buttonText.style.animation = "buttonSendTextAnimation ease-in-out 3s";
  buttonIcon.style.animation = "buttonIconAnimation ease-in 3s";
  button.disabled = true;

  setTimeout(() => {
    buttonText.innerHTML = "Sending...";
  }, 250);

  setTimeout(() => {
    buttonText.innerHTML = null;
    buttonIcon.innerHTML = "check";
    buttonIcon.style.fontWeight = "bold";
  }, 1500);

  setTimeout(() => {
    button.style.backgroundColor = "#7240DE";
    button.style.color = "#f8f8f8";
    button.style.boxShadow = "0 1rem 2.5rem -1rem rgba(114, 64, 222, .5)";
  }, 1800);

  setTimeout(() => {
    buttonText.style.animation = "none";
    buttonIcon.style.animation = "none";
    button.disabled = false;
    buttonText.innerHTML = "Send message";
    buttonIcon.innerHTML = "send";
    button.style.backgroundColor = "#27272b";
    button.style.color = "#f8f8f8";
    button.style.boxShadow = "0 1rem 2.5rem -1rem rgba(0, 0, 0, 0.25)";
  }, 5 * 1000);
}
