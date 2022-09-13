// ---Assets---
import { ReactComponent as LogoBW } from "../../assets/logoBW.svg";
import { ReactComponent as LogoBG } from "../../assets/LogoBG.svg";
import { ReactComponent as Facebook } from "../../assets/socials/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/socials/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/socials/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/socials/youtube.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

export function Footer() {
  return (
    <footer>
      <section
        className="backTop"
        onClick={() => {
          window.scrollTo({ top: "0", behavior: "smooth" });
        }}
      >
        <Arrow />
        Back to top
      </section>
      <section className="footerContainer">
        <div className="aboutCompany">
          <a href="/">
            <LogoBW />
          </a>
          <span>
            CZAR PCO Ltd. is a leading London taxi hire firm established in
            2006, and since then they have helped various taxi drivers get on
            the road.
          </span>
        </div>
        <div className="footerColumns">
          <span className="footerColumnTitle">
            <strong>Sitemap</strong>
          </span>
          <div className="footerColumnsContent">
            <a href="/">Home</a>
            <a href="/fleet">Fleet</a>
            <a href="/ev-fleet">EV Fleet</a>
            <a href="/blog">Blog & news</a>
            <a href="/about-us">About us</a>
          </div>
        </div>
        <div className="footerColumns">
          <span className="footerColumnTitle">
            <strong>Support</strong>
          </span>
          <div className="footerColumnsContent">
            <a href="/faq">FAQ</a>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
        <div className="footerColumns">
          <span className="footerColumnTitle">
            <strong>Company</strong>
          </span>
          <div className="footerColumnsContent">
            <div className="footerColumnsContentRow">
              <span className="footerColumnsContentTitle">Address:</span>
              <span className="footerColumnsContentDescription">
                98 Abingdon Road, BRANSTONE, London, PO36 6DN
              </span>
            </div>
            <div className="footerColumnsContentRow">
              <span className="footerColumnsContentTitle">Phone:</span>
              <a
                className="footerColumnsContentDescription"
                href="tel:07701727142"
              >
                077-0172-7142
              </a>
            </div>
            <div className="footerColumnsContentRow">
              <span className="footerColumnsContentTitle">Email:</span>
              <a
                className="footerColumnsContentDescription"
                href="mailto:info@czarpco.co.uk"
              >
                info@czarpco.co.uk
              </a>
            </div>
            <div className="footerColumnsContentRow">
              <span className="footerColumnsContentTitle">Opening hours:</span>
              <span className="footerColumnsContentDescription">
                Monday to Friday - From 9:00 to 17:00
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="footerBottom">
        <div className="footerBottomContent">
          <span>© 2022 CZAR PCO Ltd. All rights reserved.</span>
          <div className="socialLinks">
            <a href="https://twitter.com/czarpco/" target="blank">
              <Twitter />
            </a>
            <a href="https://facebook.com/czarpco/" target="blank">
              <Facebook />
            </a>
            <a href="https://instagram.com/czarpco/" target="blank">
              <Instagram />
            </a>
            <a href="https://youtube.com/czarpco/" target="blank">
              <Youtube />
            </a>
          </div>
        </div>
        <span className="copyright">
          Copyright @ 2022 | CZAR PCO is Authorized and Regulated by Financial
          Conduct Authority (FCA). FCA Reference Number: 245190
        </span>
      </section>
      <div className="TR">
        <LogoBG />
      </div>
      <div className="BL">
        <LogoBG />
      </div>
    </footer>
  );
}
