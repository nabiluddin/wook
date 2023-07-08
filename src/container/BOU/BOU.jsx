import React from 'react'
import { motion } from 'framer-motion';
import './BOU.scss'
import bgBOU from '../../assets/bg-BOU.png'
import BOUimg from '../../assets/BOU-img.png'

function BOU() {
  return (
    <div className='BOU'>
      <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className="htb-head-txt">
        Buy on uniswap
      </motion.div>
      <div style={{backgroundImage : `url(${bgBOU})`}} className='bgBOU'>
      <img src={BOUimg} alt="" className='BOUimg' />

      </div>
    </div>
  )
}

export default BOU