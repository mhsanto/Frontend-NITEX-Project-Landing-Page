import { motion } from "framer-motion";
const teamMembers = [
  {
    id: crypto.randomUUID(),
    name: "Dan Senior",
    image:
      "https://images.unsplash.com/photo-1615207387474-b9c1be948f30?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Designer",
    desc: "As a designer, my role involves creating visually appealing and user-friendly digital products, whether they are websites, mobile apps, or software interfaces. I focus on aspects such as user interface (UI) and user experience (UX) design, ensuring that the product is intuitive and aesthetically pleasing. I also engage in tasks like wireframing and prototyping to plan the product's layout and functionality, and I may create graphic assets to enhance its visual identity. My aim is to craft designs that improve the overall user experience and align with the project's goals and industry trends. ",
  },
  {
    id: crypto.randomUUID(),
    name: "Harun, Maya, David",
    image:
      "https://plus.unsplash.com/premium_photo-1691588961755-c775a2542b0e?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Job: "Developer Team",
    desc: "As a member of a developer team, we work collaboratively with developers, product managers, and other stakeholders to bridge the gap between design and implementation. Our role involves translating design concepts into functional code and ensuring that the final product aligns with the design vision. We may also engage in front-end development tasks, implementing user interfaces, and ensuring that the user experience is consistent with the design specifications. Our goal is to facilitate seamless communication and collaboration between design and development, ultimately delivering a product that meets both technical requirements and design expectations.",
  },
  {
    id: crypto.randomUUID(),
    name: "Christopher Lemercier",
    image:
      "https://images.unsplash.com/photo-1513595323107-c9f6125b945f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Project Manager",
    desc: "As a project manager, my role involves planning, overseeing, and leading projects from ideation through to completion. I am responsible for ensuring that projects are completed on time and within budget, that the project's objectives are met, and that everyone else is doing their job properly. I work closely with the project team to make sure that all goals are met. My aim is to ensure that all projects are delivered on time, within the scope, and within budget.",
  },
];
const About = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-4">
      <div className="flex justify-between pb-6 items-center py-6">
        <p>Our Team</p>
        <h1 className="text-xl  whitespace-nowrap sm:text-3xl uppercase">
          The Face behind our success
        </h1>
      </div>
      {/* Team members */}
      <motion.div className="flex flex-wrap gap-2 justify-center">
        {teamMembers.map((member, index) => (
        
            <motion.a
              key={member.id}
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
              href="/"
              className=" flex  sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 sm:w-[400px] grow group overflow-hidden"
            >
              <motion.img
                className="object-contain  sm:object-cover  w-full rounded-t-lg md:h-auto h-96 md:w-48 md:rounded-none md:rounded-l-lg transition duration-300 sm:group-hover:scale-110 "
                src={member.image}
                alt={member.name}
              />
              <motion.div className="flex flex-col justify-between p-4 leading-normal text-black">
                <motion.h5 className="mb-2 text-2xl font-bold tracking-tight whitespace-wrap">
                  {member.name}
                </motion.h5>
                <motion.h6 className="mb-2 text-sm font-bold tracking-tight text-slate-800 ">
                  {member.job}
                </motion.h6>
                <motion.p className="mb-3 font-normal text-gray-700 dark:text-gray-800 tracking-tighter">
                  {member.desc.slice(0, 100)}...
                </motion.p>
              </motion.div>
 </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
