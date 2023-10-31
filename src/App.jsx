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
const testimonials = [
  {
    id: 1,
    name: "Lance Reis",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1656019674844-3040aba0350b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxiZ1VPcVk3YUtZY3x8ZW58MHx8fHx8",
    comment: `My experience working with your team to design my website has been exceptional. From the outset, you demonstrated a keen understanding of my vision, and your creativity, technical expertise, and attention to detail resulted in a visually stunning and user-friendly website that has significantly improved my online presence. Your transparent and effective communication throughout the project made me feel involved and confident in the process, and the final product exceeded my expectations in terms of design and performance. I would highly recommend your services to anyone in need of web design – thank you for turning my online vision into a reality.`,
  },
  {
    id: 2,
    name: "Jalen Terry",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1610928212533-f927e1e8c905?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      " recently had the privilege of working with this remarkable team to create my website, and the experience was absolutely outstanding. From the moment we started, it was evident that they had a deep understanding of what I envisioned, and their creativity, technical prowess, and meticulous attention to detail brought my website to life in a way that surpassed my expectations. The clear and effective communication throughout the project ensured that I was involved and confident at every step. The final result is a visually captivating, user-friendly website that has significantly enhanced my online presence. I wholeheartedly recommend their web design services to anyone looking to bring their online dreams to reality. Many thanks for making my vision a digital masterpiece.",
  },
  {
    id: 3,
    name: "Prince Akachi",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      "I'm Prince Akachi, and I recently had the pleasure of working with your team to design my logo, and I must say it's a spectacular work of art. Your design team demonstrated an impressive understanding of my vision and branding needs, and their creativity, attention to detail, and technical skills are truly commendable. The final logo embodies the regal and unique image I was aiming for, and it has become a symbol of my identity. I'm immensely satisfied with the results, and I'm grateful for the professionalism and transparent communication that marked our collaboration. I highly recommend your logo design services to anyone in search of a distinctive and memorable brand identity. Thank you for giving my image a royal touch!",
  },
];
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
