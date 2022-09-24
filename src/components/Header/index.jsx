import { Link } from "react-router-dom";
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
      className="headerWhite"
      // className={
      //   window.location.pathname !== "/blog"
      //     ? "headerWhite"
      //     : "headerTransparent"
      // }
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
      <Link to="/czar/" className="appLogo">
        <Logo />
      </Link>
      <div className="menu">
        <Link to="/czar/" className="menuItems">
          Home
        </Link>
        <Link to="/czar/fleet" className="menuItems">
          Fleet
        </Link>
        <Link to="/czar/ev-fleet" className="menuItems">
          EV Fleet
        </Link>
        <Link to="/czar/blog" className="menuItems">
          Blog & news
        </Link>
        <Link to="/czar/faq" className="menuItems">
          FAQ
        </Link>
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
        <a className="primaryBtn btn" id="contact" href="tel:07701727142">
          <Contact />
          <span>Contact us</span>
        </a>
      </div>
    </header>
  );
}
