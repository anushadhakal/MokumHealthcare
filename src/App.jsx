import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutOverview from "./pages/About/AboutOverview";
import WhyUs from "./pages/About/WhyUs";
import IndustryOverview from "./pages/Industry/IndustryOverview";
import DisabilityCare from "./pages/Industry/DisabilityCare";
import AgedCare from "./pages/Industry/AgedCare";
import RecruitmentSolutions from "./pages/Industry/RecruitmentSolutions";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about">
            <Route path="overview" element={<AboutOverview />} />
            <Route path="why-us" element={<WhyUs />} />
          </Route>
          <Route path="/industry">
            <Route path="overview" element={<IndustryOverview />} />
            <Route path="disability-care" element={<DisabilityCare />} />
            <Route path="aged-care" element={<AgedCare />} />
            <Route path="recruitment-solutions" element={<RecruitmentSolutions />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;