import React from 'react'
import { motion } from "framer-motion"
import { backDrop, modalEffect } from './Variants'
import { Link } from 'react-router-dom'



const Modal = ({ setShowModal }) => {
  return (
    <motion.div
      className="backdrop"
      variants={backDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setShowModal(false)}
    >
      <motion.div
        className="modal"
        variants={modalEffect}
      >
        <p>Want to make another pizza?</p>
        <Link to="/">
          <button>Ofcourse</button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Modal