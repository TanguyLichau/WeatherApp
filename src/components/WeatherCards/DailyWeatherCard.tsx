import { time } from "console";
import React from "react";
import { ICON_MAP } from "../../utilities/mapIcon";

interface TempInfoDay {
  time: string;
  temperature_2m: number;
  weathercode: number;
}

function getIconUrl(iconCode: number) {
  return `icons/${ICON_MAP.get(iconCode)}.svg`;
}

function DailyWeatherCard(props: TempInfoDay) {
  const date = new Date(props.time);

  return (
    <div className="weather-card">
      <img src={getIconUrl(props.weathercode)} alt="" className="icon" />
      <div className="date-container">
        <p className="date">
          {date.getHours() < 12 ? `${date.getHours()} AM` : `${date.getHours() - 12} PM`}
        </p>
      </div>
      <div className="temp-container">
        <p className="min-max">Temp: {props.temperature_2m}</p>
      </div>
    </div>
  );
}

export default DailyWeatherCard;
