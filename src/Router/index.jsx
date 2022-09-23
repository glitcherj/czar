import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "../components";

import {
  AboutUs,
  Blog,
  EVFleet,
  Fleet,
  VehiclePage,
  FAQ,
  Home,
  PrivacyPolicy,
  Terms,
} from "../pages";
export function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="ev-fleet" element={<EVFleet />} />
        <Route path="fleet">
          <Route index="fleet" element={<Fleet />} />
          <Route path=":id" element={<VehiclePage />} />
        </Route>
        <Route path="FAQ" element={<FAQ />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}
