import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hoverButton, opacityEffect } from './Variants';
import Loader from './Loader';

const Home = () => {

  return (
    <motion.div
      className="home container"
      variants={opacityEffect}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.1}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={hoverButton}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;