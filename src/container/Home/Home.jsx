import React, { useEffect } from "react";
import "./Home.scss";
import { motion } from 'framer-motion';
import Navbar from "../../components/Navbar/Navbar";
import cleft from "../../assets/left-circle.png";
import cright from "../../assets/right-circle.png";
import mainLogo from "../../assets/main-logo.webp";
import twitterImg from "../../assets/twitter-img.png";
import telegImg from "../../assets/teleg-img.png";
import wkUp from "../../assets/wookieesup.png";
import wkDn from "../../assets/wookieesdn.png";
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'
import tick from '../../assets/tick-circle.png'
import cv1 from '../../assets/cover_resized_1.jpg'

import pepeinputlogo from '../../assets/pepe-input-logo.png'
import ethinputlogo from '../../assets/eth-input-logo.png'
import wookieeinputlogo from '../../assets/wookiee-input-logo.png'
import usdt from '../../assets/usdt.png'
import bnbyel from '../../assets/bnb-yel.png'
import card from '../../assets/cards.png'
import btnbg from '../../assets/bg-btn.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';





import bgYel from '../../assets/bg-yel.png';
import bgYelDark from '../../assets/dark-bg-yel.png';


import { FiArrowUpRight } from "react-icons/fi";

import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import i8 from "../../assets/i8.png";
import i9 from "../../assets/gitbook_logo.png";

