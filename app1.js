var btnHandler = document.querySelector("#btn-translate");

var createDiv = document.querySelector("#output");

var textInput = document.querySelector("#txt-input");

var serverURL = "	https://api.funtranslations.com/translate/valyrian.json?text=";

function getTranslatedURL(text) {
  return serverURL + text;
}
function errorHandler(error) {
  return alert("Something went wrong");
}
function clickHandler() {
  var input = textInput.value;

  fetch(getTranslatedURL(input))
    .then(async (response) => await response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      createDiv.innerHTML = translatedText;
    })
    .catch(errorHandler);
}
btnHandler.addEventListener("click", clickHandler);