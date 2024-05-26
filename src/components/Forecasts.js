import { CircleLoader } from "react-spinners";
import { Forecast } from "./Forecast";

export function Forecasts({ daily }) {
  return (
    <div className="right-content d-flex align-items-center justify-content-center">
      {!daily ? (
        <CircleLoader color="#f1f1f1" className="right-loader" />
      ) : (
        <>
          <div className="forecast d-flex flex-column align-items-center">
            {daily.map((day, index) => (
              <Forecast day={day} index={index} key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
