import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(
      (result) => {
        Swal.fire('Sent!', 'Your message has been sent.', 'success');
        form.current.reset();
      },
      (error) => {
        Swal.fire('Oops!', 'Something went wrong.', 'error');
      }
    );
  };

  return (
    <div id='contact' className='bg-[#F1F2F4] max-w-7xl mx-auto rounded-2xl px-4 my-10 shadow-md hover:shadow-lg transition duration-300s'>
      <h2 className='text-4xl font-bold text-center p-8'>Contact</h2>

      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6 mb-6 pb-16 px-20'>
        {/* Left Side */}
        <div className='h-full flex'>
          <div className='bg-white rounded-2xl px-6 py-10 shadow-2xl w-full'>
            <h2 className='text-3xl font-bold mb-6'>Contact Information</h2>
            <p className='text-xl mb-4'>
              <span className='font-bold'>Location:</span> Dhaka, Bangladesh
            </p>
            <p className='text-xl mb-4'>
              <span className='font-bold'>Email Address:</span>{' '}
              <span className='text-blue-600'>taheruntoma@gmail.com</span>
            </p>
            <p className='text-xl'>
              <span className='font-bold'>Phone/WhatsApp:</span> 01788614117
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className='h-full flex'>
          <div className='bg-white rounded-2xl px-6 py-10 shadow-2xl w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label className='block text-lg font-semibold mb-1'>Your Email</label>
                <input
                  type='email'
                  name='user_email'
                  required
                  className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-lg font-semibold mb-1'>Your Feedback</label>
                <textarea
                  name='message'
                  rows='5'
                  required
                  className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
