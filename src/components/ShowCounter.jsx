import { BiLogoFacebook } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import Counter from "./Counter";
const ShowCounter = () => {
    return (
      <div className="bg-white text-black py-7 sm:py-16">
        <div className=" flex flex-col gap-4 sm:flex-row justify-between items-center max-w-7xl mx-auto px-5">
          <span className="flex flex-col items-center text-lg  md:text-xl lg:text-3xl border-b sm:border-none uppercase tracking-tighter text-zinc-950 whitespace-nowrap">
            <BiLogoFacebook />
            Facebook Followers <Counter dataTarget={25000} />
          </span>
  
          <span className="flex flex-col items-center text-xl  lg:text-3xl border-b sm:border-none uppercase tracking-tighter text-zinc-950 whitespace-nowrap">
            <MdOutlineSentimentVerySatisfied />
            Satisfied Customer
            <Counter dataTarget={5000} />
          </span>
  
          <span className="flex flex-col text-lg  items-center md:text-xl lg:text-3xl border-b sm:border-none uppercase tracking-tighter text-zinc-950 whitespace-nowrap">
            <RiTeamFill />
            Our Team Members <Counter dataTarget={500} />
          </span>
        </div>
      </div>
    );
  };
  export default ShowCounter;
  