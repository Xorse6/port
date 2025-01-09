// import React, { useState } from 'react'
// import { toast } from 'react-toastify';
// import twitter from "../assets/react.png";



// const Contact = () => {

//   const [result, setResult] = useState("");
  
//       // This prevent the reload of the page after form submission
//       // const onSubmitHandler = (event) =>{
//       //     event.preventDefault();
//       // }
    
//       const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);
    
//         formData.append("access_key", "206cc97a-ae7f-41be-aeea-3e424308703c");
    
//         const response = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           body: formData
//         });
    
//         const data = await response.json();
    
//         if (data.success) {
//           setResult("");
//           toast.success("Message Send Successfull")
//           event.target.reset();
//         } else {
//           console.log("Error", data);
//           toast.error(data.message);
//           setResult("");
//         }
//       };

//   return (
//     <div className='flex flex-col sm:flex-row  mt-5 mb-16 '>   
//       {/* Hero right */}
//       <div className='w-full sm:w-1/2 flex justify-center items-center py-3 sm:py-0'>
//         <div className='text-[#414141] mx-3'>
//           <div className='flex gap-2 items-center mb-3'>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//             <p className='font-medium text-sm md:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>
//               REACH OUT TO ME ON...
//             </p>
//           </div>

//           <div className='flex gap-2 items-center'>
//             <img src={twitter} alt="" className='w-16' />
//               <div className='ml-5'>
//                 <h5>ADDRESS</h5>
//                 <p className='font-medium text-sm md:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>
//                   AVORNYO&apos;S HSE <br />NO.24, FIAVE
//                 </p>
//               </div>
              
//           </div>
//           <div className='flex gap-2 items-center'>
//             <img src={twitter} alt="" className='w-16' />
//             <div className='ml-5'>
//                 <h5>PHONE</h5>
//                 <p className='font-medium text-sm md:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>
//                   +233-545-327-593
//                 </p>
//               </div>
//           </div>
//           <div className='flex gap-2 items-center'>
//             <img src={twitter} alt="" className='w-16' />
//             <div className='ml-5'>
//                 <h5>EMAIL</h5>
//                 <p className='font-medium text-sm md:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>
//                   WISDOMXORSE928@GMAIL.COM
//                 </p>
//               </div>
//           </div>
//           <div className='flex gap-2 items-center'>
//             <img src={twitter} alt="" className='w-16' />
//             <div className='ml-5'>
//                 <h5>EMAIL</h5>
//                 <p className='font-medium text-sm md:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>
//                   WISDOMXORSE928@GMAIL.COM
//                 </p>
//               </div>
//           </div>

          
//         </div>
//       </div>



//       {/* Hero left */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-3 sm:py-0'>
      
//         <form onSubmit={onSubmit} className='text-center max-w-2xl pt-8 mx-auto w-full '>
//             <p className='text-2xl font-medium text-gray-700 text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>SEND ME AN EMAIL</p>
//           <p className="text-gray-400 mt-3">
//             Send me an email for inquiries or collaboration opportunities
//           </p>
//           <div className='flex flex-wrap w-full'>
//               <div className='w-full text-left'>
//                 {/* Your Name */}
//                 <input
//                   type="text"
//                   placeholder='Your Name'
//                   name='name'
//                   required
//                   className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
//                 />
//               </div>
//           </div>

//           <div className='flex flex-wrap w-full'>
//             <div className='w-full  text-left mt-2'>
//               {/* Your Email */}
//               <input
//                 type="email"
//                 placeholder='Your Email'
//                 name='email'
//                 required
//                 className='w-full border  border-gray-300 rounded py-3 px-4 mt-2'
//               />
//             </div>
//           </div>

//           <div className='my-6 text-left'>
//             Message
//             <textarea
//               className='w-full rounded py-3 px-4 mt-2 h-48 resize-none border border-gray-300'
//               name="message"
//               placeholder="Your Message"
//               required
//             ></textarea>
//           </div>

//           <button type='submit' className='bg-gradient-to-r from-red-500 to-blue-500 font-bold hover:bg-gray-300 transition duration-300 ease-in-out text-white py-2 px-12 mb-10 rounded'>
//             {result ? result : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contact;


import React, { useState } from "react";
import { toast } from "react-toastify";
import twitter from "../assets/react.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "206cc97a-ae7f-41be-aeea-3e424308703c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully");
      event.target.reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-16 mt-8 mb-16">
      {/* Left Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-[2px] bg-[#414141]"></div>
          <p className="font-medium text-sm md:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
            REACH OUT TO ME ON...
          </p>
        </div>

        {[
          { label: "ADDRESS", value: "AVORNYO'S HSE\nNO.24, FIAVE" },
          { label: "PHONE", value: "+233-545-327-593" },
          { label: "EMAIL", value: "WISDOMXORSE928@GMAIL.COM" },
        ].map((info, index) => (
          <div key={index} className="flex gap-4 items-center">
            <img
              src={twitter}
              alt=""
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div>
              <h5 className="font-bold text-sm sm:text-base">{info.label}</h5>
              <p className="font-medium text-sm sm:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text whitespace-pre-line">
                {info.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
        >
          <p className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
            SEND ME AN EMAIL
          </p>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Send me an email for inquiries or collaboration opportunities.
          </p>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-2 border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              required
              className="w-full mt-2 border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500 h-32"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold py-2 rounded-md hover:opacity-90 transition duration-300"
          >
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


