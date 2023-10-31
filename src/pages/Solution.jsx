import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandFramerMotion, TbBrandJavascript } from "react-icons/tb";
const Solutions = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto flex flex-col gap-4">
      <h1 className="text-3xl text-center uppercase tracking-tight py-4">
        Technologies I used during the Task-Based Round for the Junior Front End
        position at NITEX.
      </h1>
      <div className="">
        <h2 className="flex gap-1 items-center text-2xl underline">
          {" "}
          <BiLogoTailwindCss />
          Tailwind CSS
        </h2>
        <p className="text-base pl-7 tracking-tight capitalize">
          {" "}
          Why I chose to use Tailwind CSS over SASS or Less for several reasons.
          It&apos;s allows me to write css in my html code.I don &apos;t have to
          create another file then import it then remember the classname that i
          used in my html file.It helps to boost my productivity.Tailwind is
          just normal css difference is that you write it on you inline class
        </p>
      </div>
      <div>
        <h2 className="flex items-center text-2xl underline">
          <IoLogoReact />
          React Icons
        </h2>
        <p className="text-base pl-7 tracking-tight capitalize">
          why I chose to use React Icons instead of Font Awesome or any other.
          Whenever I need a icon i search on React Icons and i find tons of
          different choices.That&apos;s why i never used Font Awesome or any
          other
        </p>
      </div>
      <div>
        <h2 className="flex items-center text-2xl underline">
          <TbBrandFramerMotion />
          Framer-Motion
        </h2>
        <p className="text-base pl-7 tracking-tight capitalize">
          why I chose to use Framer Motion instead of React Spring or any other.
          Framer Motion is easy to use library for animation. It&apos;s has a
          lot of cool animations and its quite popular so many people already
          used it so whenever i need help i can find it easily.
        </p>
      </div>
      <div>
        <h2 className="flex items-center text-2xl underline">
          <TbBrandJavascript /> Lottie Animation
        </h2>
        <p className="text-base pl-7 tracking-tight capitalize">
          why I chose to use Lottie react. This is my first time using Lottie.It
          was quite easy to use and it&apos;s has a lot of cool animations.It
          free to use so i used it and i was quite happy with the result.
        </p>
      </div>
      <div>
        <h2 className="flex items-center text-2xl underline">
          <TbBrandJavascript />
          Splide JS
        </h2>
        <p className="text-base pl-7 tracking-tight capitalize">
          why I chose to use Splide instead of coding myself or Swiper js. I
          coudn&apos;t code myself because i don&apos;t have enough time to do
          it .This is was my first time using Splide I used Swiper before so I
          wanted to try something different this time.
        </p>
      </div>
      <h2 className="text-xl md:text-4xl uppercase ">
        That&apos;s it.I put a lot of effort into this project. If you could
        review it and offer any feedback, that would be much appreciated.
      </h2>
    </div>
  );
};

export default Solutions;
