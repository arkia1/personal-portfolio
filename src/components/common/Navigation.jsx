/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    //{ name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    //{ name: "Blog", link: "#blog" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, link: "https://github.com/arkia1" },
    {
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/arkia-ebrahimi/",
    },
    // { icon: <Twitter size={20} />, link: "https://twitter.com/" },
  ];

  // Animation variants
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${
          scrolled ? "max-w-7xl" : "max-w-6xl"
        }`}
      >
        <motion.div
          className={`
            rounded-lg 
            ${scrolled ? "bg-white/10" : "bg-white/5"} 
            backdrop-blur-lg 
            border border-white/10
            shadow-xl
            transition-all duration-300
          `}
          layout
          initial={{ borderRadius: 16 }}
          animate={{
            borderRadius: scrolled ? 12 : 16,
            boxShadow: scrolled
              ? "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
              : "0 10px 20px -15px rgba(0, 0, 0, 0.2)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <a
                href="#home"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
              >
                Arkia
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="hidden md:flex items-center space-x-8"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="text-blue-400 hover:text-white font-medium transition-colors duration-300 text-sm tracking-wide"
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}

              <div className="h-6 w-px bg-white/20"></div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500/70 hover:text-white transition-colors duration-300"
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="text-blue-400 hover:text-blue-300 focus:outline-none transition-colors duration-300"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} className="to-blue-400" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden border-t border-white/10 overflow-hidden"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="px-4 pt-2 pb-3 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      className="block px-3 py-2 text-base font-medium text-blue-400 hover:bg-white/10 hover:text-white rounded-md transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                      variants={navItemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  {/* Social Icons for Mobile */}
                  <motion.div
                    className="flex items-center space-x-6 px-3 py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500/70 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navigation;
