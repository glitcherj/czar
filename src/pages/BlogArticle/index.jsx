import { Link, useParams } from "react-router-dom";
import { BlogData } from "../../Static/BlogCardData";

export function BlogArticle() {
  const { slug } = useParams();
  const article = BlogData.find((post) => post.link.endsWith(`/${slug}`));

  if (!article) {
    return (
      <main className="blogArticle notBanner">
        <h1>Article not found</h1>
        <p>This article is unavailable.</p>
        <Link className="primaryBtn" to="/czar/blog">Back to the blog</Link>
      </main>
    );
  }

  return (
    <main className="blogArticle notBanner">
      <Link className="blogArticle__back" to="/czar/blog">← Back to all articles</Link>
      <article>
        <img src={article.img} alt="" />
        <time>{article.date}</time>
        <h1>{article.title}</h1>
        <p className="blogArticle__intro">{article.description}</p>
        {article.content && <div className="blogArticle__body">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>}
      </article>
    </main>
  );
}