function Home() {

  const copyToClipboard = () => {
    var textToCopy = document.getElementById("myDiv").innerText;

     
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

     
    tempTextArea.select();
    document.execCommand("copy");

     
    document.body.removeChild(tempTextArea);

     
    alert("Content copied to clipboard: " + textToCopy);
  }

  useEffect(() => {
    window.addEventListener("load", function () {
      setTimeout(() => {
        open();  
      }, 100);
    });

    function open() {
      document.querySelector(".popup").style.display = "flex";
    }

    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector(".popup").style.display = "none";
    })
  })

  useEffect(() => {
    const input = document.querySelector('.input');
    const progress = document.querySelector('.progress-done');
    let finalValue = 50;
    let max = 0;

    function changeWidth() {
      progress.style.width = `${finalValue}%`
    }

   
    changeWidth()

     
    return () => {

    };
  }, []); 





  return (



    <motion.div className="home">
      <div className="popup">
        <button id="close">&times;</button>
        <iframe title="popup" className="popup-iframe" src="https://form.zootools.co/go/MmGZLkrdb0VEd5lHfBQB" frameborder="0"></iframe>
      </div>

      <Navbar check="true" className="navbar-top" />
      <div
      >
        <div className="right-bar">
          <a target="_blank" href="https://wookiees.medium.com/" rel="noreferrer">
            <LazyLoadImage src={i1} alt="i1" className="home-side-icons" /></a>
         <a target="_blank" href="https://t.me/wookieescoin" rel="noreferrer">
            <LazyLoadImage src={i3} alt="i3" className="home-side-icons" /></a>
          <a target="_blank" href="https://twitter.com/wookieescoin" rel="noreferrer">
            <LazyLoadImage src={i5} alt="i5" className="home-side-icons" /></a>
          <a target="_blank" href="https://coinmarketcap.com/" rel="noreferrer">
            <LazyLoadImage src={i6} alt="i6" className="home-side-icons" /></a>
          <a target="_blank" href="https://www.coingecko.com/" rel="noreferrer">
            <LazyLoadImage src={i7} alt="i7" className="home-side-icons" /></a>
          <a target="_blank" href="https://www.dextools.io/app/en/pairs" rel="noreferrer">
            <LazyLoadImage src={i8} alt="i8" className="home-side-icons" /></a>
          <a target="_blank" href="https://wookiees.gitbook.io/wookiees/" rel="noreferrer">
            <LazyLoadImage src={i9} alt="i9" className="home-side-icons" /></a>
        </div>
      </div>

      <div className="center-content c-and-la">
        <div className="center-content w-50">
          <div className="c-left ">
            <LazyLoadImage src={cleft} alt="circle" className="circles" />
            <a target="_blank" className="hidden"
              href="https://twitter.com/wookieescoin"
              style={{ textDecoration: "none" }} rel="noreferrer"
            >
              <button className="tw-btn-down">
                <LazyLoadImage src={twitterImg} alt="" />
                <p> Twitter </p>
                <FiArrowUpRight />
              </button>
            </a>
            <a target="_blank" className="hidden" style={{ textDecoration: "none" }} href="https://etherscan.io/token/0x7bD95684cA33b2bFC356A336CC7cF1e8AfAE0298" rel="noreferrer"> <div id="myDiv" onClick={() => navigator.clipboard.writeText('Contract :- 0x24086EAb82DBDaa4771d0A5D')} className="home-contract">
              Contract :- 0x7bD95684cA33b2bFC356A3<br />36CC7cF1e8AfAE0298
            </div></a>
          </div>
          <div className="home-c-center">
            <div className="ellipse home-f-1">
              <div className="pulse1"></div>
              <div class="mybtns anim hidden ">

                <a target="_blank" href="https://www.pinksale.finance/launchpad/0x314857fa43243360440580Becb85686fAa606500?chain=ETH" rel="noreferrer">
                  <span> </span>
                  <span> </span>
                  <span> </span>
                  <span> </span>
                  Buy Now
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

              <a href="https://github.com/cyberscope-io/audits/blob/main/wookiee/audit.pdf"
                className="home-audit"
              >
                <LazyLoadImage src={tick} alt="tick" className="tick" />
                <p>Audit By:</p>
                <LazyLoadImage src={cv1} alt="audit" className="audit" />
              </a>
            </div>



              <LazyLoadImage 
                src={mainLogo}
                effect="blur"
                className="main-logo ellipse "

              />



          </div>
          <div className="c-right hidden">
            <a target="_blank"
              href="https://t.me/wookieescoin"
              style={{ textDecoration: "none" }} rel="noreferrer"
            >
              <button className="tw-btn-up">
                <LazyLoadImage src={telegImg} alt="" />
                <p> Telegram </p>
                <FiArrowUpRight />
              </button>
            </a>
            <LazyLoadImage src={cright} alt="circle" className="circles" />
          </div>
        </div>

        <div className="la-right " style={{ backgroundImage: `url(${bgYel})` }}>
          <div className="next-price">
            <div className="n-c-1 progress-done"> </div>
            <div className="n-c-price text-white text-sm  pl-4 opacity-100">Until Next Price:$0.0000272</div>
          </div>
          <div className="usdt-raised">USDT Raised: $1,319,276.99 / $1,980,000</div>
          <div className="bg-hr-gradient">
            <div className="usdt-raised usdt2">1 $Wookiee AI = $0.0000000001200</div>
          </div>
          <div className="row-btn">
            <div className="bgs-bxs">
              <LazyLoadImage src={ethinputlogo} alt="eth" className="row-btn-logo" />
              <p className="row-btn-p">ETH</p>
            </div>
            <div className="bgs-bxs">
              <LazyLoadImage src={usdt} alt="eth" className="row-btn-logo" />
              <p className="row-btn-p usdt"><p style={{ fontSize: "1rem", marginBottom: "-3px", fontWeight: "500" }}> USDT</p> <p>ERC20</p> </p>
            </div>
            <div className="bgs-bxs">
              <LazyLoadImage src={card} alt="eth" className="row-btn-logo" />
              <p className="row-btn-p">CARD</p>
            </div>
          </div>
          <div className="bnb-balance">BNB balance 0</div>
          <div className="bg-hr-gradient-2"></div>
          <div className="two-inputs">
            <div className="each-input">
              <p>Amount in ETH you pay</p>
              <div className="input-container">
                <input type="number" name="" id="" />
                <LazyLoadImage src={ethinputlogo} alt="eth" className="row-btn-logo" />
              </div>
            </div>
            <div className="each-input">
              <p>Amount Wookiee you receive</p>
              <div className="input-container">
                <input type="number" name="" id="" />
                <LazyLoadImage src={wookieeinputlogo} alt="eth" className="row-btn-logo" />
              </div>
            </div>
          </div>
          <div className="f-text">0.015 ETH is reserved for gas. The actual amount used will depend on the network.</div>
          <button className="buy-now">Buy Now</button>
          <div className="list-price">LISTING PRICE: $0.0000336</div>
          <div><a target="_blank" className="list-price" href="https://widget.wert.io/default/widget/?commodity=ETH%3AEthereum" >Not enough ETH? Top up now</a></div>

        </div>
      </div>



      <div className="footerbar">


        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <LazyLoadImage src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f6} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f6} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f1} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f2} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f3} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f4} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f5} alt="f1" className="f1-home" />
            </div>
            <div className="slide">
              <LazyLoadImage src={f6} alt="f1" className="f1-home" />
            </div>

          </div>
        </div>
      </div>



    </motion.div>

  );
}

export default Home;
