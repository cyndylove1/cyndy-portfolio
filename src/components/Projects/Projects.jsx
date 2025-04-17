import React from "react";
import Suft from "../images/suft.JPG";
import manage from "../images/Capture.PNG";
import Admin from "../images/suft-admin.JPG";
import chequeMate from "../images/chequemate.JPG";


const Projects = () => {
  return (
    <div className="bg-black">
      <div>
        <h2 className="text-blue pt-20 text-4xl font-extrabold text-center">
          Projects
        </h2>
      </div>
      <div>
        <div className="md:grid-cols-2 xl:mx-20 grid grid-cols-1 gap-10 pt-10 pb-32 mx-5">
          <div className="">
            <img
              src={Suft}
              alt=""
              className="rounded-xl"
              data-aos="fade-up"
              data-aos-duration="300"
            />
            <div className=" text-white">
              <div
                className="flex justify-between mt-6"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <div className="">
                  <h3 className="text-blue ml-1 text-2xl font-extrabold">
                    Suft
                  </h3>
                </div>
                <div className="mr-10">
                  <a href="https://getsuft.com/">
                    <h2 className="hover:text-blue text-xl transition duration-500 ease-in-out cursor-pointer">
                      View Live
                    </h2>
                  </a>
                </div>
              </div>
              <div>
                <h5
                  className="md:text-lg py-4 text-[16px] text-white"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  {" "}
                  Suft website is an E-commerce platform that enables
                  individuals to buy products or services over
                  the internet.
                </h5>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={Admin}
              alt=""
              className="rounded-xl"
              data-aos="fade-up"
              data-aos-duration="300"
            />
            <div
              className="flex justify-between mt-6 text-white"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="">
                <h3 className="text-blue ml-1 text-2xl font-extrabold">
                  Suft-Admin
                </h3>
              </div>
              <div>
                <a href="https://getsuft.com/admin/login">
                  <h2 className="hover:text-blue mr-10 text-xl transition duration-500 ease-in-out cursor-pointer">
                    View Live
                  </h2>
                </a>
              </div>
            </div>
            <h5
              className="md:text-lg py-4 text-[16px] text-white"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              {" "}
              An Admin Dashboard is a web-based interface that provides
              administrators with tools to manage and monitor various aspects of
              a system, application, or website.
            </h5>
          </div>
          <div>
            <img
              src={chequeMate}
              alt=""
              className="rounded-xl"
              data-aos="fade-up"
              data-aos-duration="300"
            />
            <div
              className="flex justify-between mt-6 text-white"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div>
                <h3 className="text-blue ml-1 text-2xl font-extrabold">
                  ChequeMate
                </h3>
              </div>
              <div className="">
                <a href="https://chequemateapp.com/">
                  <h2 className="hover:text-blue mr-10 text-xl transition duration-500 ease-in-out cursor-pointer">
                    View Live
                  </h2>
                </a>
              </div>
            </div>
            <h5
              className="py-4 md:text-lg text-white text-[16px]"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {" "}
              Manage and control multiple Ajo groups with Chequemate and earn up
              to 20% interest per annum.
            </h5>
          </div>
          <div className="">
            <img
              src={manage}
              alt=""
              className="rounded-xl"
              data-aos="fade-up"
              data-aos-duration="300"
            />
            <div
              className="flex justify-between mt-6 text-white"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div>
                <h3 className="text-blue ml-1 text-2xl font-extrabold">
                  Managing
                </h3>
              </div>
              <div className="">
                <a href="https://managing-app.vercel.app/">
                  <h2 className="hover:text-blue mr-10 text-xl transition duration-500 ease-in-out cursor-pointer">
                    View Live
                  </h2>
                </a>
              </div>
            </div>
            <h5
              className="py-4 md:text-lg text-white text-[16px]"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              {" "}
              A simple project with aim of bringing everyone together to bulid a
              better products. mange makes it simpler for software teams to plan
              day-day task.
            </h5>
          </div>
        </div>
        <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div>
      </div>
    </div>
  );
};

export default Projects;
