import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hoverButton, navigatePages, listHover } from './Variants';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      className="toppings container"
      variants={navigatePages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              variants={listHover}
              whileHover="hover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={hoverButton}
          animate="visible"
          whileHover="hover">
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;