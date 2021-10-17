import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from "../images/img2.jpg";
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const About = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationTwo}
        >
            <Header />
            <Hero 
            image={Image}
            title="Beatiful views(?)"
            desc="Never seen(?) before"
            more="Learn More" 
            />
        </motion.div>
    )
}

export default About;