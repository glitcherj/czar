import "./App.scss";
import HomepageBanner from "./assets/images/HomepageBanner.png";
import trustpilotMini from "./assets/images/trustpilotMini.png";
import { ReactComponent as LogoBG } from "./assets/LogoBG.svg";

function App() {
  return (
    <div className="App">
      <div className="hero">
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
      <section className="trustedBy">
        <span>We are trusted by:</span>
        <div className="rideSharingCompanies">scss sss ff</div>
      </section>
    </div>
  );
}

export default App;
