import React from 'react'
import './Wookiemap.scss'
import miniWookie from '../../assets/mini-wookie.png'
import { motion } from 'framer-motion';

import woopath from '../../assets/path-woo.png'

function Wookiemap() {
  return (
    <motion.div id='woomap'
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className='woo-map'>
      <div className="map-head-txt">
        Wookieemap
      </div>

      <img src={woopath} alt="woopath" className='woopath' />

      <div className="phases phase-1">
        <p className="phase-head">Phase 1</p>
        <ul className='map-ul'>
          <li className='map-li'>
            Fair Launch
          </li>
          <li className='map-li'>
            Attracting 1,000+ Holders
          </li>
          <li className='map-li'>
            ReleaseCoinGecko/Coinmarketcap Listings
          </li>
          <li className='map-li'>
            Use the power of memes to get $Wookiee trending
          </li>
        </ul>
      </div>
      <div className="cover-1">
        <img src={miniWookie} alt="miniWookie"  className='miniWookie-1'/>
        <div className="phases phase-2">
          <p className="phase-head">Phase 2</p>
          <ul class="map-ul">
            <li class="map-li">Community Collaborations and Partnerships</li>
            <li class="map-li">Creation of a token-gated Whale Telegram group, exclusively for $Wookiee holders</li>
            <li class="map-li">$WOOKIEE NFT</li>
            <li class="map-li">Listings on Centralized Exchanges (CEX) with a goal of achieving 10,000+ holders</li>
          </ul>

        </div>
      </div>
      <div className="cover-2">
      <img src={miniWookie} alt="miniWookie" className='miniWookie-2' />

        <div className="phases phase-3">
          <p className="phase-head">Phase 3</p>
          <ul class="map-ul">
            <li class="map-li">Listings on Tier 1 Exchanges with a goal of achieving 100,000+ holders</li>
            <li class="map-li">Complete domination of the meme space with $Wookiee</li>
            <li class="map-li">$WOOKIEE Finance, $WOOKIEE Swap, $WOOKIEE Pad</li>
          </ul>

        </div>
      </div >


    </motion.div>
  )
}

export default Wookiemap