import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "./WNFT.scss";
import { motion } from "framer-motion";
import logo from "../../assets/logo-wookie.png";
import Navbar from "../../components/Navbar/Navbar";
import mainLogo from "../../assets/main-logo.webp";
import wkDn from "../../assets/wookieesdn.png";
import ethimg from "../../assets/eth-img.png";

import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import f6 from "../../assets/f6.png";

import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import i8 from "../../assets/i8.png";
import i9 from "../../assets/gitbook_logo.png";
import cardimg from '../../assets/cardimg.png';

function WNFT() {
  const copyToClipboard = () => {
    var textToCopy = document.getElementById("myDiv").innerText;

    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);

    alert("Content copied to clipboard: " + textToCopy);
  };
  useEffect(() => {
    $(document).ready(function () {
      $(".minus")
        .off()
        .click(function () {
          var $input = $(this).parent().find("input");
          var count = parseInt($input.val()) - 1;
          count = count < 1 ? 1 : count;
          $input.val(count);
          $input.change();
          return false;
        });

      $(".plus")
        .off()
        .click(function () {
          var $input = $(this).parent().find("input");
          $input.val(parseInt($input.val()) + 1);
          $input.change();
          return false;
        });
    });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef();

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="WL1">
      {/* <Navbar nft="nft" /> */}
      <Navbar />
      <div>
        <div className="wl-right-bar-1">
          <a
            target="_blank"
            href="https://wookiees.medium.com/"
            rel="noreferrer"
          >
            <img src={i1} alt="i1" className="WL1-side-icons" />
          </a>
          {/* <a target="_blank" href="https://www.pinksale.finance/launchpad/0x314857fa43243360440580Becb85686fAa606500?chain=ETH" rel="noreferrer">
            <img src={i2} alt="i2" className="WL1-side-icons" /></a> */}
          <a target="_blank" href="https://t.me/wookieescoin" rel="noreferrer">
            <img src={i3} alt="i3" className="WL1-side-icons" />
          </a>
          {/* <a target="_blank" href="https://www.dexview.com/eth/0x7bD95684cA33b2bFC356A336CC7cF1e8AfAE0298" rel="noreferrer">
            <img src={i4} alt="i4" className="WL1-side-icons" /></a> */}
          <a
            target="_blank"
            href="https://twitter.com/wookieescoin"
            rel="noreferrer"
          >
            <img src={i5} alt="i5" className="WL1-side-icons" />
          </a>
          <a target="_blank" href="https://coinmarketcap.com/" rel="noreferrer">
            <img src={i6} alt="i6" className="WL1-side-icons" />
          </a>
          <a target="_blank" href="https://www.coingecko.com/" rel="noreferrer">
            <img src={i7} alt="i7" className="WL1-side-icons" />
          </a>
          <a
            target="_blank"
            href="https://www.dextools.io/app/en/pairs"
            rel="noreferrer"
          >
            <img src={i8} alt="i8" className="WL1-side-icons" />
          </a>
          <a
            target="_blank"
            href="https://wookiees.gitbook.io/wookiees/"
            rel="noreferrer"
          >
            <img src={i9} alt="i9" className="WL1-side-icons" />
          </a>
        </div>
      </div>

      <div className="wnft-center-content-1">
        <div className="c-center">
          <div className="ellipse WL1-f-1">
            <div className="pulse1"></div>
            <div class="mybtns anim">
              <a
                target="_blank"
                href="https://www.pinksale.finance/launchpad/0x314857fa43243360440580Becb85686fAa606500?chain=ETH"
              >
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Claim Now
              </a>
            </div>
          </div>
          <div className="ellipse WL1-f-2">
            <div className="pulse2"></div>
            <p className="wnft-up-1">
              Wookiee NFT Drop Sale

              <p className="wnft-up-1 below-ht">
                Get ready for an incredible opportunity!
              </p>
            </p>
          </div>

          <motion.img
            src={mainLogo}
            alt="profile_circle"
            className="main-logo ellipse"
          />
        </div>
        <motion.div
          className="nft-drop"
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="nft-drop-bgbox ">
            <div className="under-bgbox glass-shine-effect">
              <div className="WNFT-head-txt">Wookiees NFT Drop</div>
              <p className="wnft-head-desc">
                Earn over $1 million in rewards by holding our exclusive
                $wookieeNFTs. The more NFTs you own, the greater the rewards.{" "}
              </p>

              <div className="nft-drop-desc">
                {/* Don't miss out! Mint and trade our limited edition $wookieeNFTs on
                Opensea today to join the elite and enjoy fantastic benefits.
                Seize this chance to be a part of something extraordinary! Join us
                now! */}


                A collection of 3820 NFT’s.
                Each NFT will cost 0.145 ETH each but we are keeping quiet on the benefits of owning an NFT until nearer the launch.
                You will only be able to purchase A private sale of wookiee token if you own Wookiees NFT tokens.
                <br />
                <p className="under-drop-desc">
                  Users have the opportunity to participate in the Wookiee
                  NFT drop, with the ability to mint up to 3820 NFTs. As a reward,
                  users will receive the Wookiee token (Wookiee) via airdrop.
                </p>
              </div>
              <button className='nav-use-app'>Buy Now</button>

              {/* <div className="nft-hr-rule"></div> */}
            </div>
            <div className="drop-card">
              <div className="first-bg"></div>
              <div className="second-bg"></div>
              <div className="main-card">
                <div className="cardimg-container">

                <img src={cardimg} alt="cardimg" className="cardimg" />
                </div>
                <div className="card-details">
                  <p className="nft-card">Wookiees NFT Airdrops</p>
                  <div className="hr-rule-dark"></div>
                  <div className="card-details-airdrops">
                    <div className="written">
                      <p className="bid">Current Bid</p>
                      <div className="bid-p"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <g clip-path="url(#clip0_874_180)">
                          <path d="M10.0231 19.4921C14.4468 20.2721 18.6652 17.3182 19.4452 12.8945C20.2252 8.47083 17.2715 4.25237 12.8478 3.47235C8.42402 2.69233 4.20556 5.64613 3.42554 10.0698C2.64552 14.4935 5.59931 18.712 10.0231 19.4921Z" fill="url(#paint0_linear_874_180)" />
                          <path d="M12.282 6.67638L11.1114 13.3151L8.21499 11.0065L12.282 6.67638Z" fill="#FFF6E9" />
                          <path d="M12.2812 6.67627L14.622 12.1363L11.1107 13.315L12.2812 6.67627Z" fill="#FFF6E9" />
                          <path d="M11.0137 13.8739L10.588 16.2881L8.11719 11.5662L11.0137 13.8739Z" fill="#FFF6E9" />
                          <path d="M10.5873 16.288L11.013 13.8737L14.5244 12.6959L10.5873 16.288Z" fill="#FFF6E9" />
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_874_180" x1="3.99398" y1="10.1704" x2="17.2287" y2="24.8923" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6580EB" />
                            <stop offset="1" stop-color="#8EA2F2" />
                          </linearGradient>
                          <clipPath id="clip0_874_180">
                            <rect width="19.5202" height="19.5202" fill="white" transform="translate(3.51758 0.175537) rotate(10)" />
                          </clipPath>
                        </defs>
                      </svg> 0.145</div>
                    </div>
                    <div className="written">
                      <p className="bid">List Price</p>
                      <div className="bid-p">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                          <g clip-path="url(#clip0_874_180)">
                            <path d="M10.0231 19.4921C14.4468 20.2721 18.6652 17.3182 19.4452 12.8945C20.2252 8.47083 17.2715 4.25237 12.8478 3.47235C8.42402 2.69233 4.20556 5.64613 3.42554 10.0698C2.64552 14.4935 5.59931 18.712 10.0231 19.4921Z" fill="url(#paint0_linear_874_180)" />
                            <path d="M12.282 6.67638L11.1114 13.3151L8.21499 11.0065L12.282 6.67638Z" fill="#FFF6E9" />
                            <path d="M12.2812 6.67627L14.622 12.1363L11.1107 13.315L12.2812 6.67627Z" fill="#FFF6E9" />
                            <path d="M11.0137 13.8739L10.588 16.2881L8.11719 11.5662L11.0137 13.8739Z" fill="#FFF6E9" />
                            <path d="M10.5873 16.288L11.013 13.8737L14.5244 12.6959L10.5873 16.288Z" fill="#FFF6E9" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_874_180" x1="3.99398" y1="10.1704" x2="17.2287" y2="24.8923" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#6580EB" />
                              <stop offset="1" stop-color="#8EA2F2" />
                            </linearGradient>
                            <clipPath id="clip0_874_180">
                              <rect width="19.5202" height="19.5202" fill="white" transform="translate(3.51758 0.175537) rotate(10)" />
                            </clipPath>
                          </defs>
                        </svg>
                        0.87
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* <div className="wnft-up-iframe popup-overlay">
          <iframe
            id="iframe-03"
            title="Embedded HeyMint Project"
            // eslint-disable-next-line no-script-url
            src="javascript: window.frameElement.getAttribute('srcdoc');"
            srcdoc="<script>window.onmessage = function(event) {event.source.postMessage({iframeId: event.data, scrollHeight: document.body.getBoundingClientRect().height || document.body.scrollHeight}, event.origin);};</script><body style='margin: 0; '><div style='display: flex; justify-content: center'><script
                    defer 
                    src='https://launchpad.heymint.xyz/api/embed.js'
                    data-project-id='11609'
                    data-chain='ETH_MAINNET'
                    ></script></div></body>"
            className="wnft-iframe"
            style={{
              overflow: "visible",
              transition: "height 1.5s ease 0s",
            }}
          ></iframe>
        </div> */}
      </div>

      <div className="footerbar footerbar-wnft">
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

      <div className="wl-foo">
        <p className="footer-up-txt">
          <img src={logo} alt="img" className="nav-logo" />
        </p>
        <div className="footer-nav-1 reduce-mb">
          <span className="footer-nav-item">
            <a className="a-tag" href={"/"}>
              {" "}
              About
            </a>
          </span>
          <span className="footer-nav-item">
            <a className="a-tag" href={"/"}>
              {" "}
              How to Buy
            </a>
          </span>
          <span className="footer-nav-item">
            <a className="a-tag" href={"/"}>
              Wookieenomics
            </a>{" "}
          </span>
        </div>
        <div className="footer-nav-1">
          <span className="footer-nav-item">
            <a className="a-tag" href={"/"}>
              Wookieemap
            </a>{" "}
          </span>
          <span className="footer-nav-item">
            <a className="a-tag" href="#">
              App
            </a>
          </span>
          <span className="footer-nav-item">
            <a className="a-tag" href="/wnft">
              WNFT
            </a>
          </span>
          <li class="dropdown">
            Whitelist
            <ul class="dropdown-menu">
              <li>
                <a href="/whitelist1">$250K Giveaway</a>
              </li>
              <li>
                <a href="/whitelist2">Whitelist 1</a>
              </li>
              <li>
                <a href="/whitelist3">Whitelist 2</a>
              </li>
              <li>
                <a href="/whitelist4">Whitelist 3</a>
              </li>
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

export default WNFT;
