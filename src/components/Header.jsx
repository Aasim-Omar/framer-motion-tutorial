import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { svgVariants, pathVariants, slideDown } from "./Variants"

const Header = () => {
  return (
    <motion.header
      variants={slideDown}
      initial="hidden"
      animate="visible"
    >
      <Link to="/">
        <div className="logo">
          <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
            variants={svgVariants}
          >
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </motion.svg>
        </div>
      </Link>
      <div className="title">
        <motion.h1
          drag
          dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
        >Pizza Joint</motion.h1>
      </div>
    </motion.header>
  )
}

export default Header;