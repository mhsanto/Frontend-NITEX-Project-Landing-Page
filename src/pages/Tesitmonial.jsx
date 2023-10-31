import { SplideSlide, Splide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
const testimonials = [
  {
    id: 1,
    name: "Lance Reis",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1656019674844-3040aba0350b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxiZ1VPcVk3YUtZY3x8ZW58MHx8fHx8",
    comment: "My experience working with your team to design my website has been exceptional.From the outset, you demonstrated a keen understanding of my vision, and your creativity, technical expertise, and attention to detail resulted in a visually stunning and user-friendly website that has significantly improved my online presence.Your transparent and effective communication throughout the project made me feel involved and confident in the process, and the final product exceeded my expectations in terms of design and performance.I would highly recommend your services to anyone in need of web design – thank you for turning my online vision into a reality.",
  },
  {
    id: 2,
    name: "Jalen Terry",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1610928212533-f927e1e8c905?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "Recently had the privilege of working with this remarkable team to create my website, and the experience was absolutely outstanding.From the moment we started, it was evident that they had a deep understanding of what I envisioned, and their creativity, technical prowess, and meticulous attention to detail brought my website to life in a way that surpassed my expectations. The clear and effective communication throughout the project ensured that I was involved and confident at every step. The final result is a visually captivating, user-friendly website that has significantly enhanced my online presence.I wholeheartedly recommend their web design services to anyone looking to bring their online dreams to reality. Many thanks for making my vision a digital masterpiece.",
  },
  {
    id: 3,
    name: "Prince Akachi",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "I'm Prince Akachi, and I recently had the pleasure of working with your team to design my logo, and I must say it's a spectacular work of art. Your design team demonstrated an impressive understanding of my vision and branding needs, and their creativity, attention to detail, and technical skills are truly commendable. The final logo embodies the regal and unique image I was aiming for, and it has become a symbol of my identity. I'm immensely satisfied with the results, and I'm grateful for the professionalism and transparent communication that marked our collaboration. I highly recommend your logo design services to anyone in search of a distinctive and memorable brand identity. Thank you for giving my image a royal touch!",
  },
];
const Testimonial = () => {
  return (
    <section className=" mx-auto">
      <div className="flex flex-col gap-3 text-center py-4">
        <h1 className="text-4xl uppercase">Users Who used our services</h1>
        <p className="text-sm capitalize">See what they talk about us</p>
      </div>
      <Splide
        tag="section"
        aria-label="My Favorite Images"
        className="  splide"
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          autoplay:true,
          animation:"slide",
          width: "100%",
          gap: "3rem",
          perPage: 2,
          speed:700,
          rewindSpeed:500,
          easing:" cubic-bezier(0.25, 1, 0.5, 1)",
          breakpoints: {
            900: {
              perPage: 1,
              speed:700,
            },
          },
          

        
        }}
      >
        {testimonials.map((testimonial) => (
          <SplideSlide key={testimonial.id} className="flex gap-4 px-12">
            <div>
              <div className="flex gap-3 items-center pb-5">
                <div className="w-20 h-20 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    className="object-cover"
                    style={{ width: "100%", height: "100%" }}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{testimonial.name}</h3>
                  <p className="text-gray-300 tracking-tighter italic text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium max-w-2xl whitespace-pre-wrap text-slate-200 ">
                &quot;{testimonial.comment}&quot;
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Testimonial;
