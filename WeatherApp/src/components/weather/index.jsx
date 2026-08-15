import { useEffect, useState } from "react";
import Search from "../search";
import '../../app.css'

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=aee59cd61074506683a87f3a5d27f3c5`);

      const data = await response.json();

      if (data) {
        setWeatherData(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  async function handleSearch() {
    setLoading(true);
    fetchWeatherData(search);
  }

  useEffect(() => {
    setTimeout(() => {
        fetchWeatherData("lahore");
    }, 0);
  }, []);

  console.log(weatherData);

  return (
    <div className="weather-app">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {
        loading
          ? <div>Loading....</div>
          : <div className="weather-content">
            <div className="city">
              <h2>
                {weatherData?.name}, <span>{weatherData?.sys.country}</span>
              </h2>
            </div>
            <div className="current-date">
              {getCurrentDate()}
            </div>
            <div className="temp">
              {
                weatherData?.main?.temp
                  ? `${Math.round(weatherData.main.temp - 273.15)}°C`
                  : ''
              }
            </div>
            <p className="description">
              {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
            </p>
            <div className="weather-info">
              <div className="feature">
                <div>
                  <p className="wind">{weatherData?.wind?.speed} m/s</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div className="features">
                <div>
                  <p className="humidity">{weatherData?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
}
