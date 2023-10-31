import { useState } from "react";
import { Developing, Designing } from "./servicesData";
import { motion } from "framer-motion";
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
          {Developing.map((service, index) => (
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              key={service.id}
              className=" "
            >
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
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex pt-4">
        <h1 className="text-3xl italic uppercase w-1/2 custom-font font-semibold tracking-wider">
          Designing
        </h1>
        <div className=" flex flex-col gap-3 w-1/2">
          {Designing.map((service, index) => (
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              key={service.id}
              className=" "
            >
              <motion.h2 className="text-3xl custom-font font-semibold tracking-wider">
                {service.title}
              </motion.h2>
              {!showMore ? (
                <motion.p className="text-xs italic text-slate-300">
                  {service.description.slice(0, 100)}{" "}
                  <span onClick={isShowMore}>Show More ...</span>
                </motion.p>
              ) : (
                <motion.p className="text-xs italic text-slate-300">
                  {service.description}
                  <span onClick={isShowMore}>Show Less ...</span>
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
