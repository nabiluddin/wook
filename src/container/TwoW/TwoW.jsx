import React from "react";
import wLite from "../../assets/wookiees-lite.png";
import bitWoo from "../../assets/bit-woo.webp";
import './TwoW.scss'
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function TwoW() {
  return (
    <motion.div id="about"
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }} className="two-w">
      <div className="float-left">
        <div className="two-head-txt">
          <LazyLoadImage src={wLite} alt="" className="wlite" />
          <p className="two-head-txt-up">The wookiees have arrived</p>
        </div>
        <div className="two-text-up">Once upon a time, in a distant future, the humans had destroyed their planet through endless wars and the use of atomic bombs. The once-beautiful Earth was now a barren wasteland, devoid of life and hope. The few surviving humans had retreated into underground bunkers, desperate to eke out a meager existence in the shadows. They had forsaken their once-great civilization, leaving behind nothing but ruins and dust.</div>
        <div className="two-text-dn">But then, one day, something miraculous happened. From the skies, a group of Wookiees descended upon the ruined planet. These creatures, who hailed from a distant galaxy, were surprised and saddened to see the devastation that had been wrought upon Earth. The Wookiees were a peaceful species, but they were also skilled in the ways of combat. They had come to restore order and bring hope to the few remaining humans who had survived the apocalypse.</div>
        <a style={{textDecoration:"none", color:"#C38154"}} href="https://wookiees.gitbook.io/wookiees/"><button className="read-more"> Read Wookieefesto</button></a>
      </div>
      <div className="img-float-right">
        {/* <div className="pulse1"></div> */}
        {/* <div className="pulse2"></div> */}
        <LazyLoadImage src={bitWoo} alt="bitwoo" className="img-right-float" />
      </div>
    </motion.div>
  );
}

export default TwoW;
