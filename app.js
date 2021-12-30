var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");
 
var serverURL = "https://api.funtranslations.com/translate/pirate.json?text="

function getTranslatedURL(text) {
    return serverURL + text;
}

function errorHandler(error) {
    return alert("Something went wrong with server! try again after sometime")
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslatedURL(inputText))
    .then(async (response) => await response.json())
    .then((json) => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
     })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);

