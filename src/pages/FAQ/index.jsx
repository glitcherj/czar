import { isValidElement, useMemo, useState } from "react";

//  ---Assets---
import { ReactComponent as Contact } from "../../assets/contact.svg";
import { ReactComponent as Whatsapp } from "../../assets/socials/whatsapp.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

// ---Components---
import { FAQCard, TitleSection } from "../../components";

// ---Static Data---
import { FAQData } from "../../Static/FAQ";

const topics = [
  "All",
  "Registration",
  "Rental terms",
  "Vehicles",
  "Payments",
  "Working with Uber",
];

function getAnswerText(answer) {
  if (typeof answer === "string" || typeof answer === "number") return `${answer}`;
  if (Array.isArray(answer)) return answer.map(getAnswerText).join(" ");
  if (isValidElement(answer)) return getAnswerText(answer.props.children);
  return "";
}

export function FAQ() {
  const [activeTopic, setActiveTopic] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const visibleFAQs = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLocaleLowerCase();
    return Object.entries(FAQData)
      .filter(([topic]) => topic !== "HomepageFAQ")
      .filter(([topic]) => activeTopic === "All" || topic === activeTopic)
      .map(([topic, entries]) => [
        topic,
        entries.filter(({ question, answer }) => {
          if (!normalizedTerm) return true;
          return `${question} ${getAnswerText(answer)}`
            .toLocaleLowerCase()
            .includes(normalizedTerm);
        }),
      ])
      .filter(([, entries]) => entries.length > 0);
  }, [activeTopic, searchTerm]);

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
          <form onSubmit={(event) => event.preventDefault()} role="search">
            <input
              type="search"
              placeholder="Ask your question here..."
              id="input"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search frequently asked questions"
            />
            <button type="submit" aria-label="Search questions">
              <Search />
            </button>
          </form>

          <div className="sortMode">
            <span className="sortMode__title">Filter by topic:</span>
            <div className="sortMode__items">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className={activeTopic === topic ? "primaryBtn" : "ghostBtn"}
                  aria-pressed={activeTopic === topic}
                  onClick={() => setActiveTopic(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="faqItems faq">
          {visibleFAQs.length > 0 ? (
            visibleFAQs.map(([topic, entries]) => (
              <div key={topic} data-reveal>
                <TitleSection title={topic} />
                <div className="faqList">
                  {entries.map((faqItem) => (
                    <FAQCard
                      key={faqItem.question}
                      question={faqItem.question}
                      answer={faqItem.answer}
                      accordion
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="faqEmptyState">
              No questions match that search. Try a different phrase or topic.
            </p>
          )}
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
