const button = document.getElementById("button");
button.addEventListener("click", playAnimation);

function playAnimation(event) {
  const rect = event.target.getBoundingClientRect();
  const clientX = event.clientX;
  const clientY = event.clientY;

  const clientXInButton = clientX - rect.x;
  const clientYInButton = clientY - rect.y;

  const rippleDomElement = document.createElement("span");
  rippleDomElement.className = "ripple";

  rippleDomElement.style.top = clientYInButton + "px";
  rippleDomElement.style.left = clientXInButton + "px";

  const removeFunction = () => {
    button.removeChild(rippleDomElement);
  };

  rippleDomElement.addEventListener("webkitAnimationEnd", removeFunction);
  rippleDomElement.addEventListener("animationend", removeFunction);

  button.appendChild(rippleDomElement);
}
