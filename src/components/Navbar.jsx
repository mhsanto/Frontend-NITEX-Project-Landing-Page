import { useState } from "react";
import { Link } from "react-router-dom";
import useWidth from "../hooks/useWidth";
const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },

  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];
const loginRegisterLinks = [
  {
    title: "Register",
    href: "/register",
  },
  {
    title: "Login",
    href: "/login",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isWidth = useWidth(1000);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const text = ["N", "I", "T", "E", "X"];
  return (
    <nav className="bg-white text-black">
      <header className=" flex  justify-between max-w-7xl mx-auto items-center h-16 px-4 ">
        <Link to="/" className="flex gap-3">
          {text.map((letter) => (
            <span
              key={letter}
              className="text-2xl font-medium whitespace-nowrap"
            >
              {letter}
            </span>
          ))}
        </Link>

        {/* Menu Icon */}
        <ul className="md:flex gap-5 hidden">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                to={link.href}
                className="text-base uppercase cursor-pointer transition-all 
                  font-medium duration-300 hover:underline whitespace-nowrap "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="md:flex gap-5 items-center hidden">
          {loginRegisterLinks.map((link) => (
            <li key={link.title}>
              {link.title === "Login" ? (
                <Link
                  to={link.href}
                  className=" uppercase bg-black text-white font-medium 
                    px-7 py-2 rounded-full 
                    hover:bg-white hover:text-black outline
                    cursor-pointer transition-all duration-300 whitespace-nowrap "
                >
                  {link.title}
                </Link>
              ) : (
                <Link
                  to={link.href}
                  className="text-base uppercase cursor-pointer transition-all 
               font-medium duration-300 underline"
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {isWidth ? (
          <div
            id="nav-icon1"
            className={`nav-icon ${isOpen ? "open" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : null}
        {/* Logo */}
      </header>
    </nav>
  );
};

export default Navbar;
