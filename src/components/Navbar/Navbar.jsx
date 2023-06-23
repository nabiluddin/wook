import React, { useEffect } from 'react'
import logo from '../../assets/logo-wookie.png'
import './Navbar.scss'

function Navbar(props) {
  const dropdown = document.querySelector('.dropdown');
dropdown?.addEventListener('click', function() {
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
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
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
        <li><a className='a-tag' href={props.check?"#about":"/"}> About</a></li>
        <li><a className='a-tag' href={props.check?"#htb":"/"}> How</a></li>
        <li><a  className='a-tag' href={props.check?"#wookie":"/"}>Wookieenomics</a> </li>
        <li><a className='a-tag' href={props.check?"#woomap":"/"}>Wookieemap</a> </li>
        <li><a className='a-tag' href="/app">App</a></li>
        <li className="dropdown">
          Whitelist
          <ul className="dropdown-menu">
            <li><a href="/whitelist1">Whitelist 1</a></li>
            <li><a href="/whitelist2">Whitelist 2</a></li>
            <li><a href="/whitelist3">Whitelist 3</a></li>
            <li><a href="/whitelist4">Whitelist 4</a></li>
          </ul>
        </li>
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