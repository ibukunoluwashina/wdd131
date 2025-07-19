// Static values for the weather section (Imperial units for USA)
const temperature = 45; // °F
const windSpeed = 10;   // mph
const condition = "Sunny";

// Wind Chill formula for Fahrenheit (US National Weather Service)
function calculateWindChill(tempF, windMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(windMph, 0.16) +
        0.4275 * tempF * Math.pow(windMph, 0.16)
    ).toFixed(1);
}

function displayWeather() {
    document.getElementById("temperature").textContent = `${temperature}°F`;
    document.getElementById("wind").textContent = `${windSpeed} mph`;
    document.getElementById("condition").textContent = condition;

    const windChillElement = document.getElementById("windchill");
    // Only calculate wind chill if temp <= 50°F and wind > 3 mph
    if (temperature <= 50 && windSpeed > 3) {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°F`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Call displayWeather when the DOM is loaded
document.addEventListener("DOMContentLoaded", displayWeather);