import { useRef } from "react";
import { Link } from "react-router-dom";

// ---Assets---
import EVFleetHero from "../../assets/images/evFleetHero.png";
import trustpilotMini from "../../assets/images/trustpilotMini.png";
import { ReactComponent as LogoBG } from "../../assets/LogoBG.svg";
import { ReactComponent as EVCharge } from "../../assets/icons/EVCharge.svg";
import { ReactComponent as EVEfficiency } from "../../assets/icons/EVEfficiency.svg";
import { ReactComponent as EVFuel } from "../../assets/icons/EVFuel.svg";
import { ReactComponent as EVPollution } from "../../assets/icons/EVPollution.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

//  ---StaticData---
import { VehicleData } from "../../Static/VehicleData";

//  ---Components---
import { TitleSection, VehicleCard } from "../../components";

export function EVFleet() {
  const evFleet = useRef(null);

  return (
    <div className="Home evFleet">
      <div className="hero evHeading notBanner">
        <div className="heroTextArea">
          <div className="heroText">
            <h1>Electric Vehicles</h1>
            <span>
              The future of the taxi industry is electric, why not try it now?
            </span>
            <span>
              We offer brand new and reliable electric vehicles suitable for
              eco-friendly PCO drivers in London.
            </span>
          </div>
          <img
            src={trustpilotMini}
            className="trustpilotMini"
            alt="Trustpilot rating: 4.8 out of 5 stars"
          />
          <button
            className="secondaryBtn scrollDown"
            onClick={() =>
              evFleet.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              })
            }
          >
            <span id="Contact">Discover more</span>
            <LogoBG />
          </button>
        </div>
        <img src={EVFleetHero} className="homeHeroImg" alt="Fleet page hero" />
      </div>
      <div className="blog ourBenefits whyEV notBanner" ref={evFleet}>
        <TitleSection
          title={"Why electric vehicles are better"}
          description={"Discover more about our Full-Electric fleet"}
        />
        <div className="ourBenefitsRow">
          <div className="benefit">
            <EVCharge />
            <div className="benefitText">
              <span className="benefitTitle">
                No ULEZ and Congestion Charge fee.
              </span>
              <span className="benefitDescription">
                One of the biggest bonuses of renting an electric vehicle (EV)
                is that you are not required to pay the Congestion Charge and
                ULEZ fees. Drivers can save up to £150 per week from Congestion
                Charges and ULEZ fees.
              </span>
            </div>
          </div>
          <div className="benefit">
            <EVFuel />
            <div className="benefitText">
              <span className="benefitTitle">Fuel Costs</span>
              <span className="benefitDescription">
                Amid current high fuel prices, it is more reasonable to switch
                to full electric vehicles. Most utility providers offer
                residential electric rates that cost only a few cents per hour.
                Moreover, on average, it will cost drivers approximately £12-£15
                to fully charge their electric vehicle.
              </span>
            </div>
          </div>
        </div>
        <div className="ourBenefitsRow">
          <div className="benefit">
            <EVPollution />
            <div className="benefitText">
              <span className="benefitTitle">Noise Pollution</span>
              <span className="benefitDescription">
                One of the major benefits of electric vehicles is the
                contribution that they can make towards improving air quality in
                towns and cities and protecting the environment.
              </span>
            </div>
          </div>
          <div className="benefit">
            <EVEfficiency />
            <div className="benefitText">
              <span className="benefitTitle">Vehicle Efficiency</span>
              <span className="benefitDescription">
                BEVs are, on average, over twice as efficient as gas vehicles.
                While gas vehicles are only able to convert about 12 - 30% of
                the energy stored in gasoline into driving power, BEVs are able
                to convert over 77% of the electrical energy from the grid to
                power the wheels.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="fleet notBanner">
        <TitleSection
          title={"Our Full-Electric fleet"}
          // description={"Discover more about our Full-Electric fleet"}
        />

        <div className="fleetRow">
          {VehicleData.filter((car) => car.fuel === "Full-Electric")
            .sort((a, b) => b.price - a.price)
            .map((car) => (
              <VehicleCard
                img={car.img}
                name={car.name}
                fuel={car.fuel}
                seats={car.seats}
                transmission={car.transmission}
                year={car.year}
                price={car.price}
                link={car.link}
              />
            ))}
        </div>
      </div>
      <div className="CTA_row notBanner">
        <div className="fullWidthCTA">
          <h4>Contact us for renting car</h4>
          <a className="secondaryBtn scrollDown" href="/FAQ">
            <Contact id="Contact" />
            Contact us
          </a>
        </div>
        <div className="divider"></div>
        <div className="fullWidthCTA">
          <h4>Got any questions?</h4>
          {/* <a className="secondaryBtn scrollDown" href="/FAQ">
            Visit our FAQ page
            <LogoBG />
          </a> */}

          <Link to="/faq" className="secondaryBtn scrollDown">
            Visit our FAQ page
            <LogoBG />
          </Link>
        </div>
      </div>
    </div>
  );
}
