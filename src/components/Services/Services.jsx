import React from 'react'
import { BiCodeAlt } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";

const Services = () => {
  return (
    <div className=''>
      <div className='bg-black h-fit pb-32'>
        <div className='text-center text-blue text-4xl font-extrabold pt-20'>Services</div>
        <div className='md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid xl:mx-20 md:mx-10 mx-4'>
          <div className='shadow shadow-blue h-64 text-center rounded-md mt-10 transform-translate-y-14 group:hover:scale-110 md:mr-4 ' data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-blue text-5xl py-2 flex text-center justify-center'><BiCodeAlt /></h2>
            <h2 className='text-blue text-lg font-bold'>Web Development</h2>
            <h5 className='text-white text-lg px-1'>With ample years of experience in areas of design, i develop and deliver beautiful  and highly scalable web designs.</h5>
          </div>
          <div className='shadow shadow-blue h-64 text-center rounded-md mt-10 transform-translate-y-14 group:hover:scale-110 hover:text-white hover:bg-purple md:mr-4' data-aos="fade-up" data-aos-delay="400">
            <h2 className='text-blue text-5xl py-2 flex text-center justify-center'><TbApiApp /></h2>
            <h2 className='text-blue text-lg font-bold'>Api Integration</h2>
            <h5 className='text-white text-lg px-2'>connecting different software applications via their APIs. This allows these applications to interact and share data.</h5>
          </div>
          <div className='shadow shadow-blue h-64 text-center rounded-md mt-10 transform-translate-x-14 hover:scale-110 transition duration-500 ease-in-out ' data-aos="fade-up" data-aos-delay="500">
            <h2 className='text-blue text-5xl py-2 flex text-center justify-center'><FaSitemap /></h2>
            <h2 className='text-blue text-lg font-bold'>Web Hosting</h2>
            <h5 className='text-white text-lg px-2'>The virtual equivalent to renting space online to store your website's files and data,Internet hosting service for clients.</h5>
          </div>
        </div>
      </div>
      <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div>
    </div>
  )
}

export default Services