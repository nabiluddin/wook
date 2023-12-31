import React, { useEffect } from 'react'
import logo from '../../assets/logo-wookie.png'
import './Navbar.scss'
import ConnectWallet from '../ConnectWallet'

function Navbar(props) {
  const dropdown = document.querySelector('.dropdown');
  dropdown?.addEventListener('click', function () {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });


  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  // useEffect(() => {
  //   setTimeout(() => {

  //     var addScript = document.createElement("script");
  //     addScript.setAttribute(
  //       "src",
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //     );
  //     document.body.appendChild(addScript);
  //     window.googleTranslateElementInit = googleTranslateElementInit;
  //   }, 100);
  // }, []);



  return (
    <nav>
      <div className='logo-tr'>
        <a href="/">
          <img src={logo} alt='img' className='nav-logo' /></a>
        { !props.nft &&
          
          <div id="google_translate_element"></div>}
      </div>
      {
        !props.nft &&
      
      <ul className='nav-links'>
        <li><a className='a-tag' href={props.check ? "#about" : "/"}> {props.ulli ? `${props.ulli[0]}` : "About"}</a></li>
        <li><a className='a-tag' href={props.check ? "#htb" : "/"}>{props.ulli ? `${props.ulli[1]}` : "How to Buy"}</a></li>
        <li><a className='a-tag' href={props.check ? "#wookie" : "/"}>{props.ulli ? `${props.ulli[2]}` : "Wookieenomics"}</a> </li>
        <li><a className='a-tag' href={props.check ? "#woomap" : "/"}>{props.ulli ? `${props.ulli[3]}` : "Wookieemap"}</a> </li>
        {props.ulli ? `` : <li><a className='a-tag' href="#">{props.ulli ? '' : "App"} <div className='coming-soon-badge'>coming soon</div> </a></li>}
        {props.ulli ? `` : <li><a className='a-tag' href="/wnft">{props.ulli ? '' : "WNFT"}
        </a></li>}
        {props.ulli ? `` : <li className="dropdown-nav">
          {props.ulli ? "" : "Whitelists ->"}
          <ul className="dropdown-menu-nav">
            <li><a href="/whitelist1">$250K Giveaway</a></li>
            <li><a href="/whitelist2">Whitelist 1</a></li>
            <li><a href="/whitelist3">Whitelist 2</a></li>
            <li><a href="/whitelist4">Whitelist 3</a></li>
          </ul>
        </li>}

      </ul>
      }

      <div className='nav-side'>
        <ConnectWallet />

        {/* <button className='nav-use-app'>Connect Wallet <div className='coming-soon-badge'>coming soon</div></button> */}

        <nav className='mobile-menu' role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className='menu' id='menu'>
              <li><a className='a-tag-menu' href={props.check ? "#about" : "/"}> About</a></li>
              <li><a className='a-tag-menu' href={props.check ? "#htb" : "/"}>How to Buy</a></li>
              <li><a className='a-tag-menu' href={props.check ? "#wookie" : "/"}>Wookieenomics</a> </li>
              <li><a className='a-tag-menu' href={props.check ? "#woomap" : "/"}>Wookieemap</a> </li>
              <li><a className='a-tag-menu' href="#">App <div className='coming-soon-badge'>coming soon</div></a></li>
              <li><a className='a-tag-menu' href="/wnft">WNFT
              </a></li>
              <li className="dropdown-nav">
                <p className='whiteL'>Whitelists -></p>
                <ul className="dropdown-menu-nav">
                  <li><a href="/whitelist1">$250K Giveaway</a></li>
                  <li><a href="/whitelist2">Whitelist 1</a></li>
                  <li><a href="/whitelist3">Whitelist 2</a></li>
                  <li><a href="/whitelist4">Whitelist 3</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar