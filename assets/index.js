const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

const textInfo = document.getElementById("page-title");

const buttonMode = document.getElementById("mode-selector");

function darkMode() {
  textInfo.classList.toggle("dark-mode");
  buttonMode.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  textDarkMode();
}
function textDarkMode() {
  if (textInfo.innerHTML === "Light Mode ON") {
    textInfo.innerHTML = "Dark Mode On";
    buttonMode.innerHTML = "Light Mode";
  } else {
    textInfo.innerHTML = "Light Mode ON";
    buttonMode.innerHTML = "Dark Mode";
  }
}

buttonMode.addEventListener("click", darkMode);
