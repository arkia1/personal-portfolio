/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

const AboutMe = () => {
  const carouselRef = useRef(null);

  // Skills data with logos
  const skills = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "GitLab",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "SCSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
  ];

  // Duplicate skills for infinite loop effect
  const extendedSkills = [...skills, ...skills];

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const speed = 0.5;
    let isPaused = false;

    const scroll = () => {
      if (isPaused) return;

      scrollAmount += speed;
      carousel.scrollLeft = scrollAmount;

      // Reset scroll position to create infinite loop
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    // Handle pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
      requestAnimationFrame(scroll);
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    requestAnimationFrame(scroll);

    return () => {
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      className="w-full bg-white dark:bg-gray-800 py-16 md:py-24 "
      id="about"
    >
      <div className="container mx-auto px-4 md:px-6 overflow-hidden">
        <div className="flex flex-col items-center">
          {/* About Me Text - Centered */}
          <motion.div
            className="w-full max-w-3xl space-y-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            ></motion.div>

            <motion.p
              className="text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              I am a full-stack web developer and software engineering student
              with practical experience in building dynamic, responsive web
              applications. Currently interning at GUNSEL Company, I specialize
              in front-end development using React.js, TypeScript, and Tailwind
              CSS. On the backend, I excel with Node.js and Express—my go-to
              stack for building robust, scalable systems.
            </motion.p>

            <motion.p
              className="text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Beyond my professional experience, I collaborate with a research
              center at Near East University to develop and enhance AI-powered
              applications, focusing on prompt engineering and intelligent
              automation. My recent work has involved leveraging MongoDB for
              AI-driven data management and refining MySQL-based systems for
              optimized performance. I thrive in collaborative environments
              where effective communication and problem-solving drive team
              success. I am dedicated to continuous learning and innovation,
              always eager to contribute to projects that push the boundaries of
              technology.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  B.S. Software Engineering
                  <br />
                  Near East University, 2023-2027
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Frontend Developer at GÜNSEL Electric Vehicles
                  <br />
                  2024 - Present
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section Title */}
        <motion.div
          className="mt-24 mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some technologies I've been working with recently
          </p>
        </motion.div>

        {/* Skills Carousel - Fixed overflow */}
        <div className="relative w-full overflow-x-hidden">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10"></div>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 py-4 overflow-x-scroll w-full scrollbar-hide"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maxWidth: "100%",
            }}
          >
            {extendedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-none w-32 h-40 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-center font-medium text-gray-900 dark:text-gray-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
