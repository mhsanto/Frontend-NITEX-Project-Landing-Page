import LoginImage from "../../assets/signin.json";
import { Link } from "react-router-dom";
import InputHandle from "./Input";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { RiTwitterFill } from "react-icons/ri";
import Lottie from "lottie-react";

const Login = () => {
  return (
    <section className="h-full">
      <div className="max-w-7xl mx-auto  px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background*/}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <Lottie animationData={LoginImage} className="h-[30rem]" />
          </div>
          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
              <InputHandle label="Email" />
              <InputHandle label="Password" />
              {/* Password input */}

              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block ">
                  <Link
                    to="/contact"
                    className="inline-block pl-1 tracking-tighter text-base hover:cursor-pointer capitalize underline underline-offset-2"
                    htmlFor="exampleCheck3"
                  >
                    Create An Account
                  </Link>
                </div>
                {/* Forgot password link */}
                <Link
                  href="/"
                  className="text-sm tracking-tighter capitalize hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-md   bg-white text-black"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                Sign in
              </button>
              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>
              {/* Social login buttons */}
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                {/* Facebook */}
                <BiLogoFacebookCircle size={20} />
                Continue with Facebook
              </a>
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out  "
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                {/* Twitter */}
                <RiTwitterFill size={20} />
                Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
