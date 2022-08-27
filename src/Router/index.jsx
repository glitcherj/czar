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
