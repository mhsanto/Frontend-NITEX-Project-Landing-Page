import { useState, useEffect, useCallback } from "react";
import team from "../assets/team.json";
import langauge from "../assets/language.json";
import Lottie from "lottie-react";

import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const contentData = [
  {
    title: "We take your ideas and make it happen",
    link1: { text: "Connect With Us", to: "/login" },
    link2: { text: "See Our Pricing", to: "/pricing" },
  },
  {
    title: "Language is not a barrier for us",
    link1: { text: "See Our Solution", to: "/solution" },
    link2: { text: "About Us", to: "/about" },
  },
];
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [team, langauge];
  const imageCount = images.length;
  const delay = 8000; // 8 seconds
  const isAutoPlay = true;

  const nextSlide = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % imageCount);
  }, [currentIndex, imageCount]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageCount) % imageCount);
  };

  useEffect(() => {
    let interval;

    if (isAutoPlay) {
      interval = setInterval(nextSlide, delay);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isAutoPlay, nextSlide]);

  return (
    <div className="slider-container relative">
      <div className="slider-controls">
        <button onClick={prevSlide} className="absolute top-52 left-5 z-10">
          <BiLeftArrow size={25} />
        </button>
        <button onClick={nextSlide} className="absolute top-52 right-5 z-10">
          <BiRightArrow size={25} />
        </button>
      </div>
      <motion.div  initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: currentIndex % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }}  className="flex flex-col sm:flex-row  items-center px-2 sm:px-12 md:px-14  lg:px-20 justify-between pb-9 sm:pb-0">
        <motion.div className="flex flex-col order-2 sm:order-none gap-5 md:gap-7 sm:w-1/2">
          <p className="text-4xl  md:text-5xl lg:text-6xl md:pb-6 pb-2 uppercase font-semibold text-center sm:text-start">
            {contentData[currentIndex].title}
          </p>
          <motion.div className="flex  gap-7 items-center justify-center sm:justify-normal">
            <Link
              to={contentData[currentIndex].link1.to}
              className="underline underline-offset-4 md:text-lg whitespace-nowrap text-sm"
            >
              {contentData[currentIndex].link1.text}
            </Link>
            <Link
              to={contentData[currentIndex].link2.to}
              className="bg-white text-black px-4 py-2 rounded-sm font-medium hover:bg-slate-100 md:text-lg whitespace-nowrap  text-sm"
            >
              {contentData[currentIndex].link2.text}
            </Link>
          </motion.div>
        </motion.div>

        <Lottie
          animationData={images[currentIndex]}
          className="sm:h-[30rem] sm:w-1/2"
        />
      </motion.div>
    </div>
  );
}

export default Slider;
