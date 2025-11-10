const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = document.lastModified;

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

const temp = 22;
const speed = 5;
const windchillSpan = document.getElementById("windchill");

if (temp <= 10 && speed > 4.8) {
  windchillSpan.textContent = calculateWindChill(temp, speed) + " °C";
} else {
  windchillSpan.textContent = "N/A";
}
