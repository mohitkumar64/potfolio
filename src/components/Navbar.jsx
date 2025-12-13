import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, scale : 0  },
  visible: {
    opacity: 1,
    scale : 1,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bg-zinc-600/50  rounded-full   top-6 left-45 md:left-1/2 -translate-x-1/2 z-200">
      <motion.div
        className="flex items-center md:gap-6 rounded-full  bg-neutral-900/70 border-white/10  md:px-8 md:py-3 backdrop-blur-md border shadow-lg"
        // 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
       
        whileHover={{
          scale: 1.02,
          
        }}
      >
        {navLinks.map((link) => (
          <motion.div key={link.name} variants={linkVariants}>
              <Link
            key={link.name}
            to={link.href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80} // adjust for fixed navbar
            variants={linkVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(link.name)}
            className={` text-md md:text-lg font-medium transition-colors cursor-pointer px-3 md:px-5 ${
              active === link.name
                ? "text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {link.name}
              </Link>
          </motion.div>
         

        ))}
      </motion.div>
    </nav>
  );
}
