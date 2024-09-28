import React from 'react'
import girl from '../images/pngwing.com (3).png'
import blob from "../images/blob (7).svg"
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='h-fit bg-black'>
      <div className='justify-between md:flex-row flex flex-col items-center xl:mx-20 md:mx-10 mx-4 pt-20 pb-32'>
        <div className=''>
          <div className='' data-aos="fade-up" data-aos-delay="200">
            <h5 className=' py-4 text-2xl font-bold text-white'>Hi, I'm Cynthia Nweke</h5>
            <h1 className=' pb-2 text-5xl font-bold text-white'> <span className='text-blue'>SoftWare</span> <span className='text-purple'>Developer.</span></h1>
            <div className='md:w-[70%] w-full'>
              <h6 className=' font-bold text-justify text-white'>I am a Software Developer, I can provide clean code and pixel perfect design.</h6>
            </div>
            <a href="NwekeCynthia_Cv.pdf" download="NwekeCynthia_Cv.pdf"><button className='bg-blue transform-translate-y-14 hover:scale-110 px-4 py-2 mt-2 font-bold text-black transition duration-500 ease-in-out rounded-md'> Download Cv</button></a>
            <div className=' flex inline-block cursor-pointer'>
              <a href="https://github.com/cyndylove1"><h2 className='text-blue transform-translate-y-14 hover:scale-110 py-2 mt-2 ml-4 text-2xl transition duration-500 ease-in-out'><FaGithub /></h2> </a> 
              <a href="https://twitter.com/cyndynweke81"><h2 className='text-blue transform-translate-y-14 hover:scale-110 py-2 mt-2 ml-4 text-2xl transition duration-500 ease-in-out'><FaTwitter /></h2></a>
              <a href="https://linkedin.com/in/cyndylove1"><h2 className='text-blue transform-translate-y-14 hover:scale-110 py-2 mt-2 ml-4 text-2xl transition duration-500 ease-in-out'><FaLinkedin /></h2></a>
            </div>  
          </div>
        </div>
        <div className='relative h-96 w-fit' data-aos="zoom-in" data-aos-delay="400">
          <img src={blob} alt="Blob" className='mt-10 w-96 h-fit ' />
          <img src={girl} alt="Girl" className='absolute top-1/2 md:top-[10rem] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-fit' />
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-black to-white "></div>
    </div>
  )
}

export default Hero;