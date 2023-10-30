import { useState } from "react";
import { Developing, Designing } from "./servicesData";
const Services = () => {
  const [showMore, setShowMore] = useState(false);
  const isShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="max-w-7xl mx-auto px-3 py-4">
      <h1 className="text-4xl uppercase border-b  pb-2">
        Everything in One Place
      </h1>
      <div className="flex pt-4 border-b pb-4">
        <h1 className="text-3xl italic uppercase w-1/2 custom-font font-semibold">
          Developing
        </h1>
        <div className=" flex flex-col gap-3 w-1/2">
          {Developing.map((service) => (
            <div key={service.id} className=" ">
              <h2 className="text-3xl custom-font font-semibold tracking-wider">
                {service.title}
              </h2>
              {!showMore ? (
                <p className="text-xs italic text-slate-300">
                  {service.description.slice(0, 100)}{" "}
                  <span onClick={isShowMore}>Show More ...</span>
                </p>
              ) : (
                <p className="text-xs italic text-slate-300">
                  {service.description}
                  <span onClick={isShowMore}>Show Less ...</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex pt-4">
        <h1 className="text-3xl italic uppercase w-1/2 custom-font font-semibold tracking-wider">
          Designing
        </h1>
        <div className=" flex flex-col gap-3 w-1/2">
          {Designing.map((service) => (
            <div key={service.id} className=" ">
              <h2 className="text-3xl custom-font font-semibold tracking-wider">
                {service.title}
              </h2>
              {!showMore ? (
                <p className="text-xs italic text-slate-300">
                  {service.description.slice(0, 100)}{" "}
                  <span onClick={isShowMore}>Show More ...</span>
                </p>
              ) : (
                <p className="text-xs italic text-slate-300">
                  {service.description}
                  <span onClick={isShowMore}>Show Less ...</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
