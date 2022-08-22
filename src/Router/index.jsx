import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   Navigate,
  //   useNavigate,
} from "react-router-dom";

import { AboutUs, Blog, EVFleet, Fleet, FAQ, Home } from "../pages";
export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ev-fleet" element={<EVFleet />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </Router>
  );
}
