import { Link } from "react-router-dom";
export function BlogCard({ img, date, title, description, link, tags }) {
  return (
    <Link className="blogCard" to={"/czar" + link}>
      <div className="imgWrapper">
        <img src={img} alt={title} />
      </div>
      <div className="blogCardContent">
        <time>{date}</time>
        <strong className="blogCardContent__Title">{title}</strong>
        <span className="blogCardContent__Description">{description}</span>
        <div className="blogCardContent__Tags">
          {tags?.map((tag) => (
            <span href={tag} className="blogCardContent__Tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="blogCardContent__ReadMore">
          Read this article {">"}
        </span>
      </div>
    </Link>
  );
}
