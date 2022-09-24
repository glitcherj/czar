import { Link } from "react-router-dom";

export function BlogArticleSlideshow({ img, date, title, description, link }) {
  return (
    <Link to={link} className="testimonialCard normalize">
      <img src={img} alt={img} />
      <div className="testimonialCard__content">
        <sub>{date}</sub>
        <strong>{title}</strong>
        <div className="BlogArticleSlideshow__description">{description}</div>
        <span className="blogLink">Read more {">"}</span>
      </div>
    </Link>
  );
}
