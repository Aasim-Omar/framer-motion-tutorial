import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { navigatePages, opacityEffect } from './Variants';

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [])

  return (
    <motion.div
      className="container order"
      variants={navigatePages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order (:)</h2>
      <motion.p variants={opacityEffect}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={opacityEffect}>{pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}</motion.div>
    </motion.div>
  )

}

export default Order;