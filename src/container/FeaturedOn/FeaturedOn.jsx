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
import i9 from "../../assets/gitbook_logo.png";

import { LazyLoadImage } from 'react-lazy-load-image-component';


function FeaturedOn() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className='featured-on'>
      <div className="fo-head-txt">
        Featured on
      </div>
      <div className="fo-companies-bg-bxs">
        <div className="fr-1">
          <div className="logo">
            <a  href="https://www.forbes.com/?sh=7160c72b2254">
              <LazyLoadImage className="logo-img" src={l1} alt="l1" />
            </a>
          </div>
          <div className="logo">
            <a  href="https://news.yahoo.com/">
              <LazyLoadImage className="logo-img" src={l2} alt="l2" /></a>
          </div>
          <div className="logo">
            <a  href="https://www.benzinga.com/">
              <LazyLoadImage className="logo-img" src={l3} alt="l3" /></a>
          </div>
          <div className="logo">
            <a  href="https://hackernoon.com/">
              <LazyLoadImage className="logo-img" src={l4} alt="l4" /></a>
          </div>
        </div>
        <div className="fr-1">
          <div className="logo">
            <a  href="https://coincodex.com/">
              <LazyLoadImage className="logo-img" src={l5} alt="l1" /></a>
          </div>
          <div className="logo">
            <a  href="https://www.investing.com/">
              <LazyLoadImage className="logo-img" src={l6} alt="l2" /></a>
          </div>
          <div className="logo"><a  href="https://www.marketwatch.com/">
            <LazyLoadImage className="logo-img" src={l7} alt="l3" /></a>
          </div>
          <div className="logo"><a  href="https://www.newsbtc.com/">
            <LazyLoadImage className="logo-img" src={l8} alt="l4" /></a>
          </div>
        </div>
        <div className="fr-1">
          <div className="logo"><LazyLoadImage className="logo-img" src={l9} alt="l1" /></div>
          <div className="logo"><a  href="https://finance.yahoo.com/">
            <LazyLoadImage className="logo-img" src={l10} alt="l2" /></a></div>
          <div className="logo"><a  href="https://finance.yahoo.com/">
            <LazyLoadImage className="logo-img" src={l11} alt="l3" /></a></div>
          <div className="logo"><a  href="https://www.thestreet.com/">
            <LazyLoadImage className="logo-img" src={l12} alt="l4" /></a></div>
        </div>
      </div>
      <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className="fo-head-txt">
        Supported By
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="fo-spport-icon">
       <a target='_blank' rel="noreferrer" href="https://panteracapital.com/"> <div className="support-logo"><LazyLoadImage className="support-logo-img" src={l13} alt="l1" /></div></a>
       <a target='_blank' rel="noreferrer" href="https://dcg.co/portfolio"> <div className="support-logo"><LazyLoadImage className="support-logo-img" src={l14} alt="l1" /></div></a>
      </motion.div>

      <motion.div
       whileInView={{ y: [0], opacity: [ 1] }} transition={{ duration: 0.5 }}
       className="fo-head-txt">
        Contacts us
      </motion.div>
      <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className="bt-bx">
        <p className='fo-bt-txt'>For collabs or inquiries</p>
        <button className='email-btn'>
          <a href="mailto:hello@wookiees.io" >
          hello@wookiees.io</a></button>
        <div className="fo-bt-icons">
          {/* <LazyLoadImage src={i1} alt="i1" className="fo-side-icons" />
          <LazyLoadImage src={i2} alt="i2" className="fo-side-icons" />
          <LazyLoadImage src={i3} alt="i3" className="fo-side-icons" />
          <LazyLoadImage src={i4} alt="i4" className="fo-side-icons" />
          <LazyLoadImage src={i5} alt="i5" className="fo-side-icons" />
          <LazyLoadImage src={i6} alt="i6" className="fo-side-icons" />
          <LazyLoadImage src={i7} alt="i7" className="fo-side-icons" />
          <LazyLoadImage src={i8} alt="i8" className="fo-side-icons" />
          <LazyLoadImage src={i9} alt="i9" className="fo-side-icons" /> */}
          <a target="_blank" href="https://wookiees.medium.com/" rel="noreferrer">
            <LazyLoadImage src={i1} alt="i1" className="fo-side-icons" /></a>
          {/* <a target="_blank" href="https://www.pinksale.finance/launchpad/0x314857fa43243360440580Becb85686fAa606500?chain=ETH" rel="noreferrer">
            <LazyLoadImage src={i2} alt="i2" className="fo-side-icons" /></a> */}
          <a target="_blank" href="https://t.me/wookieescoin" rel="noreferrer">
            <LazyLoadImage src={i3} alt="i3" className="fo-side-icons" /></a>
          {/* <a target="_blank" href="https://www.dexview.com/eth/0x7bD95684cA33b2bFC356A336CC7cF1e8AfAE0298" rel="noreferrer">
            <LazyLoadImage src={i4} alt="i4" className="fo-side-icons" /></a> */}
          <a target="_blank" href="https://twitter.com/wookieescoin" rel="noreferrer">
            <LazyLoadImage src={i5} alt="i5" className="fo-side-icons" /></a>
          <a target="_blank" href="https://coinmarketcap.com/" rel="noreferrer">
            <LazyLoadImage src={i6} alt="i6" className="fo-side-icons" /></a>
          <a target="_blank" href="https://www.coingecko.com/" rel="noreferrer">
            <LazyLoadImage src={i7} alt="i7" className="fo-side-icons" /></a>
          <a target="_blank" href="https://www.dextools.io/app/en/pairs" rel="noreferrer">
            <LazyLoadImage src={i8} alt="i8" className="fo-side-icons" /></a>
          <a target="_blank" href="https://wookiees.gitbook.io/wookiees/" rel="noreferrer">
            <LazyLoadImage src={i9} alt="i9" className="fo-side-icons" /></a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FeaturedOn