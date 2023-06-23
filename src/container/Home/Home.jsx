import React from "react";
import "./Home.scss";
import { motion } from 'framer-motion';
import Navbar from "../../components/Navbar/Navbar";
import cleft from "../../assets/left-circle.png";
import cright from "../../assets/right-circle.png";
import mainLogo from "../../assets/main-logo.png";
import twitterImg from "../../assets/twitter-img.png";
import telegImg from "../../assets/teleg-img.png";
import footerbar from "../../assets/footerbar.png";
import wkUp from "../../assets/wookieesup.png";
import wkDn from "../../assets/wookieesdn.png";
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'
import tick from '../../assets/tick-circle.png'
import audit from '../../assets/audit-block.png'


import { FiArrowUpRight } from "react-icons/fi";

import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import i8 from "../../assets/i8.png";
import i9 from "../../assets/i9.png";

function Home() {

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



    <div className="home">

      <Navbar check="true" className="navbar-top" />
      <div
      >
        <div className="right-bar">
          <img src={i1} alt="i1" className="home-side-icons" />
          <img src={i2} alt="i2" className="home-side-icons" />
          <img src={i3} alt="i3" className="home-side-icons" />
          <img src={i4} alt="i4" className="home-side-icons" />
          <a  href="https://twitter.com/wookieescoin">
          <img src={i5} alt="i5" className="home-side-icons" /></a>
          <img src={i6} alt="i6" className="home-side-icons" />
          <img src={i7} alt="i7" className="home-side-icons" />
          <img src={i8} alt="i8" className="home-side-icons" />
          <a href="https://zealy.io/c/wookiees/questboard">
          <img src={i9} alt="i9" className="home-side-icons" /></a>
        </div>
      </div>

      <div className="center-content">
        <div className="c-left">
          <img src={cleft} alt="circle" className="circles" />
          <a 
            href="https://twitter.com/wookieescoin"
            style={{ textDecoration: "none" }}
          >
            <button className="tw-btn-down">
              <img src={twitterImg} alt="" />
              <p> Twitter </p>
              <FiArrowUpRight />
            </button>
          </a>
          <div id="myDiv" onClick={() => navigator.clipboard.writeText('Contract :- 0x24086EAb82DBDaa4771d0A5D')} className="home-contract">
            Contract :- 0x24086EAb82DBDaa4771d0A5D
          </div>
        </div>
        <div className="home-c-center">
          <div className="ellipse home-f-1">
            <div className="pulse1"></div>
            <div class="mybtns anim">

              <a  href="https://www.pinksale.finance/">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Buy on Pinksale
              </a>
            </div>

          </div>
          <div className="ellipse home-f-2">
            <div className="pulse2"></div>
            <motion.img
              whileInView={{ opacity: [0, 1], scale: [1, 1.1] }}
              transition={{ duration: 1 }}

              src={wkUp} alt="wkUp" className="home-wk-up" />
            <motion.img
              whileInView={{ opacity: [0, 1], scale: [1, 1.1], }}
              transition={{ duration: 1 }} src={wkDn} alt="wkDn" className="home-wk-dn" />

              <div className="home-audit">
                <img src={tick} alt="tick" className="tick" />
                <p>Audit By:</p>
                <img src={audit} alt="audit" className="audit"/>
              </div>
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
            <button className="tw-btn-up">
              <img src={telegImg} alt="" />
              <p> Telegram </p>
              <FiArrowUpRight />
            </button>
          </a>
          <img src={cright} alt="circle" className="circles" />
        </div>
      </div>



      <div className="footerbar">

        {/* <img src={footerbar} alt="" /> */}

        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f6} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f6} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f6} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f6} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f6} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <img src={f6} alt="f1" className="f1-home" />
            </div>

          </div>
        </div>
      </div>



    </div>

  );
}

export default Home;
