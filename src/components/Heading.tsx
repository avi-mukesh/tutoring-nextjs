"use client";
import React from "react";
import { motion } from "framer-motion";

type PropsType = {
  title: string;
  subtitle?: string;
};

const Heading = ({ title, subtitle }: PropsType) => {
  const offscreen = { y: 70, opacity: 0 };
  const onscreen = {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  };

  return (
    <motion.div initial={offscreen} whileInView={onscreen}>
      <h2 className="text-3xl text-center my-2">{title}</h2>
      {subtitle && <p className="text-center text-lg">{subtitle}</p>}
    </motion.div>
  );
};

export default Heading;
