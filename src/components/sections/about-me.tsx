import AnimationContainer from "../animated/animated-container";

const AboutMe = () => {
  return (
    <AnimationContainer className="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center md:text-left text-white lg:text-start">
        About me
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Hi, I&apos;m Luke Pupilli! I&apos;m a passionate developer with a love
        for turning ideas into digital experiences. With a focus on clean code
        and creative solutions, I enjoy building projects that solve real-world
        problems. When I&apos;m not coding, I&apos;m working out, going on hikes,
        and watching sports.
      </p>
    </AnimationContainer>
  );
};
export default AboutMe;
