import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Website Landing Page Printing",
    description: "Website ini berisi tentang foto-foto yang pernah dikerjakan dan juga terdapat list pekerjaan yang bisa diorder.",
    image: "/Print.png", // Pastikan gambar ada di folder public/assets/
    demoLink: "https://rizquprinting.vercel.app/",
    repoLink: "https://github.com/Ikiicuy/rizquprinting-project.git"
  },
  {
    title: "Fake Shop",
    description: "Website fake shop yang dibuat dengan React dan Tailwind. (Belum menggunakan database, masih bersifat statis).",
    image: "/Shop.jpg",
    demoLink: "https://fakeshop-pi.vercel.app/",
    repoLink: "https://github.com/Ikiicuy/fake-shop.git"
  },
];

const Project = () => {
  return (
    <div id="projects" className="bg-black text-white p-6 md:p-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full max-w-screen-lg mx-auto"
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="bg-gray-900 p-6 rounded-xl">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl md:text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2 text-sm md:text-lg">{project.description}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm md:text-lg bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                Live Demo
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm md:text-lg bg-gray-700 rounded-lg hover:bg-gray-800 transition">
                View Code
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;
