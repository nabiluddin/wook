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

      <Navbar />
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="right-bar">
          <img src={i1} alt="i1" className="home-side-icons" />
          <img src={i2} alt="i2" className="home-side-icons" />
          <img src={i3} alt="i3" className="home-side-icons" />
          <img src={i4} alt="i4" className="home-side-icons" />
          <img src={i5} alt="i5" className="home-side-icons" />
          <img src={i6} alt="i6" className="home-side-icons" />
          <img src={i7} alt="i7" className="home-side-icons" />
          <img src={i8} alt="i8" className="home-side-icons" />
          <img src={i9} alt="i9" className="home-side-icons" />
        </div>
      </motion.div>

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
          <div id="myDiv"  onClick={() =>  navigator.clipboard.writeText('Contract :- 0x24086EAb82DBDaa4771d0A5D')} className="home-contract">
            Contract :- 0x24086EAb82DBDaa4771d0A5D
          </div>
        </div>
        <div className="c-center">
          <div className="ellipse home-f-1">
            <button className="bop-btn">Buy on Pinksale</button>
          </div>
          <div className="ellipse home-f-2">
            <motion.img
              whileInView={{ opacity: [0, 1] , scale:[1, 1.1]}}
              transition={{ duration: 1 }}

              src={wkUp} alt="wkUp" className="wk-up" />
            <motion.img
              whileInView={{ opacity: [0, 1], scale:[1, 1.1],  }}
              transition={{ duration: 1 }} src={wkDn} alt="wkDn" className="wk-dn" />
          </div>

          {/* <img src={mainLogo} alt="logo" className="main-logo ellipse" /> */}
          <motion.img
            whileInView={{ scale:  1 }}
            whileHover={{ scale: 1.1 }}
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
        <img src={footerbar} alt="" />
      </div>



    </div>

  );
}

export default Home;
