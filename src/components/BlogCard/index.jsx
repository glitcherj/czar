export function BlogCard({ img, date, title, description, link }) {
  return (
    <a className="blogCard" href={link}>
      <img src={img} alt={title} />
      <div className="blogCardContent">
        <time>{date}</time>
        <strong className="blogCardContent__Title">{title}</strong>
        <span className="blogCardContent__Description">{description}</span>
        <span className="blogCardContent__ReadMore">
          Read this article {">"}
        </span>
      </div>
    </a>
  );
}
