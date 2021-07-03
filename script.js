window.addEventListener("DOMContentLoaded", (event) => {
  // functions
  function fahrenheitToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;

    console.log(((fahrenheit - 32) * 5) / 9);
  }

  function celsiusToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    console.log((celsius * 9) / 5 + 32);
  }

  // event listeners
  document
    .getElementById("button-fah")
    .addEventListener("click", fahrenheitToCelsius);
  document
    .getElementById("button-cel")
    .addEventListener("click", celsiusToFahrenheit);
});
