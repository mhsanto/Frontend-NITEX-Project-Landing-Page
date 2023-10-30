import { useState, useEffect, useMemo, useCallback } from "react";
import team from "../assets/team.json";
import langauge from "../assets/language.json";
import Lottie from "lottie-react";

import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

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
  const delay = 7000; // 7 seconds
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
        <button onClick={prevSlide} className="absolute top-52 left-5">
          <BiLeftArrow size={25} />
        </button>
        <button onClick={nextSlide} className="absolute top-52 right-5">
          <BiRightArrow size={25} />
        </button>
      </div>
      <div className="flex items-center px-20 justify-between">
        <div className="flex flex-col gap-7 w-1/2">
          <p className="text-6xl pb-6 uppercase font-semibold">
            {contentData[currentIndex].title}
          </p>
          <div className="flex gap-7 items-center">
            <Link
              to={contentData[currentIndex].link1.to}
              className="underline underline-offset-4 text-lg"
            >
              {contentData[currentIndex].link1.text}
            </Link>
            <Link
              to={contentData[currentIndex].link2.to}
              className="bg-white text-black px-4 py-2 rounded-sm font-medium hover:bg-slate-100 text-lg"
            >
              {contentData[currentIndex].link2.text}
            </Link>
          </div>
        </div>

        <Lottie
          animationData={images[currentIndex]}
          className="h-[30rem] w-1/2"
        />
      </div>
    </div>
  );
}

export default Slider;
