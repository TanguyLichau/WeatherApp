import React from "react";
import WeatherCard from "./WeatherCards/WeeklyWeatherCard";
import "../styles/WeeklyWeather.css";

interface WeeklyData {
  time: string[];
  changeCardClickedId: (id: any) => void;
  weathercode: number[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
}

function WeeklyWeather(props: WeeklyData) {
  const displayWeeklyWeather = () => {
    return props.time.map((time, i) => {
      return (
        <div className="weather-container">
          <WeatherCard
            key={i}
            id={i}
            time={time}
            weathercode={props.weathercode[i]}
            temperature_2m_max={props.temperature_2m_max[i]}
            temperature_2m_min={props.temperature_2m_min[i]}
            changeCardClickedId={props.changeCardClickedId}
          />
        </div>
      );
    });
  };

  return <div>{displayWeeklyWeather()}</div>;
}

export default WeeklyWeather;
