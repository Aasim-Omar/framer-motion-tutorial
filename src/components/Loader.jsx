import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { loaderVariants } from './Variants'

const Loader = () => {
  const [ animation, cycleAnimation ] = useCycle("animationOne", "animationTwo")
  return (
    <>
    <motion.div
      className="loader"
      variants={loaderVariants}
      animate={animation}
    />
    <p style={{cursor: "pointer"}} onClick={() => cycleAnimation()}>cycle animation</p>
    </>
  )
}

export default Loader