import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { SiConekta } from "react-icons/si";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu)

  }
  const [header, setHeader] = useState(false)
   const scrollHeader = ()=>{
    if(window.scrollY >= 20){
      setHeader(true)
    }else{
      setHeader(false)
    }

   }
   useEffect (()=> {
    window.addEventListener('scroll', scrollHeader)
    return ()=>{
      window.addEventListener('scroll', scrollHeader)
    }

   },[]);

  return (
    <div className={header ? 'z-50 w-full text-white bg-black fixed top-0' : 'text-white bg-black'}>
      <div className='flex items-center justify-between w-full h-20 px-3 xl:px-[75px] md:px-10 z-50 bg-black fixed'>
        <div className='text-xl font-extrabold text-white flex justify-center items-center'>
          <span className='text-blue px-2 text-xl'>
            <SiConekta />
          </span>
          <h2>CYNDY.</h2>
        </div>
        <nav className='hidden lg:flex'>
          <ul className='flex items-center font-bold cursor-pointer gap-[30px]'>
            <Link to="hero" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>About</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Services</Link>
            <Link to="skill" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Skills</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Projects</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Contacts</Link>
            <Link to="contact">
              <button className='border-blue transform-translate-y-14 hover:scale-110 px-6 py-2 text-white transition duration-500 ease-in-out bg-transparent border-2 rounded-md'>
                Let's Talk!
              </button>
            </Link>
          </ul>
        </nav>
        <div className='lg:hidden flex items-center'>
          {menu ? (
            <LiaTimesSolid size={25} onClick={handleClick} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleClick} />
          )}
        </div>
        <div className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:hidden flex flex-col absolute bg-white text-black left-0 top-20 pt-8 pb-4 gap-8 w-full h-fit items-center transition-transform duration-500 font-bold cursor-pointer`}>
          <Link to="hero" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>About</Link>
          <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Services</Link>
          <Link to="skill" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Skills</Link>
          <Link to="projects" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Projects</Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Contacts</Link>
          <Link to="contact">
            <button className='border-blue transform-translate-y-14 hover:scale-110 px-6 py-2 text-black lg:text-white transition duration-500 ease-in-out bg-transparent border-2 rounded-md'>
              Let's Talk!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
