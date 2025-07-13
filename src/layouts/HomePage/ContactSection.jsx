import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [failureMessage, setFailureMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm('service_ajod36z', 'template_n0mptt9', form.current, {
          publicKey: 'fPhvDRbym6NRNTsQA',
        })
        .then(
          () => {
            setSuccessMessage('Thanks for contacting me! I will get back to you as soon as possible.');
            clearForm();
          },
          (error) => {
            setFailureMessage('Sorry, there was an error sending your message.');
            console.log('FAILED...', error);
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const formErrors = {};
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    if (!name) formErrors.name = 'Please enter your name.';
    if (!email) formErrors.email = 'Please enter your email address.';
    else if (!/\S+@\S+\.\S+/.test(email))
      formErrors.email = 'Please enter a valid email address.';
    if (!subject) formErrors.subject = 'Please enter a subject.';
    if (!message) formErrors.message = 'Please enter your message.';

    return formErrors;
  };

  const clearForm = () => {
    form.current.reset();
    setErrors({});
    setTimeout(() => {
      setSuccessMessage('');
      setFailureMessage('');
    }, 5000);
  };

  return (
    <div
      className='flex flex-col items-center justify-center gap-2 bg-white h-full py-10 text-primary px-5 sm:px-0'
    >
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-1 items-center justify-center'
      >
        <h1 className='text-4xl font-semibold'>Contact Me</h1>
        <h3 className='font-serif text-md'>I'd love to hear from you!</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className='flex flex-col w-full max-w-md mt-10'
      >
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2 md:flex-row'>
            <div className='w-full'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>Name</label>
              <input
                type='text'
                name='user_name'
                placeholder='Your Name'
                className='w-full px-3 py-2 mb-2 border border-gray-300 rounded-md'
              />
              {errors.name && (
                <p className='text-red-500 text-xs italic'>{errors.name}</p>
              )}
            </div>
            <div className='w-full'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>Email</label>
              <input
                type='email'
                name='user_email'
                placeholder='Your Email'
                className='w-full px-3 py-2 mb-2 border border-gray-300 rounded-md'
              />
              {errors.email && (
                <p className='text-red-500 text-xs italic'>{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className='block mb-2 text-sm font-bold text-gray-700'>Subject</label>
            <input
              type='text'
              name='subject'
              placeholder="Write what's on your mind.."
              className='w-full px-3 py-2 mb-2 border border-gray-300 rounded-md'
            />
            {errors.subject && (
              <p className='text-red-500 text-xs italic'>{errors.subject}</p>
            )}
          </div>

          <div>
            <label className='block mb-2 text-sm font-bold text-gray-700'>Message</label>
            <textarea
              name='message'
              placeholder='Your Message'
              className='w-full px-3 py-2 mb-2 border border-gray-300 rounded-md'
            />
            {errors.message && (
              <p className='text-red-500 text-xs italic'>{errors.message}</p>
            )}
          </div>

          <motion.input
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type='submit'
            value='Send'
            className='w-full px-3 py-2 font-bold text-white bg-primary rounded-md cursor-pointer hover:bg-[#007b91]'
          />

          {successMessage && !failureMessage && (
            <p className='text-green-600 text-sm mt-2 text-center'>{successMessage}</p>
          )}
          {failureMessage && !successMessage && (
            <p className='text-red-500 text-sm mt-2 text-center'>{failureMessage}</p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactSection;
