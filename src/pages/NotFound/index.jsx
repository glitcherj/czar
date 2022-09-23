import { Link } from "react-router-dom";

// ---Assets---
import { ReactComponent as NotFoundPic } from "../../assets/images/NotFound.svg";

export function NotFound() {
  return (
    <div className="notFound  notBanner">
      <NotFoundPic />
      <sub>
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/404-error-background-with-car-wheel-flat-style_2044540.htm#page=2&query=404&position=5&from_view=search">
          Freepik
        </a>
      </sub>
      <h1>Page not found.</h1>
      <span>
        Sorry. We could not find what you were looking for.
        <br />
        Or the the page does not exist.
      </span>
      <Link className="secondaryBtn scrollDown" to="/">
        Return to home page
      </Link>
    </div>
  );
}
