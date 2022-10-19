import { Link } from "react-router-dom";

export function BlogArticleSlideshow({ img, date, title, description, link }) {
  return (
    <Link to={"/czar" + link} className="testimonialCard blogCard normalize">
      <div className="imgWrapper">
        <img src={img} alt={title} />
      </div>
      <div className="blogCardContent">
        <time>{date}</time>
        <strong className="blogCardContent__Title">{title}</strong>
        <span className="blogCardContent__Description">{description}</span>
        <span className="blogCardContent__ReadMore">
          Read this article {">"}
        </span>
      </div>
    </Link>
  );
}
