import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <div className="bg">
        <div className="bgContent">
          <section className="bgContent__Heading">
            <h1>CZAR PCO blog & news</h1>
            <span>Stay updated with the latest PCO articles and news</span>
          </section>
          <form
            onSubmit={(e) => {
              navigate(`/blog?${document.getElementById("input").value}`);
            }}
          >
            <input
              type={"text"}
              placeholder="Search among our articles"
              id="input"
            />
            <button
              type="button"
              onClick={(e) => {
                navigate(`/blog?${document.getElementById("input").value}`);
              }}
            >
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
            <SwiperSlide>
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
          title={"Latest blog articles"}
          description={"Stay at the top of the PCO news."}
        />
        <div className="blogItems">
          {BlogData.slice(4).map((blogArticle) => (
            <BlogCard
              img={blogArticle.img}
              date={blogArticle.date}
              title={blogArticle.title}
              description={blogArticle.description}
              link={blogArticle.link}
              tags={blogArticle.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
