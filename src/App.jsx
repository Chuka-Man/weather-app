import { useState } from "react";
import "./App.css";

function App() {
    const [city, setCity] = useState("Барнаул");
    const [temperature, setTemperature] = useState(20);
    const [weather, setWeather] = useState("Солнечно");

    return (
        <div className="app">
            <div className="weather-card">
                <h1>Weather App</h1>

                <h2>{city}</h2>

                <h3 className="temperature">
                    {temperature}°C
                </h3>

                <p className="weather">
                    {weather}
                </p>

                <div className="buttons">
                    <button
                        onClick={() => {
                            setCity("Барнаул");
                            setTemperature(20);
                            setWeather("Солнечно");
                        }}
                    >
                        Барнаул
                    </button>

                    <button
                        onClick={() => {
                            setCity("Москва");
                            setTemperature(25);
                            setWeather("Облачно");
                        }}
                    >
                        Москва
                    </button>

                    <button
                        onClick={() => {
                            setCity("Санкт-Петербург");
                            setTemperature(18);
                            setWeather("Дождь");
                        }}
                    >
                        Санкт-Петербург
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;