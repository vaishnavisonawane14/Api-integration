function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "fc78cde8d2bffd39ee0f0e7cccc08be4";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "City not found";
        });
}