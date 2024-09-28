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
      <div className='h-fit xl:px-20 px-5 bg-black'>
        <h2 className='text-blue pt-20 text-4xl font-extrabold text-center'>Contacts</h2>
        <div className='lg:flex-row flex flex-col items-center justify-between pt-10 pb-32'>
          <div className=''>
            <div className='py-16 text-center' data-aos="fade-up" data-aos-delay="200">
              <h2 className='md:text-5xl text-3xl font-bold text-white'>Have a Project?</h2>
              <h2 className='py-4 text-5xl font-bold text-white'>Let's Talk!</h2>
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
                className='border-blue focus:outline-none focus:border-blue w-full px-4 py-2 my-2 text-black bg-white border-2 rounded-lg outline-none'
              ></textarea><br />
              <button type='submit' className='bg-blue px-6 py-2 mt-4 font-bold text-black transition duration-500 ease-in-out rounded-md'>Submit</button> 
            </form> 
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Contact;
