import { useParams } from "react-router-dom";

//  ---Swiperjs---
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

//  ---Assets---
import trustpilotMini from "../../assets/images/trustpilotMini.png";
import { ReactComponent as CheckMark } from "../../assets/icons/checkMark.svg";
import { ReactComponent as Info } from "../../assets/icons/info.svg";
import { ReactComponent as Whatsapp } from "../../assets/socials/whatsapp.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

//  ---Static Data---
import { VehicleData } from "./data";
import { TestimonialData } from "../../components/TestimonialCard/data";

export function VehiclePage() {
  const { id } = useParams();
  const car = VehicleData.filter((car) => car.link === id)[0];

  return (
    <div className="vehiclePage">
      <div className="hero notBanner">
        <div className="heroTextArea">
          <div className="heroText">
            <h1>{car.name}</h1>
            <img
              src={trustpilotMini}
              className="trustpilotMini"
              alt="Trustpilot rating: 4.8 out of 5 stars"
            />
            <div className="ourServices">
              <h3>Our services</h3>
              <div className="ourServicesList">
                <div className="ourServicesItem">
                  <CheckMark />
                  <span>No ULEZ or Congestion Charge</span>
                </div>
                <div className="ourServicesItem">
                  <CheckMark />
                  <span>Uploading documents to UBER & BOLT</span>
                </div>
                <div className="ourServicesItem">
                  <CheckMark />
                  <span>Accident claim assistance</span>
                </div>
                <div className="ourServicesItem">
                  <CheckMark />
                  <span>Service booking assistance</span>
                </div>
                <div className="ourServicesItem">
                  <CheckMark />
                  <span>Free MOT, Servicing, Tyre Changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vehicleImgWrapper">
          <img src={car.img} alt="Happy Czar PCO customer" />
        </div>
      </div>
      <div className="vehicleDetailsRow notBanner">
        <div className="vehicleDetails Fin">
          <h3>Financial details</h3>
          <span className="pricingRow">
            <div className="pricingItem">
              <span className="pricingTitle">Weekly rent</span>
              <span className="price">£ {car.price}</span>
              <sub>VAT included</sub>
            </div>
            <div className="pricingItem">
              <span className="pricingTitle">Deposit cost</span>
              <span className="price">£ 900</span>
            </div>
          </span>
          <div className="depositDescriptions">
            <Info />
            <span>
              The deposit amount will act as a refundable insurance cost.The
              deposit amount is your money, and we are committed to refund the
              deposit on the same day that you return our vehicle.
            </span>
          </div>
          <div className="vehiclePageCTA">
            <a
              className="secondaryBtn whatsapp"
              href="https://wa.me/+4407701727142"
            >
              <Whatsapp />
              Send us your documents
            </a>
            <a className="secondaryBtn btn" id="contact" href="tel:02089009574">
              <Contact />
              <span>Contact us</span>
            </a>
          </div>
        </div>
        <div className="vehicleDetails">
          <h3>Car overview</h3>
          <span className="overviewTitle">Appearance :</span>
          <span className="overviewItemRow">
            <span className="overviewItemTitle">Color :</span>
            <span className="overviewItemDesc">{car.color}</span>
          </span>
          <span className="overviewItemRow">
            <span className="overviewItemTitle">Body type :</span>
            <span className="overviewItemDesc">{car.bodyType}</span>
          </span>
          <span className="overviewItemRow">
            <span className="overviewItemTitle">Seats :</span>
            <span className="overviewItemDesc">{car.seats}</span>
          </span>
          <span className="overviewTitle">Technical specifications :</span>
          <span className="overviewItemRow">
            <span className="overviewItemTitle">Manufacture date :</span>
            <span className="overviewItemDesc">{car.year}</span>
          </span>
          <span className="overviewItemRow">
            <span className="overviewItemTitle">Transmission :</span>
            <span className="overviewItemDesc">{car.transmission}</span>
          </span>
          <span className="overviewItemRow">
            <span className="overviewItemTitle">Fuel type :</span>
            <span className="overviewItemDesc">{car.fuel}</span>
          </span>
        </div>
      </div>
      <div className="vehiclePictures blog">
        <h3>Vehicle pictures</h3>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={3}
          loop
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          style={{ width: "100%" }}
        >
          {TestimonialData.map((testimonial) => (
            <SwiperSlide>222</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
