function getWeather() {
  const $getWeather = document.getElementById("get-weather");
  $getWeather.addEventListener("click", async () => {
    try {
      const $city = document.getElementById("city").value;
      const apiKey = "c3a7daa3f8904132aa6201309242408";
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${$city}&aqi=yes`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.error) {
        console.log(data.error.message);
        alert('Please try again');
      } else {
        const $info = document.getElementById("info");
        const $div = document.createElement("div");
        const $location = document.createElement("h2");
        const $weather = document.createElement("p");
        const $temperature = document.createElement("h3");
        const $humidity = document.createElement("p");
        const $wind = document.createElement("p");
        const $cloud = document.createElement("p");
        const $update = document.createElement("p");
        $location.textContent = `Location : ${data.location.name}`;
        $weather.textContent = `Weather : ${data.current.condition.text}`;
        $temperature.textContent = `Temperature : ${data.current.temp_c} °C`;
        $humidity.textContent = `Humidity : ${data.current.humidity} %`;
        $wind.textContent = `Wind : ${data.current.wind_kph} km/h`;
        $cloud.textContent = `Cloud : ${data.current.cloud} %`;
        $update.textContent = `Last Update : ${data.current.last_updated}`;
        $div.appendChild($location);
        $div.appendChild($weather);
        $div.appendChild($temperature);
        $div.appendChild($humidity);
        $div.appendChild($wind);
        $div.appendChild($cloud);
        $div.appendChild($update);
        $info.appendChild($div);
      }
    } catch (error) {
      console.log(error);
      alert('Please try again');
    }
  });
}
getWeather();
