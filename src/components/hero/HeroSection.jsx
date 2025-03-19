/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HERO_PIC from "../../assets/me-removebg-preview.png";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-gray-50 dark:bg-gray-900 min-h-screen pt-24 pb-12 px-4 md:px-6 flex items-center"
      id="hero"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Text Content with Animation */}
          <motion.div
            className="w-full md:w-1/2 space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Arkia Ebrahimi
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full-Stack Developer | Frontend Specialist | React.js & Tailwind
              CSS Expert | Skilled in Express.js, AI Prompt Engineering &
              Database Management (MongoDB, MySQL)
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I create beautiful, responsive web applications with attention to
              detail and focus on user experience. With over A years of
              experience in web development, I've helped businesses transform
              their ideas into reality.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="sm:w-5 sm:h-5 hover:rotate-90 transition-transform duration-300"
                />
              </motion.a>

              <motion.a
                href="#contact"
                className="bg-transparent border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-full opacity-10"
                animate={{
                  x: [0, 8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              ></motion.div>

              <motion.div
                className="relative w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={HERO_PIC}
                  alt="Your Name - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
