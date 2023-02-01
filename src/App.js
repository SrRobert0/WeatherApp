import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { CircleLoader } from "react-spinners";
import axios from "axios";
import ApiKey from "./ApiKey";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [cityIsLoading, setCityIsLoading] = useState(true);
  const [data, setData] = useState();
  const [city, setCity] = useState();
  const [actData, setActDate] = useState();

  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    MountUrl();
  }

  async function GetCity(position) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${ApiKey}&units=metric&lang=pt_br`
      );
      setCity(response.data.name);

      setCityIsLoading(false);
    } catch (error) {
      console.log("Erro na requisição de Api: City " + error);
    }
  }

  async function MountUrl() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(GetLocation);
    } else {
      console.log("deu erro aqui cara...");
    }
  }

  async function GetLocation(position) {
    GetCity(position);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${ApiKey}&units=metric&lang=pt_br`
      );
      console.log(response.data);
      setData(response.data);
      TranslateDay(response.data.current.dt);

      setDataIsLoading(false);
    } catch (error) {
      console.log("Erro na requisição da Api: Data " + error);
    }
  }

  async function TranslateDay(dt) {
    let temp = new Date(dt * 1000);
    let tDay, tMonth, month, day, dayNumber, year, translated;

    temp = temp.toDateString();
    day = temp.substring(0, 3);
    month = temp.substring(4, 7);
    dayNumber = temp.substring(8, 10);
    year = temp.substring(11, 15);

    switch (day) {
      case "Sun":
        tDay = "Dom";
        break;
      case "Mon":
        tDay = "Seg";
        break;
      case "Tue":
        tDay = "Ter";
        break;
      case "Wed":
        tDay = "Qua";
        break;
      case "Thu":
        tDay = "Qui";
        break;
      case "Fri":
        tDay = "Sex";
        break;
      case "Sat":
        tDay = "Sab";
        break;
      default:
        console.log("Erro!");
        tDay = "Erro";
    }

    switch (month) {
      case "Jan":
        tMonth = "Jan";
        break;
      case "Feb":
        tMonth = "Fev";
        break;
      case "Mar":
        tMonth = "Mar";
        break;
      case "Apr":
        tMonth = "Abr";
        break;
      case "May":
        tMonth = "Mai";
        break;
      case "Jun":
        tMonth = "Jun";
        break;
      case "Jul":
        tMonth = "Jul";
        break;
      case "Aug":
        tMonth = "Ago";
        break;
      case "Sep":
        tMonth = "Set";
        break;
      case "Oct":
        tMonth = "Out";
        break;
      case "Nov":
        tMonth = "Nov";
        break;
      case "Dec":
        tMonth = "Dez";
        break;
      default:
        tMonth = "Erro";
    }

    translated = `${tDay}, ${dayNumber} de ${tMonth} de ${year}`;
    setActDate(translated);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <main>
        <header className="header d-flex align-items-center">
          <input type="text" className="input-search me-3 px-3 py-1" />
        </header>
        <div className="main d-flex">
          <div className="left-content d-flex align-items-center justify-content-center">
            {(cityIsLoading || dataIsLoading) && (
              <CircleLoader color="#f1f1f1" className="left-loader" />
            )}
            {!cityIsLoading && !dataIsLoading && (
              <>
                <div className="d-flex flex-column w-100 h-100 justify-content-between align-items-center">
                  <div className="top w-100 d-flex justify-content-between">
                    <p className="mt-1 ms-3">Hoje - {actData}</p>
                    <p className="mt-1 mx-3 d-flex align-items-end">
                      <MdLocationOn color="#f1f1f1" size={25} />
                      {city}
                    </p>
                  </div>

                  <div className="mb-5 w-100 d-flex flex-column align-items-center">
                    <div className="icon d-flex flex-column align-items-center">
                      <img
                        src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`}
                        width="150px"
                        alt=""
                        className="main-icon"
                      />
                      <div className="mb-5">Nublado</div>
                    </div>

                    <div className="informacoes d-flex flex-column">
                      <div className="temperature d-flex align-items-center justify-content-center gap-2 mb-5">
                        <div className="current">
                          {data.current.temp.toFixed(1)}°C
                        </div>
                        <div className="min-max f-4 d-flex flex-column gap-1">
                          <div className="max">
                            {data.daily[0].temp.max.toFixed(1)}°C
                          </div>
                          <div className="min">
                            {data.daily[0].temp.min.toFixed(1)}°C
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-start gap-1 fs-4">
                        <div className="wind d-flex align-items-center gap-3">
                          <p>Vento: {data.current.wind_speed} m/s</p>
                          <BsFillArrowUpCircleFill
                            color="#f1f1f1"
                            size={20}
                            style={{ rotate: data.current.wind_deg + "deg" }}
                          />
                          {/* <div>[Função para determinar direção]</div> */}
                        </div>
                        <div className="humidity">
                          Umidade: {data.current.humidity}%
                        </div>
                        <div className="visibility">
                          Visibilidade: {data.current.visibility / 1000} Km
                        </div>
                        <div className="pressure">
                          Pressão Atmosférica: {data.current.pressure} hPa
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="right-content d-flex align-items-center justify-content-center">
            {(cityIsLoading || dataIsLoading) && (
              <CircleLoader color="#f1f1f1" className="right-loader"/>
            )}
            {!cityIsLoading && !dataIsLoading && (
              <>
                <div className="forecast d-flex flex-column align-items-center">
                  {data.daily.map((day, key) => {
                    if (key >= 1 && key < 6) {
                      let temp = new Date(day.dt * 1000);
                      let tDay, tMonth, month, fDay, dayNumber, year, translated;

                      temp = temp.toDateString();
                      fDay = temp.substring(0, 3);
                      month = temp.substring(4, 7);
                      dayNumber = temp.substring(8, 10);
                      year = temp.substring(11, 15);

                      switch (fDay) {
                        case "Sun":
                          tDay = "Dom";
                          break;
                        case "Mon":
                          tDay = "Seg";
                          break;
                        case "Tue":
                          tDay = "Ter";
                          break;
                        case "Wed":
                          tDay = "Qua";
                          break;
                        case "Thu":
                          tDay = "Qui";
                          break;
                        case "Fri":
                          tDay = "Sex";
                          break;
                        case "Sat":
                          tDay = "Sab";
                          break;
                        default:
                          console.log("Erro!");
                          tDay = "Erro";
                      }

                      switch (month) {
                        case "Jan":
                          tMonth = "Jan";
                          break;
                        case "Feb":
                          tMonth = "Fev";
                          break;
                        case "Mar":
                          tMonth = "Mar";
                          break;
                        case "Apr":
                          tMonth = "Abr";
                          break;
                        case "May":
                          tMonth = "Mai";
                          break;
                        case "Jun":
                          tMonth = "Jun";
                          break;
                        case "Jul":
                          tMonth = "Jul";
                          break;
                        case "Aug":
                          tMonth = "Ago";
                          break;
                        case "Sep":
                          tMonth = "Set";
                          break;
                        case "Oct":
                          tMonth = "Out";
                          break;
                        case "Nov":
                          tMonth = "Nov";
                          break;
                        case "Dec":
                          tMonth = "Dez";
                          break;
                        default:
                          tMonth = "Erro";
                      }

                      translated = `${tDay}, ${dayNumber} de ${tMonth} de ${year}`;

                      return (
                        <div
                          className="individual-forecast d-flex align-items-center px-1 py-3"
                          key={key}
                        >
                          <div className="icon-forecast">
                            <img
                              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                              width="150px"
                              alt=""
                              className="main-icon"
                            />
                          </div>
                          <div className="min-max-forecast ms-1 me-2">
                            <div className="max mb-3">
                              {day.temp.max.toFixed(1)}°C
                            </div>
                            <div className="min mt-3">
                              {day.temp.min.toFixed(1)}°C
                            </div>
                          </div>
                          <div className="date-forecast ms-5">{translated}</div>
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="footer row d-flex align-items-center justify-content-center">
        Criado Por Roberto Willian
      </footer>
    </div>
  );
}

export default App;
