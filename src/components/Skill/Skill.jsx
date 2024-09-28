import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMongoosedotws } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


const Skill = () => {
  return (
    <div className='h-fit bg-black'>
        <h2 className='text-blue py-4 pt-20 text-4xl font-extrabold text-center'>Skills</h2>
        <div className='md:grid-cols-6 md:gap-4 xl:mx-20 grid justify-center grid-cols-4 gap-5 pt-10 pb-32 mx-5' data-aos="zoom-in" data-aos-delay="200">
            <div className=' transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaHtml5 /></h6>
                <h2 className='md:text-2xl pt-2 text-base font-bold text-white'>HTML5</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaCss3Alt /></h6>
                <h2 className='md:text-2xl ml-4 text-base font-bold text-white'>CSS</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaReact /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>React</h2>
            </div>
        
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><TbBrandNextjs /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>Next Js</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><SiTailwindcss /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>Tailwind Css</h2>
            </div>
            
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><IoLogoJavascript /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>JavaScript</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 ml-3 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaSass /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>Sass</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaGitAlt /></h6>
                <h2 className='md:text-2xl ml-4 text-base font-bold text-white'>Git</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaGithub /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>Github</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaNode /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>Node Js</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><SiMongoosedotws /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>Mongoose</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 ml-4 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><SiMongodb /></h6>
                <h2 className='md:text-2xl text-base font-bold text-white'>Mongo DB</h2>
            </div>
            
        </div>
        <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div>
    </div>
  )
}

export default Skill