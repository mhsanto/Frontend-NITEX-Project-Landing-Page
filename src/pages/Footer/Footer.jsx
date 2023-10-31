import { Link } from "react-router-dom";
import { menuHeader, navItems } from "./FooterData";
import ScrollToTopButton from "./ScrollToTop";
const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10 sm:mt-10 select-none ">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between ">
        {/* Col-1 */}
        <div className="py-5 w-1/2 sm:w-4/12 md:w-[27%] ">
          {/* Col Title */}
          <div className="text-xs uppercase black font-medium mb-6  ">
            {menuHeader.map((menu) => (
              <div
                key={menu.title}
                className="flex flex-col justify-center gap-2"
              >
                <span className="text-3xl text-center  border-[3px] font-serif rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  NX
                </span>
                <h3 className="text-center text-2xl ">{menu.title}</h3>
                <p className="text-center   capitalize text-base text-slate-700 hover:text-slate-500 tracking-tighter">
                  {menu.location}
                </p>
                <p className="text-center  flex justify-center gap-1 items-center text-base text-slate-700 hover:text-slate-500 tracking-tighter">
                  {menu.phone}
                </p>
                <p className="text-center  flex justify-center gap-1 items-center  capitalize text-base text-slate-700 hover:text-slate-500 tracking-tighter">
                  Position:{menu.position}
                </p>
                <Link
                  to="https://www.linkedin.com/in/mh-santo/"
                  target="_blank"
                  className="text-center flex justify-center gap-1 items-center
                  capitalize text-base text-slate-700 hover:text-slate-500 tracking-tighter hover:underline"
                >
                  {" "}
                  Name: {menu.candidate}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-sm uppercase black font-medium mb-6 ">
            Quick Links
          </div>

          {/* Links */}
          {navItems.map((navItem) => (
            <Link
              to={navItem.href}
              key={navItem.title}
              className="my-3 block  hover:underline underline-offset-2 text-sm font-medium duration-700"
            >
              {navItem.title}
            </Link>
          ))}
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:max-w-max">
          {/* Col Title */}
          <div className="text-xs uppercase black font-medium mb-6">
            Community
          </div>
          {/* Links */}
          <Link
            to="/"
            className="my-3 block  text-base font-medium duration-700"
          >
            Facebook
          </Link>
          <Link
            to="/"
            className="my-3 block  text-base font-medium duration-700"
          >
            Twitter
          </Link>
          <Link
            to="/"
            className="my-3 block  text-base font-medium duration-700"
          >
            Linkedin
          </Link>
          <Link
            to="/"
            className="my-3 block  text-base font-medium duration-700"
          >
            YouTube
          </Link>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
      border-t border-gray-500 black text-sm 
      flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">
            © Copyright BIST {new Date().getFullYear()} . All Rights Reserved.
            Code By{" "}
            <Link
              to="https://www.linkedin.com/in/mh-santo/"
              target="_blank"
              className="underline text-xs"
            >
              {" "}
              MAHMODUL HASAN SANTO
            </Link>
          </div>
          {/* Required Unicons (if you want) */}
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
