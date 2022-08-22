import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Whatsapp } from "../../assets/socials/whatsapp.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

export function Header() {
  return (
    <header className="appHeader">
      <a href="/" className="appLogo">
        <Logo />
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
          <Whatsapp />
          <span>Message us</span>
        </button>
        <button className="primaryBtn">
          <Contact />
          <span>Contact us</span>
        </button>
      </div>
    </header>
  );
}
