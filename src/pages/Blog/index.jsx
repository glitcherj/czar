import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//  ---Assets---
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import ScrollDown from "../../assets/scrollDown.gif";

//  ---Swiperjs---
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

//  ---Static Data---
import { BlogData } from "../../Static/BlogCardData";

import { TitleSection, BlogCard, BlogArticleSlideshow } from "../../components";

export function Blog() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchInput = useRef(null);
  const searchValue = searchParams.get("search")?.trim() || "";
  const searchTerm = searchValue.toLocaleLowerCase();
  const articlesToShow = (searchTerm ? BlogData : BlogData.slice(4)).filter((article) => {
    if (!searchTerm) return true;
    return [article.title, article.description, ...(article.tags || [])]
      .join(" ")
      .toLocaleLowerCase()
      .includes(searchTerm);
  });
  return (
    <>
      <head>
        <title>Blog & News | Czar PCO</title>
        <meta
          name="description"
          content="Discover the latest PCO news and PCO articles"
        />
      </head>
      <div>
        <div className="bg">
          <div className="bgContent">
            <section className="bgContent__Heading">
              <h1>CZAR PCO blog & news</h1>
              <span>Stay updated with the latest PCO articles and news</span>
            </section>
            <form
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
                const value = searchInput.current.value.trim();
                navigate(`/czar/blog${value ? `?search=${encodeURIComponent(value)}` : ""}`);
              }}
            >
              <input
                type="search"
                placeholder="Search among our articles"
                id="blog-search"
                defaultValue={searchValue}
                ref={searchInput}
                aria-label="Search blog articles"
              />
              <button type="submit" aria-label="Search articles">
                <Search />
              </button>
            </form>
            <span className="scrollDown">
              Scroll down to see more
              <img src={ScrollDown} alt="" id="Contact" />{" "}
            </span>
          </div>
        </div>
        <div className="blog">
          <TitleSection
            title={"Most popular articles"}
            description={
              "Some of our most important articles we don't want you to miss."
            }
          />
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
          >
            {BlogData.slice(1, 4).map((testimonial) => (
              <SwiperSlide key={testimonial.link}>
                <BlogArticleSlideshow
                  img={testimonial.img}
                  date={testimonial.date}
                  title={testimonial.title}
                  description={testimonial.description}
                  link={testimonial.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="blogPosts notBanner">
          <TitleSection
            title={searchTerm ? `Search results for “${searchValue}”` : "Latest blog articles"}
            description={"Stay at the top of the PCO news."}
          />
          <div className="blogItems">
            {articlesToShow.map((blogArticle) => (
              <BlogCard
                key={blogArticle.link}
                img={blogArticle.img}
                date={blogArticle.date}
                title={blogArticle.title}
                description={blogArticle.description}
                link={blogArticle.link}
                tags={blogArticle.tags}
              />
            ))}
            {articlesToShow.length === 0 && <p>No articles match that search.</p>}
          </div>
        </div>
      </div>
    </>
  );
}
