import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img3.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Header />
      <Hero image={Image} title="" desc="what do you see?" more="Learn Less" />
    </motion.div>
  );
};

export default Services;
