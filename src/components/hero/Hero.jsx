import React from 'react';
import Contact from '../contact/Contact';
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const buttonVariants = {
  initial: {
    y: 500, // Start from off-screen bottom
    opacity: 0,
  },
  animate: {
    y: 0, // Move to the original position
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};



const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleClick = (targetId) => {
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior:"smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Štefan Csank</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={buttonVariants} onClick={() => handleClick('Portfolio')}>
              See the Latest Works
            </motion.button>
            <motion.button variants={buttonVariants} onClick={() => handleClick('Contact')}>
              Contact Me
            </motion.button>
          </motion.div>

          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        html Python JavaScript
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
