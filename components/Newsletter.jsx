import React from "react";

const Newsletter = () => {
  return (
    <div className={`h-[60vh] flex items-center justify-center flex-col gap-3 font-semibold`}>
      <h1 className={`text-3xl md:text-4xl `}>NewsLetter</h1>
      <p className={`text-2xl md:text-3xl text-center font-light`}>Get timely updates from your favourite products.</p>
      <div className={`flex gap-3`}>
        <input  type="email" 
      name="email"
      className={`px-4 py-3 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring focus:border-gray-400`}
      placeholder="Your email" />
        <button  className={`px-[22px] py-[10px] rounded-3xl bg-gray-800 text-white border-none`}>Send</button>
      </div>
    </div>
  );
};

export default Newsletter;
