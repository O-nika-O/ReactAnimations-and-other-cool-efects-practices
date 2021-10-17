import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from "../images/img1.jpg";
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';


const Home = () => {
    
    return (
        <motion.div
        initial="out"
        animate="in"
        variants={animationOne}
        transition={transition}
        >
            <Header />
            <Hero 
            image={Image} 
            title='Experience soul'
            desc={["Once in a lifetime,", <br />,
            "literally.", <br />,
            " Unless..."]}
            more="Learn More"
            />
        </motion.div>
    )
}

export default Home
