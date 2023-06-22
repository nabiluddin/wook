import React from 'react'
import './Footer.scss'
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className='footer'>
      <p className="footer-up-txt">
        The Wookiee coin pays tribute to the iconic Wookiee meme and is not associated with any products, videos, productions, films or animation studios. The token is a nod to a beloved alien that is widely recognized and appreciated. WOOKIEE is a cryptocurrency based on a meme that has no inherent value or guarantee of financial return. It is in fact very risky to buy if you are looking for financial rewards. Participate only a meme enthusiast and collector rather than a speculator of future value. The coin does not have a formal team or a specific roadmap for development. There are some things outlined, but those are only bonus activities and may never come to fruition. It is a non-functional coin and exists solely for entertainment purposes. $WOOKIEE is not an investment of any form. Do not buy this expecting financial returns. Always consult a financial advisor before making any investment decisions.
      </p>
      <div className="footer-nav">
        <span className="footer-nav-item">About</span>
        <span className="footer-nav-item">How to Buy</span>
        <span className="footer-nav-item">Wookieenomics</span>
        <span className="footer-nav-item">Wookieemap</span>
        <span className="footer-nav-item">App</span>
      </div>
      <div className="footer-copyright">
        © 2023 Wookiees, All right Reserved
      </div>
    </motion.div>
  )
}

export default Footer