import Lottie from "lottie-react";
import contactImage from "../assets/contact.json";
import { useRef } from "react";
const Contact = () => {
  const ref = useRef(null);
  return (
    <section className="  max-w-7xl px-4 mx-auto">
      <div className="flex flex-col items-center  gap-3 py-4">
        <h1 className="text-4xl uppercase">Connect with Our IT Experts</h1>
        <p className="tracking-tight text-gray-200 capitalize">
          we value your thoughts, & feedback.
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-between py-4">
        <div className="shrink w-1/2">
          <p className="custom-font text-3xl">Get in touch with us</p>
          <Lottie
            lottieRef={ref}
            onComplete={() => {
              ref.current?.goToAndPlay(0, true);

              ref.current?.setSpeed(0.4);
            }}
            loop={false}
            animationData={contactImage}
            className="h-[30rem]"
          />
        </div>
        <form
          action=""
          className="flex flex-col gap-3 glass-effect text-white px-4 py-4 rounded-md shrink 2-1/2"
        >
          <h3 className="text-3xl uppercase tracking-tighter pb-5 font-medium">
            Communication Starts here
          </h3>
          <input
            type="text"
            name="firstname"
            className="py-2 px-2 placeholder:text-slate-400 rounded-lg text-base placeholder:tracking-tight  bg-gray-50 text-white focus:outline-lime-500"
            placeholder="Enter Your First Name"
          />
          <input
            type="text"
            name="lastname"
            className="py-2 px-2 placeholder:text-slate-400 rounded-lg text-base placeholder:tracking-tight  bg-gray-50 text-white focus:outline-lime-500"
            placeholder="Enter Your Last Name"
          />
          <input
            className="py-2 px-2 placeholder:text-slate-400 rounded-lg text-base placeholder:tracking-tight  bg-gray-50 text-white focus:outline-lime-500"
            type="email"
            placeholder="Enter Your Email Address"
          />
          <textarea
            name=""
            id=""
            cols="30"
            className="p-4 placeholder:text-slate-400 rounded-lg text-base placeholder:tracking-tight  bg-gray-50 text-white focus:outline-lime-500"
            rows="3"
            placeholder="Enter your Message here"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded font-medium uppercase transition-colors duration-300 hover:bg-gray-500 focus:outline-lime-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
