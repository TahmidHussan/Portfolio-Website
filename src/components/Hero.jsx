import { HERO } from "../constants";
import tahmidImg from "../assets/tahmid.jpg";
import resumePDF from "../assets/resume.pdf"; 
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-ligher lg:text-4xl">{HERO.greeting}</p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        {/* Add the view resume button */}
        <a
          href={resumePDF}
          target="_blank" // Opens the resume in a new tab
          rel="noopener noreferrer" // Security enhancement
          className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 transition-all mb-8"
        >
          View Resume
        </a>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={tahmidImg}
            width={550}
            height={550}
            alt="tahmid"
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
