import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Whatsapp } from "../../assets/socials/whatsapp.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

export function Header() {
  return (
    <header
      className={
        window.location.pathname !== "/blog"
          ? "headerWhite"
          : "headerTransparent"
      }
    >
      <a href="/" className="appLogo">
        <Logo />
      </a>
      <div className="links menu">
        <a href="/">Home</a>
        <a href="/fleet">Fleet</a>
        <a href="/blog">Blog & news</a>
        <a href="/faq">FAQ</a>
        <a href="/about-us">About us</a>
      </div>
      <div className="links">
        <button className="secondaryBtn whatsapp" id="whatsapp">
          <Whatsapp />
          <span>Message us</span>
        </button>
        <button
          className={
            window.location.pathname !== "/blog" ? "primaryBtn" : "secondaryBtn"
          }
          id="contact"
        >
          <Contact />
          <span>Contact us</span>
        </button>
      </div>
    </header>
  );
}
