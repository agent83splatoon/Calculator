// Calculator

// Event Listener 1
document.getElementById("btn1").addEventListener("click", btn1Pressed);

// Event Listener 2
document.getElementById("btn2").addEventListener("click", btn2Pressed);

// Variables

// Functions
function btn1Pressed() {
  let farenheitinput = +document.getElementById("farenheit").value;
  let celsiusoutput = ((farenheitinput - 32) * 5) / 9;

  document.getElementById(
    "output1"
  ).innerHTML = `<p id="output1"> Converted to Celsius: ${celsiusoutput}</p>`;
}

function btn2Pressed() {
  let celsiusinput = +document.getElementById("celsius").value;

  let farenheitoutput = (celsiusinput * 9) / 5 + 32;

  document.getElementById(
    "output2"
  ).innerHTML = `<p id="output2"> Converted to Farenheit: ${farenheitoutput}</p>`;
}
