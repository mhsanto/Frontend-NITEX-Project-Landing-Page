import { Link } from "react-router-dom";
import { menuHeader, navItems, otherLinks } from "./FooterData";
import ScrollToTopButton from "./ScrollToTop";
const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-10 sm:mt-10 select-none ">
      <div className="max-w-6xl mx-auto text-gray-800 flex flex-wrap justify-between ">
        {/* Col-1 */}
        <div className="py-5 w-1/2 sm:w-4/12 md:w-[27%] ">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6  ">
            {menuHeader.map((menu) => (
              <div key={menu.id} className="flex flex-col justify-center gap-2">
                <img
                  src={`/assets/${menu.logo}`}
                  className="mx-auto "
                  height={100}
                  width={100}
                  alt={menu.title}
                />
                <h3 className="text-center text-slate-200 text-sm">
                  {menu.title}
                </h3>
                <p className="text-center hover:text-gray-100 text-xs capitalize">
                  {menu.location}
                </p>
                <p className="text-center hover:text-gray-100 flex justify-center gap-1 items-center">
                  {menu.iconCall}
                  {menu.phone}
                </p>
                <p className="text-center hover:text-gray-100 flex justify-center gap-1 items-center lowercase">
                  {menu.iconMail}

                  {menu.email}
                </p>
                <Link
                  href="www.bist.edu.bd"
                  className="text-center hover:text-gray-100 flex justify-center gap-1 items-center lowercase"
                >
                  {menu.iconWeb}
                  {menu.website}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6 ">
            Quick Links
          </div>

          {/* Links */}
          {navItems.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.id}
              className="my-3 block text-gray-300 hover:text-gray-100 hover:underline underline-offset-2 text-sm font-medium duration-700"
            >
              {navItem.title}
            </Link>
          ))}
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Also Visit This Sites
          </div>
          {otherLinks.map((links) => (
            <Link
              href={links.href}
              key={links.id}
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline underline-offset-2"
              target="_blank"
            >
              {links.title}
            </Link>
          ))}
          {/* Links */}
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:max-w-max">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>
          {/* Links */}
          <Link
            href="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Facebook
          </Link>
          <Link
            href="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </Link>
          <Link
            href="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Linkedin
          </Link>
          <Link
            href="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </Link>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
      border-t border-gray-500 text-gray-400 text-sm 
      flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">
            © Copyright BIST {new Date().getFullYear()} . All Rights Reserved.
            Code By{" "}
            <Link
              href="https://www.linkedin.com/in/mh-santo/"
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
