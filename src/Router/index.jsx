import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AboutUs,
  Blog,
  EVFleet,
  Fleet,
  FAQ,
  Home,
  PrivacyPolicy,
  Terms,
} from "../pages";
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Routes>
        <Route path="/czar/" element={<Home />} />
        <Route path="/czar/about-us" element={<AboutUs />} />
        <Route path="/czar/blog" element={<Blog />} />
        <Route path="/czar/ev-fleet" element={<EVFleet />} />
        <Route path="/czar/fleet" element={<Fleet />} />
        <Route path="/czar/FAQ" element={<FAQ />} />
        <Route path="/czar/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/czar/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}
