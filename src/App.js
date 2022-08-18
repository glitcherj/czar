import "./App.scss";
import HomepageBanner from "./assets/images/HomepageBanner.png";
import trustpilotMini from "./assets/images/trustpilotMini.png";
import rideSharing_bolt from "./assets/images/rideSharing_bolt.png";
import rideSharing_freenow from "./assets/images/rideSharing_freenow.png";
import rideSharing_ola from "./assets/images/rideSharing_ola.png";
import rideSharing_uber from "./assets/images/rideSharing_uber.png";
import { ReactComponent as LogoBG } from "./assets/LogoBG.svg";
import { ReactComponent as BenefitsPrice } from "./assets/icons/BenefitsPrice.svg";
import { ReactComponent as BenefitsEV } from "./assets/icons/BenefitsEV.svg";
import { ReactComponent as BenefitsCustomerService } from "./assets/icons/BenefitsCustomerService.svg";
import { ReactComponent as BenefitsAdminFees } from "./assets/icons/BenefitsAdminFees.svg";
import { ReactComponent as Conditions } from "./assets/icons/Conditions.svg";
import { ReactComponent as Documents } from "./assets/icons/Documents.svg";
import { ReactComponent as Whatsapp } from "./assets/socials/whatsapp.svg";
import { TitleSection, VehicleCard } from "./components";

function App() {
  return (
    <div className="App">
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
          <button className="secondaryBtn scrollDown">
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
      <section className="trustedBy notBanner">
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
      <div className="ourBenefits notBanner">
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
        <div className="requirementsCTA">
          <h3>Send your documents to reserve a car now</h3>
          <button className="secondaryBtn whatsapp">
            <Whatsapp />
            Send us your documents
          </button>
        </div>
      </div>
      <div className="fleet notBanner">
        <TitleSection
          title={"Our fleet"}
          description={
            "Your success is our main priority, we will help you achieve it. Choose a car from our broad range of vehicles which suits you the most. Contact us anytime for more information."
          }
        />
        <VehicleCard
          img={trustpilotMini}
          name={"CZAR PCO"}
          fuel={"Full-Electric"}
          seats={"5"}
          transmission={"Automatic"}
          year={"2021"}
          price={"400"}
        />
      </div>
    </div>
  );
}

export default App;
