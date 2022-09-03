import { ReactComponent as Fuel } from "../../assets/icons/Fuel.svg";
import { ReactComponent as Seats } from "../../assets/icons/Seats.svg";
import { ReactComponent as Transmission } from "../../assets/icons/Transmission.svg";
import { ReactComponent as Year } from "../../assets/icons/Year.svg";
import { ReactComponent as Charge } from "../../assets/icons/charge.svg";

export function VehicleCard({
  img,
  name,
  fuel,
  seats,
  transmission,
  year,
  price,
  link,
}) {
  return (
    <a href={`/fleet/${link}`} className="vehicleCard">
      <img src={img} alt={name} />
      <div className="vehicleCardContents">
        <h3>{name}</h3>
        <div className="vehicleCardContents__info">
          <div className="vehicleCardContents__info__item">
            <Fuel />
            {fuel}
          </div>
          <div className="vehicleCardContents__info__item">
            <Seats />
            {seats} seats
          </div>
          <div className="vehicleCardContents__info__item">
            <Transmission />
            {transmission}
          </div>
          <div className="vehicleCardContents__info__item">
            <Year />
            {year}
          </div>
        </div>

        <hr />

        <div className="vehicleCardContents__price">
          <div className="vehicleCardContents__priceTag">
            <strong>£ {price}</strong>
            <span>Per week</span>
          </div>
          <span>More details {">"}</span>
        </div>

        {fuel === "Full-Electric" ? (
          <div className="noCongestionCharge">
            <Charge />
            <span>No congestion charge</span>
          </div>
        ) : null}
      </div>
    </a>
  );
}
