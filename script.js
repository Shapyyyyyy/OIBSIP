document.getElementById('convertBtn').addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperature').value.trim();
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
  
    if (temperatureInput === '') {
      alert('Please enter a temperature value.');
      return;
    }
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for the temperature.');
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    // Conversion formulas
    let convertedTemperature, resultText;
  
    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultText = `${temperature} °C is equal to ${convertedTemperature.toFixed(2)} °F.`;
      } else if (toUnit === 'kelvin') {
        convertedTemperature = temperature + 273.15;
        resultText = `${temperature} °C is equal to ${convertedTemperature.toFixed(2)} K.`;
      }
    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        convertedTemperature = (temperature - 32) * 5/9;
        resultText = `${temperature} °F is equal to ${convertedTemperature.toFixed(2)} °C.`;
      } else if (toUnit === 'kelvin') {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        resultText = `${temperature} °F is equal to ${convertedTemperature.toFixed(2)} K.`;
      }
    } else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        convertedTemperature = temperature - 273.15;
        resultText = `${temperature} K is equal to ${convertedTemperature.toFixed(2)} °C.`;
      } else if (toUnit === 'fahrenheit') {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        resultText = `${temperature} K is equal to ${convertedTemperature.toFixed(2)} °F.`;
      }
    }
  
    document.getElementById('result').textContent = resultText;
  });
  