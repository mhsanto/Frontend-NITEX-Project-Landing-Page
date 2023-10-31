import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer";
import "./App.css";	
import Services from "./pages/ServiceLists/Service";
import Pricing from "./pages/Pricing";
import Login from "./pages/LoginSystem/Login";
import Testimonial from "./pages/Tesitmonial";
import Solutions from "./pages/Solution";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
