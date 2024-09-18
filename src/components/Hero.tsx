"use client";

import { useRef } from "react";
import { Flex } from "@radix-ui/themes";
import { motion, useScroll } from "framer-motion";
import ImageWithCaption from "./ImageWithCaption";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "end end"],
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className="h-[90vh]"
      id="about"
    >
      <motion.div
        ref={ref}
        initial={{ x: -200 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ opacity: scrollYProgress }}
        className=" w-[80%] md:w-full gap-8 md:gap-0 flex flex-col md:flex-row-reverse items-center justify-around p-10 shadow-2xl bg-white"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.h1
            variants={item}
            className="mb-1 text-center text-5xl uppercase"
          >
            Maths Tutoring
          </motion.h1>
          <motion.p variants={item} className="mb-10 text-xl text-center">
            Any Topic. Any Time.
          </motion.p>
          <motion.a
            variants={item}
            className="text-center border border-slate-700 p-3 mx-auto"
            href="#contact"
          >
            Contact me
          </motion.a>
        </motion.div>
        <ImageWithCaption
          src="/lecture.webp"
          description="Avi writing on chalkboard"
          caption="University of Warwick, Master of Mathematics. First Class."
          width={350}
          height={350}
        />
      </motion.div>
    </Flex>
  );
};

export default Hero;
