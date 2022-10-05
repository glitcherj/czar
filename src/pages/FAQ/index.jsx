import { useState } from "react";
import { Link } from "react-router-dom";

//  ---Assets---
import { ReactComponent as Contact } from "../../assets/contact.svg";
import { ReactComponent as Whatsapp } from "../../assets/socials/whatsapp.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

// ---Components---
import { FAQCard, TitleSection } from "../../components";

// ---Static Data---
import { FAQData } from "../../Static/FAQ";

function omit(obj, ...props) {
  const result = { ...obj };
  props.forEach(function (prop) {
    delete result[prop];
  });
  return result;
}

export function FAQ() {
  const [filterState, setFilterState] = useState(omit(FAQData, "HomepageFAQ"));

  const handleBtn = (e) => {
    const word = e.target.textContent;

    if (word === "All") setFilterState(omit(FAQData, "HomepageFAQ"));
    else
      setFilterState(
        Object.keys(FAQData)
          .filter((key) => key.includes(e.target.textContent))
          .reduce((cur, key) => {
            return Object.assign(cur, { [key]: FAQData[key] });
          }, {})
      );
  };

  return (
    <>
      <head>
        <title>Frequently asked questions | Czar PCO</title>
        <meta
          name="description"
          content="Find the answer to the most asked questions here. Feel free to contact us for more help."
        />
      </head>
      <div className="faqPage Home notBanner">
        <div className="fleet">
          <h1>Frequently asked questions</h1>
          <span style={{ alignSelf: "center" }}>How can we help you?</span>
          <form
            onSubmit={(e) => {
              window.find(document.getElementById("input").value);
            }}
          >
            <input
              type="text"
              placeholder="Ask your question here..."
              id="input"
            />
            <button
              type="button"
              onClick={(e) => {
                window.find(document.getElementById("input").value);
              }}
            >
              <Search />
            </button>
          </form>

          <div className="sortMode">
            <span className="sortMode__title">Filter by topic:</span>
            <div className="sortMode__items">
              <button
                className={
                  Object.keys(filterState).length > 2
                    ? "primaryBtn"
                    : "ghostBtn"
                }
                onClick={handleBtn}
              >
                All
              </button>
              <button
                className={
                  Object.keys(filterState).length < 2 &&
                  Object.keys(filterState)[0] === "Registration"
                    ? "primaryBtn"
                    : "ghostBtn"
                }
                onClick={handleBtn}
              >
                Registration
              </button>
              <button
                className={
                  Object.keys(filterState)[0] === "Rental terms"
                    ? "primaryBtn"
                    : "ghostBtn"
                }
                onClick={handleBtn}
              >
                Rental terms
              </button>
              <button
                className={
                  Object.keys(filterState)[0] === "Vehicles"
                    ? "primaryBtn"
                    : "ghostBtn"
                }
                onClick={handleBtn}
              >
                Vehicles
              </button>
              <button
                className={
                  Object.keys(filterState)[0] === "Payments"
                    ? "primaryBtn"
                    : "ghostBtn"
                }
                onClick={handleBtn}
              >
                Payments
              </button>
              <button
                className={
                  Object.keys(filterState)[0] === "Working with Uber"
                    ? "primaryBtn"
                    : "ghostBtn"
                }
                onClick={handleBtn}
              >
                Working with Uber
              </button>
            </div>
          </div>
        </div>
        <div className="faqItems faq">
          {Object.entries(filterState).map((item) => (
            <div>
              <TitleSection title={item[0]} />
              <div className="faqList">
                {item[1].map((faqItem) => (
                  <FAQCard
                    question={faqItem.question}
                    answer={faqItem.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="fullWidthCTA ">
          <h4>Still got questions?</h4>
          <div className="faqPageCTA">
            <a
              className="secondaryBtn whatsapp"
              href="https://wa.me/+4407701727142"
            >
              <Whatsapp />
              Send us your questions
            </a>
            <a className="secondaryBtn btn" id="contact" href="tel:07701727142">
              <Contact />
              <span>Contact us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
