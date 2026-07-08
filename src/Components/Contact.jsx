import React, { useRef, useState } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_9631w1s",
        "template_3c6vgui",
        formRef.current,
        "Japze5lLK06Pt1BUF"
      );
      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 4000,
      });
      setFormData({ name: '', email: '', message: '' });
      e.target.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Let's</span> <span className="text-slate-900 dark:text-white">Connect</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you're interested in working together, have a question, or just want to say hi — 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium"> my inbox is always open.</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left column - Contact Info */}
        <div className="space-y-8">
          <div className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                👨‍💻
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Luke Pupilli</h3>
                <p className="text-slate-500 dark:text-slate-400">Full Stack Developer • Pittsburgh, PA</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-sm">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email me at:</p>
                  <a
                    href="mailto:pupilli.dev@gmail.com"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    pupilli.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-sm">
                  📍
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Located in:</p>
                  <p className="text-slate-900 dark:text-white font-medium">Pittsburgh, Pennsylvania</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50">
              {[
                { icon: FaDiscord, href: "https://discord.com/users/luke_pup", color: "hover:text-indigo-400", bg: "hover:bg-indigo-500/10" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/luke-pupilli-b36a22258/", color: "hover:text-blue-400", bg: "hover:bg-blue-500/10" },
                { icon: FaGithub, href: "https://github.com/pupilliluke", color: "hover:text-white", bg: "hover:bg-white/10" },
                { icon: FaInstagram, href: "https://www.instagram.com/lukepupilli_", color: "hover:text-pink-400", bg: "hover:bg-pink-500/10" },
              ].map(({ icon: Icon, href, color, bg }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center p-3 rounded-xl text-slate-600 dark:text-slate-300 ${color} ${bg} transition-all duration-300 border border-slate-300 dark:border-slate-600/30 hover:border-slate-500/50 hover:scale-105 hover:-translate-y-1`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Contact Form */}
        <div>
          <form ref={formRef} onSubmit={sendEmail} className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl space-y-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-white/80 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600/50 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="bg-white/80 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600/50 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Let's build something amazing together..."
                  className="bg-white/80 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600/50 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 w-full resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full relative overflow-hidden ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;