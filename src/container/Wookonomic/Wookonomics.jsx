import React from 'react'
import './Wookonomics.scss'
import chartImg from '../../assets/chart-woo.webp'
import { motion } from 'framer-motion';


function Wookonomics() {
  return (
    <motion.div  id='wookie'
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className='wooko'>
      <div className="wooko-head-txt">
        Wookieenomics
      </div>
      <div className="flex-row">
        <div className="wooko-fb-1">
          <p className='wooko-txt-lite'>Zero Taxes</p>
          <div className="wooko-bg-box">
            <p className="wooko-txt-head">Zero taxes, fair launch token sale</p>
            <p className="wooko-txt-para">That’s right, Wookiees don’t get all that confusing reflections crap! Keep it simple for all the Wookiees out there!</p>
          </div>
        </div>
        <div className="wooko-fb-1">
          <p className='wooko-txt-lite'>Liquidity Locked</p>
          <div className="wooko-bg-box">
            <p className="wooko-txt-head">No Wookiee Rugs, only Wookiee Fur!</p>
            <p className="wooko-txt-para">$WOOKIEE market on Uniswap will be liquidity locked for 180 days! Contract will be renounced prior to launch!</p>
          </div>
        </div>
        <div className="wooko-fb-1">
          <p className='wooko-txt-lite'>Audited & stuff</p>
          <div className="wooko-bg-box">
            <p className="wooko-txt-head">Stuff that makes you know we care...</p>
            <p className="wooko-txt-para">Our Smart Contract has been audited and other stuff to give you some confidence in the Wookiee way!</p>
          </div>
        </div>
      </div>
      <div className="bt-content">
        <div className="chart-img">
          <img src={chartImg} alt="chart" className='chart-img' />
        </div>
        <div className="side-content">
          <div className="total-supply">Total Supply : 420,000,000,000 $WOOKIEE</div>
          <p className="wooko-c-txt">
            We don't have to make things complicated: We don't charge any taxes when you buy or sell something (0% Buy/Sell TAX), and we don't have any sneaky hidden taxes either. That's all we do before we take off to the moon! 🚀🌙
          </p>
          <div className="token-info">Token Name: Wookiees <br />Token Ticker: $WOOKIEE <br />Total Supply: 420,000,000,000</div>
          <div className="wooko-bt-txt">
            <ul className='woo-list'>
              <li className='woo-li'>85% = Liquidity + Fair launch</li>
              <li className='woo-li'>8.1% = Air Drop</li>
              <li className='woo-li'>6.9% = future centralized exchange listings, bridges</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Wookonomics