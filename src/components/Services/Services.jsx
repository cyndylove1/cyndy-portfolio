import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";

const Services = () => {
  return (
    <div className="">
      <div className="h-fit pb-32 bg-black">
        <div className="text-blue pt-20 text-4xl font-extrabold text-center">
          Services
        </div>
        <div className="md:grid-cols-2 lg:grid-cols-3 xl:mx-20 grid grid-cols-1 mx-5">
          <div
            className="shadow-blue transform-translate-y-14 group:hover:scale-110 md:mr-4 h-64 mt-10 text-center rounded-md shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-blue flex justify-center py-2 text-5xl text-center">
              <BiCodeAlt />
            </h2>
            <h2 className="text-blue text-lg font-bold">Web Development</h2>
            <h5 className="md:text-lg px-1 text-[16px] text-white">
              With ample years of experience in areas of design, i develop and
              deliver beautiful and highly scalable web designs.
            </h5>
          </div>
          <div
            className="shadow-blue transform-translate-y-14 group:hover:scale-110 hover:text-white hover:bg-purple md:mr-4 h-64 mt-10 text-center rounded-md shadow"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-blue flex justify-center py-2 text-5xl text-center">
              <TbApiApp />
            </h2>
            <h2 className="text-blue text-lg font-bold">Api Integration</h2>
            <h5 className="px-2 md:text-lg text-[16px] text-white">
              connecting different software applications via their APIs. This
              allows these applications to interact and share data.
            </h5>
          </div>
          <div
            className="shadow-blue transform-translate-x-14 hover:scale-110 h-64 mt-10 text-center transition duration-500 ease-in-out rounded-md shadow"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className="text-blue flex justify-center py-2 text-5xl text-center">
              <FaSitemap />
            </h2>
            <h2 className="text-blue text-lg font-bold">Web Hosting</h2>
            <h5 className="px-2 md:text-lg text-white text-[16px]">
              The virtual equivalent to renting space online to store your
              website's files and data,Internet hosting service for clients.
            </h5>
          </div>
        </div>
      </div>
      <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div>
    </div>
  );
};

export default Services;
