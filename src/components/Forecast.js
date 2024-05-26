import { TranslateDate } from "../utils/TranslateDate";

export function Forecast({ day, index }) {
  if (index !== 0 && index < 6) {
    return (
      <div className="individual-forecast d-flex align-items-center px-1 py-3">
        <div className="icon-forecast">
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
            width="150px"
            alt=""
            className="main-icon"
          />
        </div>
        <div className="min-max-forecast ms-1 me-2">
          <div className="max mb-3">{day.temp.max.toFixed(1)}°C</div>
          <div className="min mt-3">{day.temp.min.toFixed(1)}°C</div>
        </div>
        <div className="date-forecast ms-5">{TranslateDate(day.dt)}</div>
      </div>
    );
  } else {
    return <></>;
  }
}
