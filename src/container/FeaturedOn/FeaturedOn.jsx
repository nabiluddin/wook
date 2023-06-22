import React from 'react'
import './FeaturedOn.scss'
import { motion } from 'framer-motion';
import l1 from '../../assets/forbes-logo.png'
import l2 from '../../assets/yahoo-news-logo.png'
import l3 from '../../assets/benzinga-logo.png'
import l4 from '../../assets/hackernoon-logo.png'
import l5 from '../../assets/c-logo.png'
import l6 from '../../assets/i-logo.png'
import l7 from '../../assets/m-logo.png'
import l8 from '../../assets/n-logo.png'
import l9 from '../../assets/b-logo.png'
import l10 from '../../assets/y-logo.png'
import l11 from '../../assets/ym-logo.png'
import l12 from '../../assets/t-logo.png'
import l13 from '../../assets/p-logo.png'
import l14 from '../../assets/d-logo.png'

import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import i8 from "../../assets/i8.png";
import i9 from "../../assets/i9.png";


function FeaturedOn() {
  return (
    <motion.div 
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className='featured-on'>
      <div className="fo-head-txt">
        Featured ON
      </div>
      <div className="fo-companies-bg-bxs">
        <div className="fr-1">
          <div className="logo"><img className="logo-img" src={l1} alt="l1" /></div>
          <div className="logo"><img className="logo-img" src={l2} alt="l2" /></div>
          <div className="logo"><img className="logo-img" src={l3} alt="l3" /></div>
          <div className="logo"><img className="logo-img" src={l4} alt="l4" /></div>
        </div>
        <div className="fr-1">
          <div className="logo"><img className="logo-img" src={l5} alt="l1" /></div>
          <div className="logo"><img className="logo-img" src={l6} alt="l2" /></div>
          <div className="logo"><img className="logo-img" src={l7} alt="l3" /></div>
          <div className="logo"><img className="logo-img" src={l8} alt="l4" /></div>
        </div>
        <div className="fr-1">
          <div className="logo"><img className="logo-img" src={l9} alt="l1" /></div>
          <div className="logo"><img className="logo-img" src={l10} alt="l2" /></div>
          <div className="logo"><img className="logo-img" src={l11} alt="l3" /></div>
          <div className="logo"><img className="logo-img" src={l12} alt="l4" /></div>
        </div>
      </div>
      <div className="fo-head-txt">
        Supported By
      </div>
      <div className="fo-spport-icon">
        <div className="support-logo"><img className="support-logo-img" src={l13} alt="l1" /></div>
        <div className="support-logo"><img className="support-logo-img" src={l14} alt="l1" /></div>
      </div>

      <div className="fo-head-txt">
        Contacts Us
      </div>
      <div className="bt-bx">
        <p className='fo-bt-txt'>For collabs or inquiries</p>
        <button className='email-btn'>hello@wookiees.io</button>
        <div className="fo-bt-icons">
          <img src={i1} alt="i1" className="fo-side-icons" />
          <img src={i2} alt="i2" className="fo-side-icons" />
          <img src={i3} alt="i3" className="fo-side-icons" />
          <img src={i4} alt="i4" className="fo-side-icons" />
          <img src={i5} alt="i5" className="fo-side-icons" />
          <img src={i6} alt="i6" className="fo-side-icons" />
          <img src={i7} alt="i7" className="fo-side-icons" />
          <img src={i8} alt="i8" className="fo-side-icons" />
          <img src={i9} alt="i9" className="fo-side-icons" />
        </div>
      </div>
    </motion.div>
  )
}

export default FeaturedOn