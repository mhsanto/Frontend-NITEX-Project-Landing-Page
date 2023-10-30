import  { useState, useEffect } from 'react';
import {AiFillCaretUp} from "react-icons/ai"
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className=" fixed bottom-6 right-6 bg-slate-200 border-none rounded-full  w-12 h-12 cursor-pointer flex justify-center items-center" onClick={scrollToTop}>
         <AiFillCaretUp size={35}/>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;