// Function to convert temperature
function convertTemperature() {
    // Get input value and selected units
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitFromSelect = document.getElementById("unitFromSelect");
    const unitFrom = unitFromSelect.options[unitFromSelect.selectedIndex].value;
    const unitToSelect = document.getElementById("unitToSelect");
    const unitTo = unitToSelect.options[unitToSelect.selectedIndex].value;
  
    // Validate input is a number
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid temperature.");
      return;
    }
  
    // Perform conversion
    let result;
    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
      result = (parseFloat(temperatureInput) * 9/5) + 32;
    } else if (unitFrom === "celsius" && unitTo === "kelvin") {
      result = parseFloat(temperatureInput) + 273.15;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
      result = (parseFloat(temperatureInput) - 32) * 5/9;
    } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
      result = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "celsius") {
      result = parseFloat(temperatureInput) - 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
      result = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
    } else {
      // No conversion needed
      result = parseFloat(temperatureInput);
    }
  
    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted temperature: ${result.toFixed(2)} ${unitTo}`;
  }
  
  // Attach convertTemperature function to button click event
  const convertBtn = document.getElementById("convertBtn");
  convertBtn.addEventListener("click", convertTemperature);
  