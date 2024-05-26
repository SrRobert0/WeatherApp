import axios from "axios";

const ApiKey = process.env.REACT_APP_API_KEY;

export async function TryGetData(position) {
  const cityPosition = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${ApiKey}&units=metric&lang=pt_br`
    );
    const cityData = await TryGetCityData(cityPosition);

    const data = response.data;

    return { cityData, data };
  } catch (err) {
    console.log("Erro na requisição da Api: " + err);
  }
}

export async function GetCityCoordinatesByName(cityName) {
  if (cityName === "") {
    console.warn("Nome da cidade não informado.");

    return;
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${ApiKey}`
    );

    const cityPosition = {
      coords: {
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
      },
    };

    return await TryGetData(cityPosition);
  } catch (err) {
    console.log("Erro ao requisitar posição da cidade: " + err);
  }
}

async function TryGetCityData(position) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${ApiKey}&units=metric&lang=pt_br`
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao requisitar nome da cidade: " + error);

    return false;
  }
}
