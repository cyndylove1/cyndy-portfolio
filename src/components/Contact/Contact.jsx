import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Contact = () => {

  const notify = () => toast.success("Sent Successfully!"); // Display success toast

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nqerapm', 'template_0albnh7', form.current, 'oAjyzmxKCMONiqFu2')
      .then(
        () => {
          console.log('SUCCESS!');
          notify(); 
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Check your connections</a>'
          });
        },
      );
  };

  return (
    <div className=''>
      <ToastContainer />
      <div className='h-fit bg-black xl:px-20 md:px-10 px-4'>
        <h2 className='text-center text-4xl text-blue font-extrabold pt-20'>Contacts</h2>
        <div className='flex justify-between items-center flex-col lg:flex-row pt-10 pb-32'>
          <div className=''>
            <div className='py-16 text-center' data-aos="fade-up" data-aos-delay="200">
              <h2 className='md:text-5xl text-3xl  font-bold text-white'>Have a Project?</h2>
              <h2 className='text-5xl font-bold text-white py-4'>Let's Talk!</h2>
            </div>
          </div> 
          <div className='flex justify-center lg:w-[50%] md:w-[70%] w-full' data-aos="fade-up" data-aos-delay="400">
            <form ref={form} className="w-full" onSubmit={sendEmail}>
              <label htmlFor="first_name" className="text-[#fff]">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Your first name"
                className="border-2 border-blue rounded-lg h-[55px] bg-white text-black px-4 w-full py-2 my-2 focus:outline-none focus:border-blue"
                name="first_name" 
                required
              /> <br />
              <label htmlFor="email" className="text-[#fff]">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="border-2 border-blue rounded-lg px-4 py-2 bg-white text-black w-full h-[55px] my-2 focus:outline-none focus:border-blue"
                name="email" 
                required
              /> <br />
              <label htmlFor="message" className="text-[#fff]">Message</label>
              <textarea 
                name="message" 
                id="message"
                rows="6"  
                placeholder='Your message' 
                required
                className='w-full my-2 border-2 bg-white text-black border-blue rounded-lg outline-none focus:outline-none focus:border-blue px-4 py-2'
              ></textarea><br />
              <button type='submit' className='bg-blue mt-4 transition duration-500 ease-in-out text-black py-2 px-6 rounded-md font-bold '>Submit</button> 
            </form> 
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Contact;
