import "../../Styles/components/_header.scss";
import logo from "../../assets/Logo.svg";
import whatsapp from "../../assets/whatsapp.svg";
import contact from "../../assets/contact.svg";

export function Header() {
  return (
    <header className="appHeader">
      <a href="/" className="appLogo">
        <img src={logo} alt="logo" />
      </a>
      <div className="links menu">
        <a href="/">Home</a>
        <a href="/fleet">Fleet</a>
        <a href="/blog">Blog & news</a>
        <a href="/faq">FAQ</a>
        <a href="/driver-guidelines">Driver guidelines</a>
        <a href="/about-us">About us</a>
      </div>
      <div className="links">
        <button className="secondaryBtn whatsapp">
          <img src={whatsapp} alt="Whatsapp logo" />
          <span>Message us</span>
        </button>
        <button className="primaryBtn">
          <img src={contact} alt="Phone logo" />
          <span>Contact us</span>
        </button>
      </div>
    </header>
  );
}
