import { useRef } from "react";
import { Link } from "react-router-dom";

//  ---Swiperjs---
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

//  ---Assets---
import HomeHero from "../../assets/images/HomeHero.png";
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
import { VehicleData } from "../../Static/VehicleData";
import { BlogData } from "../../Static/BlogCardData";
import { TestimonialData } from "../../Static/HomepageTestimonials";
import { FAQData } from "../../Static/FAQ";

export function Home() {
  const benefitsRef = useRef(null);
  return (
    <>
      <head>
        <title>London PCO car hire | Czar PCO</title>
        <meta
          name="description"
          content="CZAR PCO Ltd. is a leading London taxi hire firm. We offer the latest models of the PCO-ready vehicles for the PCO drivers. Your success is our priority; Let's thrive it together."
        />
      </head>
      <div className="Home">
        <div className="hero notBanner">
          <div className="heroTextArea">
            <div className="heroText">
              <span>Your success is our priority, let’s thrive together!</span>
              <h1>Join CZAR PCO Car Hire family today!</h1>
              <span>
                We offer flexible and affordable PCO car rental plans.
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
                benefitsRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
            >
              <span id="Contact">Discover more about us</span>
              <LogoBG />
            </button>
          </div>
          <img
            src={HomeHero}
            className="homeHeroImg"
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
        </section>
        <div className="ourBenefits notBanner" ref={benefitsRef}>
          <TitleSection
            title={"Our benefits"}
            description={
              "What makes us different from other taxi hire companies"
            }
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
                  We do not charge our customers for admin fees. Whenever you
                  need our service, we will provide it free of charge.
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
            <h4>Send us your documents to reserve a car now</h4>
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
            title={"Our featured PCO vehicles"}
            // description={""}
          />
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={16}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
          >
            {VehicleData.filter((car) => car.fuel === "Full-Electric")
              .sort((a, b) => b.price - a.price)
              .map((car) => (
                <SwiperSlide>
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
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="fullWidthCTA">
            <h4>Visit our vast variety of PCO-ready vehicles.</h4>
            <Link className="primaryBtn scrollDown" to="/czar/fleet">
              Go to fleet page
              <LogoBG />
            </Link>
          </div>
        </div>
        <section className="evBanner">
          <div className="evBanner__text">
            <h2>Why should you join our EV fleet?</h2>
            <span>
              Join the thousands of Ride-Hailing drivers who have already
              switched to an Electric Vehicle with us. We are committed to
              providing the best Electric Vehicles for the Ride-Hailing market
              and supporting drivers every step of the way.
            </span>
            <Link className="secondaryBtn Link" to="/czar/ev-fleet">
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
        <div className="testimonials notBanner">
          <TitleSection title={"What our customers say about us"} />
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
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
          <TitleSection
            title={"Frequently asked questions"}
            description={"What do you got on your mind?"}
          />
          <div className="faqList">
            {FAQData.HomepageFAQ.map((faq) => (
              <FAQCard question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="fullWidthCTA">
            <h4>Still got questions?</h4>
            <Link className="secondaryBtn scrollDown" to="/czar/FAQ">
              Visit our FAQ page
              <LogoBG />
            </Link>
          </div>
        </div>
        <div className="blog">
          <TitleSection
            title={"Our latest blog posts"}
            description={"Stay at the top of the PCO news."}
          />
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
            <Link className="secondaryBtn scrollDown" to="/czar/blog">
              Visit our blog page
              <LogoBG />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
