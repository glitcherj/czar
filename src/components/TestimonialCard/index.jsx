import "../../Styles/components/_testimonialCard.scss";

export function TestimonialCard({
  img,
  title,
  fullName,
  commentL1,
  commentL2,
  commentL3,
}) {
  return (
    <div className="testimonialCard">
      <img src={img} alt={img} />
      <div className="testimonialCard__content">
        <strong>{title}</strong>
        <sub>{fullName}</sub>
        <div className="testimonialCard__content__comment">
          <span>{commentL1}</span>
          <span>{commentL2}</span>
          <span>{commentL3}</span>
        </div>
      </div>
    </div>
  );
}
