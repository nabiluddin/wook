import React, { useEffect } from 'react'
import logo from '../../assets/logo-wookie.png'
import './Navbar.scss'

function Navbar() {

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);
  // return (
  //   <>
  //     <div id="google_translate_element"></div>
  //     <h4>Start building your app. Happy Coding!</h4>
  //   </>
  // );

  return (
    <nav>
      <img src={logo} alt='img' className='nav-logo' />
      <ul className='nav-links'>
        <li>About</li>
        <li>How</li>
        <li>Wookieenomics</li>
        <li>Wookieemap</li>
        <li>App</li>
        <li>Whitelist</li>
      </ul>
      <div className='nav-side'>
        {/* <button className='nav-translate-btn' >En</button> */}
        <div id="google_translate_element"></div>
        <button className='nav-use-app'>Use App</button>
      </div>
    </nav>
  )
}

export default Navbar