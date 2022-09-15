import { useNavigate } from "react-router-dom";
import { useState } from "react";

//  ---Assets---
import { ReactComponent as Search } from "../../assets/icons/search.svg";

// ---Components---
import { FAQCard, TitleSection } from "../../components";

// ---Static Data---
import { FAQData } from "../../Static/FAQ";

export function FAQ() {
  const navigate = useNavigate();
  const [SortMode, setSortMode] = useState("All");
  delete FAQData.HomepageFAQ;

  const [query, setQuery] = useState("");
  const onSearch = (value) => console.log(value);
  const [state, setState] = useState(FAQData);
  const handleBtn = (e) => {
    const word = e.target.textContent;

    if (word === "All") setState(FAQData);
    else
      setState(
        Object.keys(FAQData)
          .filter((key) => key.includes(e.target.textContent))
          .reduce((cur, key) => {
            return Object.assign(cur, { [key]: FAQData[key] });
          }, {})
      );
  };

  return (
    <div className="faqPage">
      <div className="notBanner fleet">
        <h1>Frequently asked questions</h1>
        <span style={{ alignSelf: "center" }}>How can we help you?</span>
        <form
          onSubmit={(e) => {
            navigate(`/faq?${document.getElementById("input").value}`);
          }}
        >
          <input
            type={"text"}
            placeholder="Ask your question here..."
            id="input"
          />
          <button
            type="button"
            onClick={(e) => {
              navigate(`/faq?${document.getElementById("input").value}`);
            }}
          >
            <Search />
          </button>
        </form>

        <div className="sortMode">
          <span className="sortMode__title">Filter by topic:</span>
          <div className="sortMode__items">
            <button
              className={SortMode === "All" ? "primaryBtn" : "ghostBtn"}
              onClick={handleBtn}
            >
              All
            </button>
            <button
              className={
                SortMode === "Registration" ? "primaryBtn" : "ghostBtn"
              }
              onClick={handleBtn}
            >
              Registration
            </button>
            <button
              className={
                SortMode === "Rental_terms" ? "primaryBtn" : "ghostBtn"
              }
              onClick={handleBtn}
            >
              Rental terms
            </button>
            <button
              className={SortMode === "Vehicles" ? "primaryBtn" : "ghostBtn"}
              onClick={handleBtn}
            >
              Vehicles
            </button>
            <button
              className={SortMode === "Payments" ? "primaryBtn" : "ghostBtn"}
              onClick={handleBtn}
            >
              Payments
            </button>
            <button
              className={
                SortMode === "Working_With_Uber" ? "primaryBtn" : "ghostBtn"
              }
              onClick={handleBtn}
            >
              Working with Uber
            </button>
          </div>
        </div>
      </div>
      <div className="faqItems notBanner faq">
        {Object.entries(state).map((item) => (
          <div>
            <TitleSection title={item[0]} />
            <div className="faqList">
              {item[1].map((faqItem) => (
                <FAQCard question={faqItem.question} answer={faqItem.answer} />
              ))}
            </div>
          </div>
        ))}

        {/* {Object.entries(FAQData).map((item) => (
          <div>
            <TitleSection title={item[0]} />
            <div className="faqList">
              {item[1].map((faqItem) => (
                <FAQCard question={faqItem.question} answer={faqItem.answer} />
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
