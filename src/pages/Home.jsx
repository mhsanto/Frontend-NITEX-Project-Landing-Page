import { Link } from "react-router-dom";
import ShowCounter from "../components/ShowCounter";
import Slider from "../components/Slider";
import { Designing, Developing } from "./ServiceLists/servicesData";
const Home = () => {
  const servicesToShow = Developing.slice(0, 4);
  const servicesToShowDesign = Designing.slice(0, 5);
  return (
    <>
      <Slider />
      <ShowCounter />
      <section className="max-w-7xl mx-auto pt-8">
        <h1 className="text-4xl uppercase text-center pb-8">services we provide</h1>
        <div className="flex flex-wrap gap-2 mb-2">
          {servicesToShow.map((service) => (
            <div key={service.id} className="grow">
              <h2
                className="text-2xl uppercase py-4 whitespace-nowrap font-semibold text-center
               tracking-tighter bg-white text-black px-6  rounded-full hover:bg-zinc-900 hover:text-white hover:outline-white transition-colors duration-300"
              >
                {service.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {servicesToShowDesign.map((service) => (
            <div key={service.id} className="grow">
              <h2 className="text-2xl uppercase py-4 whitespace-nowrap  font-semibold text-center tracking-tighter bg-white text-black px-4  rounded-full  hover:bg-zinc-900 hover:text-white transition-colors duration-300">
                {service.title}
              </h2>
            </div>
          ))}
        </div>

        {/* see all of services */}
        <div className="flex justify-center pt-7">
          <Link
            to="/services"
            className="bg-none underline text-white uppercase rounded-md font-medium text-xl text-center border-none outline-none"
          >
            See All Services
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
