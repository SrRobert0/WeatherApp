import { useState, useEffect } from "react";

import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { MainForecast } from "./components/MainForecast";
import { Main } from "./components/Main";
import { Forecasts } from "./components/Forecasts";
import { TryGetData } from "./utils/ApiUtils";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState();
  const [cityData, setCityData] = useState();

  useEffect(() => {
    TryGetCurrentPosition();
  }, []);

  function TryGetCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(SetCurrentPosition, () =>
        console.warn("Sem permissão para acessar localização.")
      );

      // Ideia: Caso o usuário não permita que sua localização seja acessada, mostrar uma capital mundial aleatória.
    }
  }

  async function SetCurrentPosition(position) {
    const { cityData: currentCityData, data: currentData } = await TryGetData(
      position
    );

    setCityData(currentCityData);
    setData(currentData);
  }

  return (
    <Container>
      <Header setCityData={setCityData} setData={setData} />
      <Main>
        <MainForecast
          cityData={cityData}
          current={data?.current}
          daily={data?.daily}
        />
        <Forecasts daily={data?.daily} />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
