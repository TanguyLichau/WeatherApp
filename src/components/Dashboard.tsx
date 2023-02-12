import React, { useEffect, useState } from "react";
import DailyWeather from "./DailyWeather";
import WeeklyWeather from "./WeeklyWeather";
import { getCityName, getCityData } from "../utilities/getApiData";

function Dashboard() {
  const [cardClickedId, SetCardClickedId] = useState<null | number>(null);
  const [input, setInput] = useState("");
  const [latitude, setLatitude] = useState<number>(48.85341);
  const [longitude, setLongitude] = useState<number>(2.3488);
  const [cityName, setCityName] = useState<string>("Paris");
  const [tempData, setTempData] = useState<any>(null);

  useEffect(() => {
    getCityData(latitude, longitude).then((res) => setTempData(res));
  }, [latitude, longitude]);

  const changeCardClickedId = (id: number) => {
    SetCardClickedId(id);
  };

  const handleInputChange = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    const obj = await getCityName(inputValue);
    setLatitude(obj.latitude);
    setLongitude(obj.longitude);
    setCityName(obj.name);
  };

  return (
    <div>
      {!!tempData && (
        <>
          <input onKeyPress={(e) => e.key === "Enter" && handleInputChange(e)} />
          City : {cityName}
          <WeeklyWeather
            time={tempData.daily.time}
            weathercode={tempData.daily.weathercode}
            temperature_2m_min={tempData.daily.temperature_2m_min}
            temperature_2m_max={tempData.daily.temperature_2m_max}
            changeCardClickedId={changeCardClickedId}></WeeklyWeather>
          {cardClickedId != null && (
            <DailyWeather
              time={tempData.hourly.time}
              id={cardClickedId}
              weathercode={tempData.hourly.weathercode}
              temperature_2m={tempData.hourly.temperature_2m}></DailyWeather>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
