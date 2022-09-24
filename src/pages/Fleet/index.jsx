import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

// ---Assets---
import fleetHero from "../../assets/images/fleetHero.png";
import trustpilotMini from "../../assets/images/trustpilotMini.png";
import { ReactComponent as LogoBG } from "../../assets/LogoBG.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

//  ---StaticData---
import { VehicleData } from "../../Static/VehicleData";
import { BlogData } from "../../Static/BlogCardData";

//  ---Components---
import { VehicleCard, BlogCard } from "../../components";

export function Fleet() {
  const Fleet = useRef(null);
  const [SortMode, setSortMode] = useState("fuel");

  return (
    <div className="Home evFleet Fleet">
      <div className="hero evHeading notBanner">
        <div className="heroTextArea">
          <div className="heroText">
            <h1>Our Fleet</h1>
            <span>
              Choose a car from our broad range of vehicles which suits you the
              most. Contact us anytime for more information.
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
              Fleet.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            <span id="Contact">Discover more</span>
            <LogoBG />
          </button>
        </div>
        <img
          src={fleetHero}
          className="homeHeroImg"
          alt="Electric vehicles fleet page hero"
        />
      </div>

      <div className="fleet notBanner" ref={Fleet}>
        <div className="sortMode">
          <span className="sortMode__title">Sort by:</span>
          <div className="sortMode__items">
            <button
              className={SortMode === "fuel" ? "primaryBtn" : "ghostBtn"}
              onClick={() => setSortMode("fuel")}
            >
              Fuel type
            </button>
            <button
              className={
                SortMode === "price_high_to_low" ? "primaryBtn" : "ghostBtn"
              }
              onClick={() => setSortMode("price_high_to_low")}
            >
              Price: High to low
            </button>
            <button
              className={
                SortMode === "price_low_to_high" ? "primaryBtn" : "ghostBtn"
              }
              onClick={() => setSortMode("price_low_to_high")}
            >
              Price: Low to high
            </button>
          </div>
        </div>
        <div className="fleetRow">
          {VehicleData.sort(
            (a, b) =>
              ({
                price_high_to_low: b.price - a.price,
                price_low_to_high: a.price - b.price,
                fuel:
                  a.fuel === "Full-Electric" && b.fuel === "Full-Electric"
                    ? a.price < b.price
                      ? 1
                      : -1
                    : a.fuel === "Full-Electric" && b.fuel !== "Full-Electric"
                    ? -1
                    : a.fuel !== "Full-Electric" && b.fuel === "Full-Electric"
                    ? 1
                    : a.fuel.toLowerCase() < b.fuel.toLowerCase()
                    ? -1
                    : 1,
              }[SortMode])
          ).map((car) => (
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
          <Link className="secondaryBtn Link" to="/ev-fleet">
            <span>Visit our EV fleet</span>
            <LogoBG />
          </Link>
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
          <a className="secondaryBtn scrollDown" href="tel:07701727142">
            <Contact id="Contact" />
            Contact us
          </a>
        </div>
        <div className="divider"></div>
        <div className="fullWidthCTA">
          <h4>Got any questions?</h4>
          <Link className="secondaryBtn scrollDown" to="/FAQ">
            Visit our FAQ page
            <LogoBG />
          </Link>
        </div>
      </div>
    </div>
  );
}
