import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { CircleLoader } from "react-spinners";

import { TranslateDate } from "../utils/TranslateDate";

export function MainForecast({ cityData, current, daily }) {
  return (
    <div className="left-content d-flex align-items-center justify-content-center">
      {cityData === "" || !current ? (
        <CircleLoader color="#f1f1f1" className="left-loader" />
      ) : (
        <>
          <div className="d-flex flex-column w-100 h-100 justify-content-between align-items-center">
            <div className="top w-100 d-flex justify-content-between">
              <p className="mt-1 ms-3">Hoje - {TranslateDate(current.dt)}</p>
              <p className="mt-1 mx-3 d-flex align-items-end">
                <MdLocationOn color="#f1f1f1" size={25} />
                {cityData.name}, {cityData.sys.country}
              </p>
            </div>

            <div className="mb-5 w-100 d-flex flex-column align-items-center">
              <div className="icon d-flex flex-column align-items-center">
                <img
                  src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
                  width="150px"
                  alt=""
                  className="main-icon"
                />
                <div className="mb-5 text-capitalize">
                  {current.weather[0].description}
                </div>
              </div>

              <div className="informacoes d-flex flex-column">
                <div className="temperature d-flex align-items-center justify-content-center gap-2 mb-5">
                  <div className="current">{current.temp.toFixed(1)}°C</div>
                  <div className="min-max f-4 d-flex flex-column gap-1">
                    <div className="max">{daily[0].temp.max.toFixed(1)}°C</div>
                    <div className="min">{daily[0].temp.min.toFixed(1)}°C</div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-start gap-1 fs-4">
                  <div className="wind d-flex align-items-center gap-3">
                    <p>Vento: {current.wind_speed} m/s</p>
                    <BsFillArrowUpCircleFill
                      color="#f1f1f1"
                      size={20}
                      style={{ rotate: current.wind_deg + "deg" }}
                    />
                  </div>
                  <div className="humidity">Umidade: {current.humidity}%</div>
                  <div className="visibility">
                    Visibilidade: {current.visibility / 1000} Km
                  </div>
                  <div className="pressure">
                    Pressão Atmosférica: {current.pressure} hPa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
