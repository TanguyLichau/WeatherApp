import React from "react";
import { ICON_MAP } from "../../utilities/mapIcon";
import "../../styles/WeatherCard.css";

interface TempInfoWk {
  time: string;
  id: number;
  changeCardClickedId: (id: number) => void;
  weathercode: number;
  temperature_2m_min: number;
  temperature_2m_max: number;
}

function getIconUrl(iconCode: number) {
  return `icons/${ICON_MAP.get(iconCode)}.svg`;
}

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

function WeatherCard(props: TempInfoWk) {
  const date = new Date(props.time);
  const dateToDay = weekday[date.getDay()];

  const handleClick = () => {
    props.changeCardClickedId(props.id);
  };

  return (
    <div className="weather-card" onClick={handleClick}>
      <img src={getIconUrl(props.weathercode)} alt="" className="icon" />
      <div className="date-container">
        <p className="date">{dateToDay}</p>
      </div>
      <div className="temp-container">
        <p className="min-max">Min: {props.temperature_2m_min}</p>
        <p className="min-max">Max: {props.temperature_2m_max}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
