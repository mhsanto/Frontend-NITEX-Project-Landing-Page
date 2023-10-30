import { Link } from "react-router-dom";

const pricingList = [
  {
    title: "Basic",
    desc: "Best for normal uses",
    price: "3,499",
    services: [
      //turn copied text in to object
      { title: "No Animation Included" },
      { title: "No After Sale Service" },
      { title: "Update Not Included" },
      { title: "No Setup Or Guide Provided" },
      { title: "No Live Support" },
    ],
  },
  {
    title: "Standard",
    desc: "Best For Business",
    price: "14,999",
    services: [
      { title: "Animation Included" },
      { title: "After Sale Service" },
      { title: "Update Included" },
      { title: "No Setup Or Guide Provided" },
      { title: "No Bugs And Error Guaranteed" },
      { title: "Live Support" },
    ],
  },
  {
    title: "Industry Level",
    desc: "Our Best Seller",
    price: "39,999",
    services: [
      { title: "Animation Included" },
      { title: "After Sale Service" },
      { title: "Update Included" },
      { title: "No Setup Or Guide Provided" },
      { title: "No Bugs And Error Guaranteed" },
      { title: "E-Commerce Included" },
      { title: "Payment Gateway Included" },
      { title: "Admin Panel Included" },
      { title: "User Panel Included" },
      { title: "User Friendly" },
      { title: "SEO Friendly" },
    ],
  },
];
const Pricing = () => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight uppercase font-extrabold  ">
            We give our best to provide Quality Products
          </h2>
          <p className="mb-5 font-light text-sm text-slate-300 uppercase">
            Try one of our Services
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
          {/* Pricing Card */}
          {pricingList.map((item) => (
            <div
              key={item.title}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 h-fit upper"
            >
              <h3 className="mb-4 text-2xl font-semibold uppercase">{item.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg ">
                {item.desc}
              </p>

              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {item.price}Taka
                </span>
                <span className="text-gray-500 text-xs whitespace-nowrap">
                  Per Package
                </span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {item.services.map((service) => (
                  <li
                    key={service.title}
                    className="flex items-center space-x-3 "
                  >
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span key={service.title}>{service.title}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                className="text-white bg-black hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-4 text-center   dark:focus:ring-primary-900"
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
