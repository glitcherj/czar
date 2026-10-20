import { useId, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

export function FAQCard({ question, answer, accordion = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  return (
    <article className={`faqItem${accordion ? " faqItem--accordion" : ""}`}>
      {accordion && (
        <button
          className="faqItem__Trigger"
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{question}</span>
          <Arrow aria-hidden="true" />
        </button>
      )}
      {!accordion && <Arrow aria-hidden="true" />}
      <div className="faqItem__Content">
        {!accordion && <h5>{question}</h5>}
        <div
          className="faqItem__Answer"
          id={accordion ? answerId : undefined}
          hidden={accordion && !isOpen}
        >
          {answer}
        </div>
      </div>
    </article>
  );
}
