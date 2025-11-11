import React from "react";
import banner from "../../assets/banner.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-navbar py-12 md:py-56" id="banner">
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-0">

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-poppins text-white font-semibold text-3xl md:text-4xl leading-snug md:leading-tight">
              Building stellar websites for early startups
            </h1>

            <p className="mt-5 md:mt-6 font-poppins text-white/90 text-base md:w-4/5 mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mt-10">
              <a
                href="#"
                className="bg-[#FCD980] text-black font-poppins font-medium text-base py-3.5 px-10 rounded-full border border-[#FCD980] transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                View our work
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-white font-poppins font-medium text-base py-3.5 px-10 rounded-full border border-[#FCD980] hover:bg-[#FCD980] hover:text-black transition-all duration-300"
              >
                View Pricing <FaLongArrowAltRight />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={banner}
              alt="Banner"
              className="w-full max-w-[520px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
