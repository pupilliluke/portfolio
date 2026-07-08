import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import ProjectsHome from "../Components/ProjectsPrev";
import Contact from "../Components/Contact";
import { ContainerScroll } from "../Components/ContainerScroll";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl font-semibold text-white">
                Turning ideas into <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Shipped Products
                </span>
              </h2>
            </>
          }
        >
          <img
            src="/images/projects/crackingandstacking.png"
            alt="Featured project preview"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <About />
      <ProjectsHome />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
