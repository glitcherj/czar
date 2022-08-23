import { useState, useRef } from "react";
//  ---Swiperjs---
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

//  ---Assets---
import HomepageBanner from "../../assets/images/HomepageBanner.png";
import trustpilotMini from "../../assets/images/trustpilotMini.png";
import rideSharing_bolt from "../../assets/images/rideSharing_bolt.png";
import rideSharing_freenow from "../../assets/images/rideSharing_freenow.png";
import rideSharing_ola from "../../assets/images/rideSharing_ola.png";
import rideSharing_uber from "../../assets/images/rideSharing_uber.png";
import { ReactComponent as LogoBG } from "../../assets/LogoBG.svg";
import { ReactComponent as BenefitsPrice } from "../../assets/icons/BenefitsPrice.svg";
import { ReactComponent as BenefitsEV } from "../../assets/icons/BenefitsEV.svg";
import { ReactComponent as BenefitsCustomerService } from "../../assets/icons/BenefitsCustomerService.svg";
import { ReactComponent as BenefitsAdminFees } from "../../assets/icons/BenefitsAdminFees.svg";
import { ReactComponent as Conditions } from "../../assets/icons/Conditions.svg";
import { ReactComponent as Documents } from "../../assets/icons/Documents.svg";
import { ReactComponent as Whatsapp } from "../../assets/socials/whatsapp.svg";

//  ---Components---
import {
  TitleSection,
  VehicleCard,
  BlogCard,
  TestimonialCard,
  FAQCard,
} from "../../components";

//  ---Static Data---
import { CarData } from "../../components/VehicleCard/data";
import { BlogData } from "../../components/BlogCard/data";
import { TestimonialData } from "../../components/TestimonialCard/data";
import { FAQData } from "../../components/FAQCard/data";

export function Home() {
  const benefitsRef = useRef(null);
  const [SortMode, setSortMode] = useState("fuel");
  return (
    <div className="Home">
      <div className="hero notBanner">
        <div className="heroTextArea">
          <div className="heroText">
            <span>Your success is our priority, let’s thrive together!</span>
            <h1>Join CZAR PCO Car Hire family today!</h1>
            <span>We offer flexible and affordable PCO car rental plans.</span>
          </div>
          <img
            src={trustpilotMini}
            className="trustpilotMini"
            alt="Trustpilot rating: 4.8 out of 5 stars"
          />
          <button
            className="secondaryBtn scrollDown"
            onClick={() =>
              benefitsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }
          >
            <span>Discover more about us</span>
            <LogoBG />
          </button>
        </div>
        <img
          src={HomepageBanner}
          className="homepageBannerImg"
          alt="Happy Czar PCO customer"
        />
      </div>
      <section className="trustedBy ">
        <span>We are trusted by:</span>
        <div className="rideSharingCompanies">
          <img src={rideSharing_uber} alt="Ride Sharing: Uber" />
          <img src={rideSharing_bolt} alt="Ride Sharing: Bolt" />
          <img src={rideSharing_ola} alt="Ride Sharing: Ola" />
          <img src={rideSharing_freenow} alt="Ride Sharing: Freenow" />
        </div>
        <div className="BLL">
          <LogoBG />
        </div>
      </section>
      <div className="ourBenefits notBanner" ref={benefitsRef}>
        <TitleSection
          title={"Our benefits"}
          description={"What makes us different from other taxi hire companies"}
        />
        <div className="ourBenefitsRow">
          <div className="benefit">
            <BenefitsPrice />
            <div className="benefitText">
              <span className="benefitTitle">Reasonable prices</span>
              <span className="benefitDescription">
                To help our customers, we offer our vehicles with excellent
                competitive market price.
              </span>
            </div>
          </div>
          <div className="benefit">
            <BenefitsEV />
            <div className="benefitText">
              <span className="benefitTitle">
                Full-Electric fleet, available for rent
              </span>
              <span className="benefitDescription">
                CZAR PCO is among very few companies which rent brand new PCO
                electric cars in London.
              </span>
            </div>
          </div>
        </div>
        <div className="ourBenefitsRow">
          <div className="benefit">
            <BenefitsCustomerService />
            <div className="benefitText">
              <span className="benefitTitle">Great customer services</span>
              <span className="benefitDescription">
                What really distinguishes us from other companies is our high
                quality customer service. Your satisfaction is our main
                priority.
              </span>
            </div>
          </div>
          <div className="benefit">
            <BenefitsAdminFees />
            <div className="benefitText">
              <span className="benefitTitle">No admin fees</span>
              <span className="benefitDescription">
                We do not charge our customers for admin fees. Whenever you need
                our service, we will provide it free of charge.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="requirements notBanner">
        <TitleSection
          title={"What do we need form you?"}
          description={
            "In order to enhance customer service quality, we have reduced our requirements to give our customer an excellent experience. We only need the following documents from you:"
          }
        />
        <div className="requirementsRow">
          <div className="requirementCard">
            <LogoBG className="texture" />
            <Documents />
            <div className="requirementCardText">
              <span className="requirementCardTitle">Documents</span>
              <p>Photo of your Driving license ( Front and back )</p>
              <p>Photo of your PCO license</p>
              <p>National insurance number</p>
            </div>
          </div>
          <div className="requirementCard">
            <LogoBG className="texture" />
            <Conditions />
            <div className="requirementCardText">
              <span className="requirementCardTitle">Conditions</span>
              <p>You must have less than 6 points on your driving licence</p>
              <p>Your PCO licence should not be less than 6 months old</p>
              <p>
                You should not have more than 2 faulty accidents in the last 3
                years
              </p>
            </div>
          </div>
        </div>
        <div className="fullWidthCTA">
          <h3>Send your documents to reserve a car now</h3>
          <a
            className="secondaryBtn whatsapp"
            href="https://wa.me/+4407701727142"
          >
            <Whatsapp />
            Send us your documents
          </a>
        </div>
      </div>
      <div className="fleet notBanner">
        <TitleSection
          title={"Our fleet"}
          description={
            "Choose a car from our broad range of vehicles which suits you the most. Contact us anytime for more information."
          }
        />
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
          {CarData.sort(
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
          <a className="secondaryBtn Link" href="/EV">
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
      <div className="testimonials notBanner">
        <TitleSection title={"What our customers say about us"} />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoPlay={{ delay: 500, pauseOnMouseEnter: true }}
          style={{ width: "100%" }}
        >
          {TestimonialData.map((testimonial) => (
            <SwiperSlide>
              <TestimonialCard
                img={testimonial.img}
                title={testimonial.title}
                fullName={testimonial.fullName}
                commentL1={testimonial.commentL1}
                commentL2={testimonial.commentL2}
                commentL3={testimonial.commentL3}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="faq notBanner ">
        <TitleSection title={"Frequently asked questions"} />
        <div className="faqList">
          {FAQData.HomepageFAQ.map((faq) => (
            <FAQCard question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="fullWidthCTA">
          <h3>Still got questions?</h3>
          <a className="secondaryBtn scrollDown" href="/FAQ">
            Visit our FAQ page
            <LogoBG />
          </a>
        </div>
      </div>
      <div className="blog">
        <TitleSection title={"Our latest blog posts"} />
        <div className="blogItems">
          {BlogData.slice(2, 5).map((blog) => (
            <BlogCard
              date={blog.date}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              link={blog.link}
            />
          ))}
        </div>
        <div className="fullWidthCTA">
          <a className="secondaryBtn scrollDown" href="/blog">
            Visit our Blog page
            <LogoBG />
          </a>
        </div>
      </div>
    </div>
  );
}
