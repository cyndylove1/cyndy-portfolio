import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue h-34 px-4">
        <div className="py-6 text-center text-black">
          <h2 className=" text-2xl font-bold">Nweke Cynthia</h2>
          <h5 className="">
            Designed with{" "}
            <span className="text-red inline-block w-4 text-xs">
              <FaHeart />
            </span>
            , All right reserved for Nweke Cynthia.
          </h5>
          <div className=" flex justify-center pt-2 cursor-pointer">
            <a href="https://github.com/cyndylove1">
              <h2 className="transform-translate-y-14 hover:scale-110 py-2 mx-2 text-2xl transition duration-500 ease-in-out">
                <FaGithub />
              </h2>{" "}
            </a>
            <a href="https://twitter.com/cyndynweke81">
              <h2 className="transform-translate-y-14 hover:scale-110 py-2 mx-2 text-2xl transition duration-500 ease-in-out">
                <FaTwitter />
              </h2>
            </a>
            <a href="https://linkedin.com/in/cyndylove1">
              <h2 className=" transform-translate-y-14 hover:scale-110 py-2 mx-2 text-2xl transition duration-500 ease-in-out">
                <FaLinkedin />
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
