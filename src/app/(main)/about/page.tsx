import MyPhoto from "@/components/my-photo";
import AboutMe from "@/components/sections/about-me";
import SkillsSection from "@/components/sections/skill-section";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <div className="space-y-6 lg:space-y-12">
      <div className="flex gap-6 flex-col md:flex-row items-center">
        {/* <MyPhoto /> */}
      <img src="images/grad.jpg" alt="Graduation Picture" className="rounded-full w-52 h-72 "/>
        <div>
          <h2 className="text-2xl font-bold style=margin-top:10vh">Education</h2>
          <p className="text-lg">Bachelor of Science in Computer Science, West Virginia University</p>
          <p className="text-md">Graduated: Dec 2024</p>

          <h3 className="text-xl font-semibold mt-4">Relevant Coursework</h3>
          <ul className="list-disc pl-6">
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
            <li>Web Development</li>
            <li>Database Management Systems</li>
            <li>Machine Learning</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Notable Projects</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>PICARD - Capstone</strong> A .NET application that allows users to test their machine learning algorithms on big data sets. 
            </li>
            <li>
              <strong>Fitness Tracking Management System:</strong> Built using Spring Boot and Java, allowing users to navigate and log their fitness journey in a user friendly web application.
            </li>
            
          </ul>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
};

export default About;
