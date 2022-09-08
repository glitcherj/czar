import React from "react";
import { useRef } from "react";

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
import { BlogData } from "../../Static/BlogCardData";

//  ---Components---
import { TitleSection, VehicleCard, BlogCard } from "../../components";

export function Fleet() {
  const evFleet = useRef(null);

  return (
    <div className="Home evFleet Fleet">
      <div className="hero evHeading notBanner">
        <div className="heroTextArea">
          <div className="heroText">
            <h1>Our Fleet</h1>
            <span>
              The future of the taxi industry is electric, why not try it now?
            </span>
            <span>
              We are here to help you. Choose a car from our diverse fleet of
              vehicles which suits you the most.
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
                block: "center",
              })
            }
          >
            <span id="Contact">Discover more</span>
            <LogoBG />
          </button>
        </div>
        <img
          src={EVFleetHero}
          className="homeHeroImg"
          alt="Happy Czar PCO customer"
        />
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
          {VehicleData.sort((a, b) => b.price - a.price).map((car) => (
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
      <section className="evBanner">
        <div className="evBanner__text">
          <h2>Why should you join our EV fleet?</h2>
          <span>
            Join the thousands of Ride-Hailing drivers who have already switched
            to an Electric Vehicle with us. We are committed to providing the
            best Electric Vehicles for the Ride-Hailing market and supporting
            drivers every step of the way.
          </span>
          <a className="secondaryBtn Link" href="/ev-fleet">
            <span>Visit our EV fleet</span>
            <LogoBG />
          </a>
        </div>
        <div className="evBanner__cards">
          {BlogData.slice(0, 2).map((blog) => (
            <BlogCard
              date={blog.date}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              link={blog.link}
            />
          ))}
        </div>
      </section>
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
          <a className="secondaryBtn scrollDown" href="/FAQ">
            Visit our FAQ page
            <LogoBG />
          </a>
        </div>
      </div>
    </div>
  );
}
