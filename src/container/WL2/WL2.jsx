import React from "react";
import "./WL2.scss";
import { motion } from 'framer-motion';
import logo from '../../assets/logo-wookie.png'
import Navbar from "../../components/Navbar/Navbar";
import mainLogo from "../../assets/main-logo.png";
import wkDn from "../../assets/wookieesdn.png";


import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import i8 from "../../assets/i8.png";
import i9 from "../../assets/gitbook_logo.png";

function WL2() {

  const copyToClipboard = () => {
    var textToCopy = document.getElementById("myDiv").innerText;

    // Create a temporary textarea element to hold the text
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Copy the text from the textarea to the clipboard
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Optionally, provide some visual feedback to the user
    alert("Content copied to clipboard: " + textToCopy);
  }
  return (



    <div className="WL1">

      <Navbar />
      <div
      >
        <div className="wl-right-bar-2">
        <a target="_blank" href="https://wookiees.medium.com/" rel="noreferrer">
            <img src={i1} alt="i1" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://www.pinksale.finance/launchpad/0x314857fa43243360440580Becb85686fAa606500?chain=ETH" rel="noreferrer">
            <img src={i2} alt="i2" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://t.me/wookieescoin" rel="noreferrer">
            <img src={i3} alt="i3" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://www.dexview.com/eth/0x7bD95684cA33b2bFC356A336CC7cF1e8AfAE0298" rel="noreferrer">
            <img src={i4} alt="i4" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://twitter.com/wookieescoin" rel="noreferrer">
            <img src={i5} alt="i5" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://coinmarketcap.com/" rel="noreferrer">
            <img src={i6} alt="i6" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://www.coingecko.com/" rel="noreferrer">
            <img src={i7} alt="i7" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://www.dextools.io/app/en/pairs" rel="noreferrer">
            <img src={i8} alt="i8" className="WL1-side-icons" /></a>
          <a target="_blank" href="https://wookiees.gitbook.io/wookiees/" rel="noreferrer">
            <img src={i9} alt="i9" className="WL1-side-icons" /></a>
        </div>
      </div>

      <div className="center-content-2">
        <div className="c-left">
          {/* <img src={cleft} alt="circle" className="circles" /> */}
          <a
            href="https://twitter.com/wookieescoin"
            style={{ textDecoration: "none" }}
          >
  
          </a>
          {/* <div id="myDiv" onClick={() => navigator.clipboard.writeText('Contract :- 0x24086EAb82DBDaa4771d0A5D')} className="WL1-contract">
            Contract :- 0x24086EAb82DBDaa4771d0A5D
          </div> */}
        </div>
        <div className="c-center">
          <div className="ellipse WL1-f-2">
            <div className="pulse1"></div>
            <div class="mybtns anim">

            <a target="_blank"  href="https://www.pinksale.finance/launchpad/0x314857fa43243360440580Becb85686fAa606500?chain=ETH">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Buy Now
              </a>
            </div>

          </div>
          <div className="ellipse WL1-f-2">
            <div className="pulse2"></div>
            {/* <motion.img
              whileInView={{ opacity: [0, 1], scale: [1, 1.1] }}
              transition={{ duration: 1 }}

              src={wkUp} alt="wkUp" className="wk-up" /> */}
            <p className="wk-up-2">
              wookiees whitelist 3500 spots
            </p>
            <motion.img
              whileInView={{ opacity: [0, 1], scale: [1, 1.1], }}
              transition={{ duration: 1 }} src={wkDn} alt="wkDn" className="wk-dn-2" />

            {/* <div className="WL1-audit">
                <img src={tick} alt="tick" className="tick" />
                <p>Audit By:</p>
                <img src={audit} alt="audit" className="audit"/>
              </div> */}
          </div>

          {/* <img src={mainLogo} alt="logo" className="main-logo ellipse" /> */}
          <motion.img

            src={mainLogo}
            alt='profile_circle'
            className="main-logo ellipse"
          />


        </div>
        <div className="c-right">
          <a
            href="https://twitter.com/wookieescoin"
            style={{ textDecoration: "none" }}
          >

          </a>
          {/* <img src={cright} alt="circle" className="circles" /> */}
        </div>
      </div>


      <div className="WL1-head-txt">
        Complete all Task To get whitelisted
      </div>
      <iframe src="https://taskon.xyz/campaign/detail/6015" width="100%" height="600px" frameborder="0" scrolling="yes"></iframe>


      <div className="wl-foo">
        <p className="footer-up-txt">
          <img src={logo} alt='img' className='nav-logo' />
        </p>
        <div className="footer-nav-2 reduce-mb">
          <span className="footer-nav-item"><a className='a-tag' href={ "/"}> About</a></span>
          <span className="footer-nav-item"><a className='a-tag' href={ "/"}> How to Buy</a></span>
          <span className="footer-nav-item"><a className='a-tag' href={"/"}>Wookieenomics</a> </span>

        </div>
        <div className="footer-nav-2">
          <span className="footer-nav-item"><a className='a-tag' href={"/"}>Wookieemap</a> </span>
          <span className="footer-nav-item"><a className='a-tag' href="#">App</a></span>
          <span className="footer-nav-item"><a className='a-tag' href="/wnft">WNFT</a></span>
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





    </div>

  );
}

export default WL2;
