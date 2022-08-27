// ---Assets---
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
      <div className="menu">
        <a className="menuItems" href="/">
          Home
        </a>
        <a className="menuItems" href="/fleet">
          Fleet
        </a>
        <a className="menuItems" href="/ev-fleet">
          EV Fleet
        </a>
        <a className="menuItems" href="/blog">
          Blog & news
        </a>
        <a className="menuItems" href="/faq">
          FAQ
        </a>
        <a className="menuItems" href="/about-us">
          About us
        </a>
      </div>
      <div className="links">
        <a
          className="secondaryBtn whatsapp btn"
          id="whatsapp"
          href="https://wa.me/+4407701727142"
        >
          <Whatsapp />
          <span>Message us</span>
        </a>
        <a
          className={
            window.location.pathname !== "/blog"
              ? "primaryBtn btn"
              : "secondaryBtn btn"
          }
          id="contact"
          href="tel:02089009574"
        >
          <Contact />
          <span>Contact us</span>
        </a>
      </div>
    </header>
  );
}
