export function MiniTestimonialCard({ title, name, comment }) {
  return (
    <div className="MiniTestimonialCard">
      <div className="titleSection">
        <strong>{title}</strong>
        <sub>{name}</sub>
      </div>
      <hr />
      <span>{comment}</span>
    </div>
  );
}
