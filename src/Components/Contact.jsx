import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "206cc97a-ae7f-41be-aeea-3e424308703c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Message Send Successfull")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("");
      }
    };
  
    return (
      <div className='text-center mt-20'>
        <p className='text-2xl font-medium text-gray-700 text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>SEND ME AN EMAIL</p>
        <p className="text-gray-400 mt-3">
          Send me an email for inquiries or collaboration opportunities
        </p>
  
        <form onSubmit={onSubmit} className='max-w-2xl pt-8 mx-auto'>
          <div className='flex flex-wrap w-full'>
            <div className='w-full text-left'>
              {/* Your Name */}
              <label className="block text-sm font-medium text-gray-700">
               Your Name
              </label>
              <input
                type="text"
                placeholder='Your Name'
                name='name'
                required
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              />
            </div>
          </div>
          <div className='flex flex-wrap w-full'>
            <div className='w-full  text-left mt-2'>
              {/* Your Email */}
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder='Your Email'
                name='email'
                required
                className='w-full border  border-gray-300 rounded py-3 px-4 mt-2'
              />
            </div>
          </div>
  
          <div className='my-6 text-left'>
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              className='w-full rounded py-3 px-4 mt-2 h-48 resize-none border border-gray-300'
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
  
          <button type='submit' className='bg-gradient-to-r from-red-500 to-blue-500 font-bold hover:bg-gray-300 transition duration-300 ease-in-out text-white py-2 px-12 mb-10 rounded'>
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    )
}

export default Contact
