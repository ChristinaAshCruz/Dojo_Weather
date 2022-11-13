function cityClickAlert() {
  alert("Loading weather report...");
}

function removeCookieTimeRow(id) {
  id.remove();
}

function convertToFahrenheit(temp_value) {
  return Math.round(temp_value * (9 / 5) + 32);
}

function convertToCelcius(temp_value) {
  return Math.round(((temp_value - 32) * 5) / 9);
}
function convertTemp(element) {
  console.log(element.value);
  for (var i = 1; i <= 8; i++) {
    var temp = document.querySelector("#temp" + i);
    var temp_value = temp.innerText;
    if (element.value == "fahrenheit") {
      temp.innerText = convertToFahrenheit(temp_value);
    } else {
      temp.innerText = convertToCelcius(temp_value);
    }
  }
}
