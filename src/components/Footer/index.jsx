import "../../Styles/components/_footer.scss";
import { ReactComponent as LogoBW } from "../../assets/logoBW.svg";
import { ReactComponent as LogoBG } from "../../assets/LogoBG.svg";
import { ReactComponent as Facebook } from "../../assets/socials/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/socials/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/socials/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/socials/youtube.svg";

export function Footer() {
  return (
    <footer>
      <section>
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
            <a href="/">Home page</a>
            <a href="/">Our fleet</a>
            <a href="/">EV fleet</a>
            <a href="/">Blog & news</a>
            <a href="/">About us</a>
          </div>
        </div>
        <div className="footerColumns">
          <span className="footerColumnTitle">
            <strong>Support</strong>
          </span>
          <div className="footerColumnsContent">
            <a href="/">FAQ</a>
            <a href="/">Privacy policy</a>
            <a href="/">Terms & Conditions</a>
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
                href="tel:02089009574"
              >
                077-0172-7142
              </a>
            </div>
            <div className="footerColumnsContentRow">
              <span className="footerColumnsContentTitle">Email:</span>
              <span
                className="footerColumnsContentDescription"
                href="mailto:info@czarpco.co.uk"
              >
                info@czarpco.co.uk
              </span>
            </div>
            <div className="footerColumnsContentRow">
              <span className="footerColumnsContentTitle">Opening hours:</span>
              <span className="footerColumnsContentDescription">
                Monday to Friday From 9:00 to 17:00
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="footerBottom">
        <div className="footerBottomContent">
          <span>© 2022 CZAR PCO Ltd. All rights reserved.</span>
          <div className="socialLinks">
            <a href="twitter.com/czarpco/">
              <Twitter />
            </a>
            <a href="facebook.com/czarpco/">
              <Facebook />
            </a>
            <a href="instagram.com/czarpco/">
              <Instagram />
            </a>
            <a href="youtube.com/czarpco/">
              <Youtube />
            </a>
          </div>
        </div>
        <span className="copyright">
          Copyright @ 2020 | CZAR PCO is Authorized and Regulated by Financial
          Conduct Authority (FCA). FCA Reference Number: 245190
        </span>
      </section>
      <div className="TL">
        <LogoBG />
      </div>
      <div className="BR">
        <LogoBG />
      </div>
    </footer>
  );
}
