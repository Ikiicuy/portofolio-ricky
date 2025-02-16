
import React, { useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleScroll = useCallback((e) => {
    e.preventDefault();
    const target = document.getElementById("about");
    target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-cover bg-center">
      {/* Konten Hero */}
      <div className="relative text-center bg-black bg-opacity-50 rounded-lg">
        <div className="max-w-md lg:min-w-screen mb-16 justify-items-center">
          <h1 className="text-3xl md:text-6xl 2xl:text-8xl font-bold text-white
          break-words
          lg:whitespace-nowrap">
            Ricky Octavian Saputra
          </h1>
          <p className="mt-3 justify-items-center text-white text-md md:text-3xl
          2xl:text-3xl font-semibold p-8 max-w-screen">
          Saya seorang programmer junior yang
            <span className=" text-blue-200 ">
              <Typewriter
                words={[
                  " Inovatif dan Kreatif yang siap berkembang dan maju bersama",
                ]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </p>
          <a
            href="#about"
            className="btn btn-primary lg:w-80 lg:text-2xl text-white"
            onClick={handleScroll}
          >
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
