var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output-here");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";//api call

function getTransUrl(text) {
    return serverUrl + "?" + "text=" + text;
    
}
//funtion for error handeling
function errorHandler(err) {
     console.log("Error Occurred:" + err);
     alert("Something Went Wrong");   
}
btntranslate.addEventListener("click",function clickHandler() {
      //taking Inputs
    var inputText = txtInput.value;
    //calling Server
    fetch(getTransUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var transText = json.contents.translated;
        output.innerHTML = transText;//showing output
    })

    .catch(errorHandler)

});