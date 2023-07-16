import React from 'react'
import { motion } from 'framer-motion';
import './BOU.scss'
import bgBOU from '../../assets/bg-BOU.png'
import BOUimg from '../../assets/BOU-img.webp'


import { LazyLoadImage } from 'react-lazy-load-image-component';

function BOU() {
  return (
    <div className='BOU'>
      <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className="htb-head-txt">
        Buy on uniswap
      </motion.div>
      <div style={{backgroundImage : `url(${bgBOU})`}} className='bgBOU'>
      <LazyLoadImage src={BOUimg} alt="" className='BOUimg' />

      </div>
    </div>
  )
}

export default BOU