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
      <div className='flex items-center justify-between w-full h-20 px-3 xl:px-[75px] z-50 bg-black fixed'>
        <div className='flex items-center justify-center text-xl font-extrabold text-white'>
          <span className='text-blue px-2 text-xl'>
            <SiConekta />
          </span>
          <h2>CYNDY.</h2>
        </div>
        <nav className='md:flex hidden'>
          <ul className='flex items-center font-bold cursor-pointer lg:gap-[30px] md:gap-[20px]'>
            <Link to="hero" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>About</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Services</Link>
            <Link to="skill" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Skills</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Projects</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-blue transition duration-500 ease-in-out'>Contacts</Link>
            <Link to="contact">
              <button className='border-blue transform-translate-y-14 hover:scale-110 px-6 py-2 text-white md:text-[13px] lg:text-[15px] transition duration-500 ease-in-out bg-transparent border-2 rounded-md'>
                Let's Talk!
              </button>
            </Link>
          </ul>
        </nav>
        <div className='md:hidden flex items-center'>
          {menu ? (
            <LiaTimesSolid size={25} onClick={handleClick} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleClick} />
          )}
        </div>
        <div className={`${menu ? 'translate-x-0' : '-translate-x-full'} md:hidden flex flex-col absolute bg-black text-white left-0 top-20 pb-4 gap-8 w-full h-[100vh] transition-transform duration-500 font-bold cursor-pointer `}>
          <Link to="hero" spy={true} smooth={true} duration={500}  onClick={handleClick} className='hover:text-blue xl:mr-10 md:mr-4 px-4  transition duration-500 pb-[10px] ease-in-out border-b-[1px] border-white'>Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500}  onClick={handleClick} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out pb-[10px] border-b-[1px] border-white px-4 '>About</Link>
          <Link to="services" spy={true} smooth={true} duration={500}  onClick={handleClick} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out pb-[10px] border-b-[1px] border-white px-4'>Services</Link>
          <Link to="skill" spy={true} smooth={true} duration={500}   onClick={handleClick} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out pb-[10px] border-b-[1px] border-white px-4'>Skills</Link>
          <Link to="projects" spy={true} smooth={true} duration={500}  onClick={handleClick} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out pb-[10px]  border-b-[1px] border-white px-4'>Projects</Link>
          <Link to="contact" spy={true} smooth={true} duration={500}  onClick={handleClick} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out  pb-[10px] border-b-[1px] border-white px-4'>Contacts</Link>
          <Link to="contact" className= "border-b-[1px] border-white">
            <button onClick={handleClick} className='border-blue transform-translate-y-14 mb-[20px] hover:scale-110 lg:text-white px-6 py-2 mx-4 text-white transition duration-500 ease-in-out bg-transparent border-2 rounded-md'>
              Let's Talk!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
