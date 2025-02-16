import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiDaisyui } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className=" bg-black justify-items-center text-white p-10">
      <h2 className="text-3xl md:text-6xl 2xl:text-8xl font-bold text-center">About Me</h2>
      <p className="text-center mt-10 max-w-screen text-2xl md:text-3xl
      2xl:text-4xl mx-auto">
        Saya adalah seorang <span className="font-semibold text-blue-200">Web Developer</span> dengan fokus pada <span className="font-semibold text-blue-200">React.js</span> dan pengalaman dalam membangun website interaktif yang responsif.
        Dengan keahlian dalam <span className="font-semibold text-green-200">Tailwind CSS, DaisyUI, dan SwiperJS</span>, saya selalu berusaha menciptakan antarmuka yang modern dan menarik.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4 max-w-3xl
      mx-auto bg-[#f7f7f7] p-5 rounded-xl text-black">
        <FaHtml5 className="text-red-500 text-4xl" />
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <FaJs className="text-yellow-400 text-4xl" />
        <FaNodeJs className="text-green-500 text-4xl" />
        <FaReact className="text-blue-300 text-4xl" />
        <SiExpress className="text-gray-500 text-4xl" />
        <SiTailwindcss className="text-teal-400 text-4xl" />
        <SiDaisyui className="text-purple-400 text-4xl" />
        <FaDatabase className="text-indigo-500 text-4xl" />
      </div>
    </div>
  );
};


export default About;
