const weatherData = {
  "Hà Nội": {
    temperature: 25,
    humidity: 70,
    windSpeed: 5,
    description: "Có mây",
    icon: "☁️",
  },
  "Hồ Chí Minh": {
    temperature: 32,
    humidity: 75,
    windSpeed: 7,
    description: "Nắng",
    icon: "☀️",
  },
  "Đà Nẵng": {
    temperature: 28,
    humidity: 82,
    windSpeed: 12,
    description: "Mưa rào",
    icon: "🌧️",
  },
};

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

searchBtn.addEventListener("click", () => {
  const cityName = cityInput.value.trim();
  const cityData = weatherData[cityName];

  resultDiv.innerHTML = "";
  errorDiv.textContent = "";

  if (cityData) {
    resultDiv.innerHTML = `<div class="weather-card">
        <h2>${cityName}</h2>
        <div style="font-size:50px;">${cityData.icon}</div>
        <h3>${cityData.temperature}°C</h3>
        <p>${cityData.description}</p>
        <p>Độ ẩm: ${cityData.humidity}%</p>
        <p>Tốc độ gió: ${cityData.windSpeed} km/h</p>
        </div>
    `;
  } else {
    errorDiv.textContent = "Thành phố không tồn tại trong dữ liệu!";
  }
});
