import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // Fungsi untuk membuka link
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="contact" className=" text-white p-10 relative">
      <h2 className="text-3xl md:text-6xl 2xl:text-8xl font-bold text-center">Contact Me</h2>
      <div className="mt-5 flex flex-col lg:grid lg:grid-cols-2 justify-items-center items-center gap-6 lg:gap-2">
        <button
          onClick={() => openLink("https://www.instagram.com/kyuu.kyii")}
          className="flex items-center gap-4 text-pink-400 text-lg md:text-2xl hover:underline"
        >
          <FaInstagram /> Instagram
        </button>
        <button
          onClick={() => openLink("mailto:rickyocta32@gmail.com")}
          className="flex items-center gap-4 text-red-400 text-lg md:text-2xl hover:underline"
        >
          <FaEnvelope /> Email
        </button>
        <button
          onClick={() => openLink("https://www.linkedin.com/in/ricky-octavian-saputra-96813b33b")}
          className="flex items-center gap-4 text-blue-400 text-lg md:text-2xl hover:underline"
        >
          <FaLinkedin /> LinkedIn
        </button>
        <button
          onClick={() => openLink("https://github.com/Ikiicuy")}
          className="flex items-center gap-4 text-gray-400 text-lg md:text-2xl hover:underline"
        >
          <FaGithub /> GitHub
        </button>
      </div>
    </div>
  );
};

export default Contact;
