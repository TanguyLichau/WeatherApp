export const getCityName = async (inputValue: string) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}&language=fr&count=1`
  );
  let test = await response.json();
  const { name, latitude, longitude } = await test.results[0];
  return { name, latitude, longitude };
};

export const getCityData = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?timezone=CET&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode`
  );
  return await response.json();
};
