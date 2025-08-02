import React, { useRef } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9631w1s",     // replace with your EmailJS service ID
        "template_3c6vgui",    // replace with your template ID
        formRef.current,
        "Japze5lLK06Pt1BUF"         // replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          e.target.reset();
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        (error) => {
          toast.error("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
      <p className="text-gray-300 mb-10 max-w-2xl">
        Whether you're interested in working together, have a question, or just want to say hi — my inbox is always open.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left column */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Luke Pupilli</h3>
            <p className="text-gray-400">Frontend Developer • Pittsburgh, PA</p>
          </div>

          <div className="text-sm text-gray-400">
            <p className="mb-1">Email me at:</p>
            <a
              href="mailto:pupilli.dev@gmail.com"
              className="text-blue-400 hover:underline"
            >
              pupilli.dev@gmail.com
            </a>
          </div>

          <div className="flex space-x-4 text-xl text-white mt-4">
            <a
              href="https://discord.com/users/luke_pup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaDiscord />
            </a>
            <a
              href="https://www.linkedin.com/in/luke-pupilli-b36a22258/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pupilliluke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/lukepupilli_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right column: form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Let's build something together..."
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-orange-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
