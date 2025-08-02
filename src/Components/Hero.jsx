import React from "react";
// import profileImg from "../../images/luke-pupilli.png"; // use your uploaded image

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto p-6 pt-24">
      <div className="max-w-xl">
        <p className="text-lg mb-2">Hola 👋</p>
        <h1 className="text-5xl font-bold">Luke Pupilli</h1>
        <p className="text-gray-300 mb-4">Fullstack developer from Pittsburgh, PA</p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-orange-500 text-white py-2 px-4 rounded-md">Contact Me</a>
          <a href="/Luke Pupilli SWE Resume.pdf" download className="border border-gray-300 py-2 px-4 rounded-md">Download Resume</a>
        </div>
      </div>
      <img src="../../images/luke-pupilli.png" alt="Luke Pupilli" className="rounded-xl w-64 h-64 object-cover mb-8 lg:mb-0" />
    </section>
  );
};

export default Hero;
