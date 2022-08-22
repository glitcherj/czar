import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

export function FAQCard({ question, answer }) {
  return (
    <div className="faqItem">
      <Arrow />
      <div className="faqItem__Content">
        <h4>{question}</h4>
        <span className="faqItem__Answer">{answer}</span>
      </div>
    </div>
  );
}
