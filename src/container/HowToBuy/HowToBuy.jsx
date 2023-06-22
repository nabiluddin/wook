import React from 'react'
import './HowToBuy.scss'
import slider1 from '../../assets/slider-1.png'
import slider2 from '../../assets/slider-2.png'
import slider3 from '../../assets/slider-3.png'
import slider4 from '../../assets/slider-4.png'
import img1 from '../../assets/01.png'
import img2 from '../../assets/02.png'
import img3 from '../../assets/03.png'
import img4 from '../../assets/04.png'
import arrow from '../../assets/arrow.png'
import { motion } from 'framer-motion';


function HowToBuy() {
  return (
    <div className='htb'>
    <motion.div     whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }} className="htb-head-txt">
        How To Buy
      </motion.div>

      <ul className='htb-ul'>
        <li >
          <img src={img1} alt="" className='slider-logo-num' />
          <img src={slider1} alt="" className="slider-logo" />
          <div className="content">
            <h2 className="htb-headt-txt">Get a Wallet</h2>
            <p className="htb-p-txt">Download Metamask or your wallet of choice from the app store or Google Play Store for free. Desktop users, download the Google Chrome extension by going to metamask.io.</p>
          </div>
          <img src={arrow} alt="" className='arrow-slider' />
        </li>
        <li>
          <img src={img2} alt="" className='slider-logo-num' />
          <img src={slider2} alt="" className="slider-logo" />
          <div className="content">
            <h2 className="htb-headt-txt">Get Some ETH</h2>
            <p className="htb-p-txt">Get Some ETH Have ETH in your wallet to switch to $WOOKIE. If you don’t have any ETH, you can buy directly on Metamask, transfer from another wallet, or buy on another exchange.</p>
          </div>
          <img src={arrow} alt="" className='arrow-slider' />

        </li>
        <li>
          <img src={img3} alt="" className='slider-logo-num' />
          <img src={slider3} alt="" className="slider-logo" />
          <div className="content">
            <h2 className="htb-headt-txt">Go to Uniswap</h2>
            <p className="htb-p-txt">Go to Uniswap Go to app.uniswap.org in Google Chrome or on the browser inside your Metamask app. Connect your wallet. Paste the token address into Uniswap, select Wookie, confirm. </p>
          </div>
          <img src={arrow} alt="" className='arrow-slider' />

        </li>
        <li>
          <img src={img4} alt="" className='slider-logo-num' />
          <img src={slider4} alt="" className="slider-logo" />
          <div className="content">
            <h2 className="htb-headt-txt">Hold $WOOKIEE</h2>
            <p className="htb-p-txt">HODL your $WOOKIEE HODL your $WOOKIEE until you need to pay your bills or buy a fricken boat or something! But the first rule of Wookiee, is HODL until the price is too good not to let go!</p>
          </div>
          <img src={arrow} alt="" className='arrow-slider' />

        </li>
      </ul>
    </div>
  )
}

export default HowToBuy