import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
const MainDesign = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-left"
        // className="w-full h-screen object-cover object-left scale-x-[1]"
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1480"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Judito Rosco
          </h1>
          <h2 className="flex sm:text-2xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Programmer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "a dedicated person",
                2000,
                "and a God-fearing",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDesign;
