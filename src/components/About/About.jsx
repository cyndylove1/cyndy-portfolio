import React from "react";
import { AiOutlineCheck } from "react-icons/ai";


const About = () => {
  return (
    <div>
      <div className="h-fit pt-20 pb-32 bg-black">
        <h2 className="text-blue pb-4 text-4xl font-extrabold text-center">
          About Me
        </h2>
        <div className=" flex flex-col md:flex-row justify-between items-center xl:mx-20 mx-5 md:gap-[30px] lg:gap-0 gap-0 pt-10">
          <div className="" data-aos="fade-up" data-aos-duration="300">
            <h3 className=" lg:w-82 md:w-97 md:text-lg text-[16px] text-justify text-white">
              A motivated Frontend developer with keen eye for beautiful and
              responsive web applications. Proficient in translating design
              concepts into pixel-perfect, responsive web applications that
              deliver exceptional user experiences. Adept at utilizing modern
              JavaScript frameworks to build dynamic and interactive user
              interfaces. Have strong collaboration skills with cross-functional
              teams, to deliver high-impact solutions that blend aesthetics with
              functionality.{" "}
            </h3>
            <a href="mailto:Nwekecynthia2015@gmail.com">
              <button className="bg-blue transform-translate-y-14 hover:scale-110 px-4 py-2 mt-6 font-bold text-black transition duration-500 ease-in-out rounded-md">
                Contact Me
              </button>
            </a>
          </div>
          <div
            className="xl:mx-10 w-80 md:w-97 py-6"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <h5 className="border-blue py-6 border-b-2 border-dotted">
              <span className="text-blue inline-block text-3xl">
                <AiOutlineCheck />
              </span>
              <span className="mx-4 text-3xl text-white">90%</span>
              <span className="text-blue md:text-lg text-[15px] font-bold">
                Client Satisfaction
              </span>
            </h5>
            <h5 className="border-blue py-6 border-b-2 border-dotted">
              <span className="text-blue inline-block text-3xl">
                <AiOutlineCheck />
              </span>
              <span className=" mx-4 text-3xl text-white">+3</span>
              <span className="text-blue md:text-lg text-[15px] ml-6 font-bold">
                Years of Experience
              </span>
            </h5>
            <h5 className=" py-6">
              <span className="text-blue inline-block text-3xl">
                <AiOutlineCheck />
              </span>
              <span className="mx-4 text-3xl text-white">+10</span>
              <span className="text-blue md:text-lg text-[16px] ml-2 font-bold">
                Successful Projects
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div>
    </div>
  );
};

export default About;
