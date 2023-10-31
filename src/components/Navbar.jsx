import { useState } from "react";
import { Link } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { motion } from "framer-motion";
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
    title: "Tesitmonials",
    href: "/testimonial",
  },

  {
    title: "Services",
    href: "/services",
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
    title: "Contact Us",
    href: "/contact",
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
    if (!isWidth) {
      setIsOpen(false);
    }
    setIsOpen(!isOpen);
  };

  const text = ["N", "I", "T", "E", "X"];
  return (
    <nav className="bg-white text-black">
      <header className=" flex  justify-between max-w-7xl mx-auto items-center py-4  px-4 relative z-[100]">
        <Link to="/" className="flex gap-1 sm:gap-3">
          {text.map((letter,i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 2,
              }}
              key={letter}
              className="text-2xl font-medium whitespace-nowrap"
            >
              {letter}
            </motion.span>
          ))}
        </Link>

        {/* Menu Icon */}
        {!isWidth ? (
          <ul className="flex gap-5  text-black   right-0 bg-white top-[100%] ">
            {links.map((link) => (
              <motion.li key={link.title} whileTap={{ scale: 0.85 }}>
                <Link
                  to={link.href}
                  className="text-base uppercase cursor-pointer transition-all 
                  font-medium duration-300 hover:underline whitespace-nowrap "
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        ) : (
          isOpen && (
            <ul className="flex gap-5 flex-col text-black  absolute  right-0 bg-white top-[100%] z-30">
              {links.map((link) => (
                <motion.li
                  whileTap={{ scale: 0.85 }}
                  key={link.title}
                  className="py-2
            border-b hover:bg-zinc-900/80 hover:text-white  px-9"
                >
                  <Link
                    to={link.href}
                    className="text-base uppercase cursor-pointer transition-all 
                  font-medium duration-300 hover:underline whitespace-nowrap "
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          )
        )}

        <ul className="flex sm:gap-5 items-center">
          {loginRegisterLinks.map((link) => (
            <li key={link.title}>
              {link.title === "Login" ? (
                <Link to={link.href}>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className=" uppercase bg-black outline-none text-white font-medium 
                    px-6 sm:px-7  py-2 rounded-full 
                    hover:bg-white hover:text-black hover:outline-black
                    cursor-pointer transition-all duration-300 whitespace-nowrap "
                  >
                    {" "}
                    {link.title}
                  </motion.button>
                </Link>
              ) : (
                <Link
                  to={link.href}
                  className="text-base uppercase cursor-pointer transition-all 
               font-medium duration-300 underline hidden sm:block"
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* show or not show hamburger menu */}
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
