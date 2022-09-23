// ---Assets---
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Whatsapp } from "../../assets/socials/whatsapp.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

// ---Static Data---
import { HeaderData } from "../../Static/HeaderTitles";

export function Header() {
  const path = window.location.pathname;
  const headerTitle = " | Czar PCO";

  return (
    <header
      className={
        window.location.pathname !== "/blog"
          ? "headerWhite"
          : "headerTransparent"
      }
    >
      <head>
        <title>
          {HeaderData[path]
            ? HeaderData[path][0].title + headerTitle
            : "404 | Page not found"}
        </title>
        <meta
          name="description"
          content={HeaderData[path] ? HeaderData[path][1].description : null}
        />
      </head>
      <a href="/" className="appLogo">
        <Logo />
      </a>
      <div className="menu">
        <a className="menuItems" href="/" id={path === "/" ? "active" : ""}>
          Home
        </a>
        <a
          className="menuItems"
          href="/fleet"
          id={path === "/fleet" ? "active" : ""}
        >
          Fleet
        </a>
        <a
          className="menuItems"
          href="/ev-fleet"
          id={path === "/ev-fleet" ? "active" : ""}
        >
          EV Fleet
        </a>
        <a
          className="menuItems"
          href="/blog"
          id={path === "/blog" ? "active" : ""}
        >
          Blog & news
        </a>
        <a
          className="menuItems"
          href="/faq"
          id={path === "/faq" ? "active" : ""}
        >
          FAQ
        </a>
        {/* <a className="menuItems" href="/about-us">
          About us
        </a> */}
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
