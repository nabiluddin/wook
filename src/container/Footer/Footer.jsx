import React from 'react'
import './Footer.scss'
import { motion } from 'framer-motion';


function Footer(props) {
  return (
    <div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className='footer'>
      
      <p className="footer-up-txt">
        The Wookiee coin pays tribute to the iconic Wookiee meme and is not associated with any products, videos, productions, films or animation studios. The token is a nod to a beloved alien that is widely recognized and appreciated. WOOKIEE is a cryptocurrency based on a meme that has no inherent value or guarantee of financial return. It is in fact very risky to buy if you are looking for financial rewards. Participate only a meme enthusiast and collector rather than a speculator of future value. The coin does not have a formal team or a specific roadmap for development. There are some things outlined, but those are only bonus activities and may never come to fruition. It is a non-functional coin and exists solely for entertainment purposes. $WOOKIEE is not an investment of any form. Do not buy this expecting financial returns. Always consult a financial advisor before making any investment decisions.
      </p>
      <div className="footer-nav reduce-mb">
        <span className="footer-nav-item"><a className='a-tag' href={props.check?"#about":"/"}> About</a></span>
        <span className="footer-nav-item"><a className='a-tag' href={props.check?"#htb":"/"}>How to Buy</a></span>
        <span className="footer-nav-item"><a  className='a-tag' href={props.check?"#wookie":"/"}>Wookieenomics</a> </span>

      </div>
      <div className="footer-nav">
        <span className="footer-nav-item"><a className='a-tag' href={props.check?"#woomap":"/"}>Wookieemap</a> </span>
        <span className="footer-nav-item"><a className='a-tag' href="#">App </a></span>
        <span className="footer-nav-item"><a className='a-tag' href="/wnft">WNFT </a></span>
        <li class="dropdown">
          Whitelist
          <ul class="dropdown-menu">
          <li><a href="/whitelist1">$250K Giveaway</a></li>
            <li><a href="/whitelist2">Whitelist 1</a></li>
            <li><a href="/whitelist3">Whitelist 2</a></li>
            <li><a href="/whitelist4">Whitelist 3</a></li>
          </ul>
        </li>
      </div>
      <div className="footer-copyright">
        © 2023 Wookiees, All right Reserved
      </div>
    </div>
  )
}

export default Footer