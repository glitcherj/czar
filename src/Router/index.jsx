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
  NotFound,
} from "../pages";
export function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="czar/" element={<Home />} />
        <Route path="czar/about-us" element={<AboutUs />} />
        <Route path="czar/blog" element={<Blog />} />
        <Route path="czar/ev-fleet" element={<EVFleet />} />
        <Route path="czar/fleet">
          <Route index="czar/fleet" element={<Fleet />} />
          <Route path=":id" element={<VehiclePage />} />
        </Route>
        <Route path="czar/FAQ" element={<FAQ />} />
        <Route path="czar/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="czar/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
