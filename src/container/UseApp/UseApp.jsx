import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './UseApp.scss'
import bnbimg from '../../assets/bnb-img.png'
import ethimg from '../../assets/eth-img.png'
import wkimg from '../../assets/wk-img.png'
import pepeimg from '../../assets/pepe-img.png'
import wxrpimg from '../../assets/wxrp-img.png'
import { FiArrowRight } from 'react-icons/fi';
import ft1 from '../../assets/Group 287.png'
import ft2 from '../../assets/Group 422.png'
import ft3 from '../../assets/Group 43.png'
import ft4 from '../../assets/Group 42.png'

function UseApp() {
  return (
    <div className='use-app'>
      <Navbar ulli={['About', 'Presale', 'Whitepaper', 'Buy with card']} />

      <div className="use-app-c-content">
        
      <div className="use-app-right-bar">
          <a target="_blank" href="https://wookiees.medium.com/" rel="noreferrer">
            <img src={ft1} alt="i1" className="home-side-icons" /></a>
          {/* <a target="_blank" href="https://www.pinksale.finance/?chain=BSC" rel="noreferrer">
            <img src={ft2} alt="i2" className="home-side-icons" /></a> */}
          <a target="_blank" href="https://t.me/wookieescoin" rel="noreferrer">
            <img src={ft3} alt="i3" className="home-side-icons" /></a>
          {/* <a target="_blank" href="https://www.dexview.com/eth/0x7bD95684cA33b2bFC356A336CC7cF1e8AfAE0298" rel="noreferrer">
            <img src={ft4} alt="i4" className="home-side-icons" /></a> */}

        </div>
        <p className='use-app-sm-txt'>we relay on maths not validators</p>
        <div className="use-app-head-txt">Deploy your crypto into DeFi with wookies</div>
        <p className='use-app-sm-txt-bl'>Earn a yield, Multiply your exposure to crypto .ETH, Wookiees and 14  more cryptos are available to put to work.</p>
        <button className='use-app-cw-btn'>Connect Wallet</button>
        <div className="use-app-flex-row">
          <div className="sm-btn"> <img src={bnbimg} alt="sm-logo" className='sm-btn-img' /> BNB</div>
          <div className="sm-btn"> <img src={ethimg} alt="sm-logo" className='sm-btn-img' /> ETH</div>
          <div className="sm-btn"> <img src={wkimg} alt="sm-logo" className='sm-btn-img' /> Wookiees</div>
          <div className="sm-btn"> <img src={pepeimg} alt="sm-logo" className='sm-btn-img' /> Pepe</div>
          <div className="sm-btn"> <img src={wxrpimg} alt="sm-logo" className='sm-btn-img' /> WXRP</div>
        </div>
        <div className="use-app-w-detail">
          <div className="use-app-w-deatil-1"> <p className='up-txt'>TVL</p> <p className='up-num'>$294,908,449</p> </div>
          <div className="use-app-w-deatil-1"> <p className='up-txt with-img'><img src={wkimg} alt="sm-logo" className='sm-btn-img' /> Wookiees Price</p> <p className='up-num'>$0.000001200</p> </div>
          <div className="use-app-w-deatil-1"> <p className='up-txt'>MarketCap</p> <p className='up-num'>1billions</p> </div>
        </div>
        <div className="use-app-w-detail">
          <div className="flex-col">
            <p className="w-detail-footer">
              Refer BSCDAO to your Friend and Get 5 % wookiees
            </p>
            <div className="input-and-btn">
              <input className='email-refer' type="email" name="email" id="email" placeholder='Email Address' />
              <button className="refer">Refer <FiArrowRight className='arr-icon' /></button>
            </div>
          </div>
        </div>
        <div className="ft">
          <img src={wkimg} alt="sm-logo" className='sm-btn-img bg-tight' />
          <div className="use-app-ft-nav">
            <p className="ft-nav-p">Doc</p>
            <p className="ft-nav-p">Twitter</p>
            <p className="ft-nav-p">Whitepaper</p>
          </div>
          <div className="hr-rule"></div>
          <div className="copyright-links">
            <p className="copy">© 2023 Wookiees, All right Reserved</p>
            <p className="links">
              <img src={ft1} alt="ft1" className='ft-img' />
              <img src={ft2} alt="ft1" className='ft-img' />
              <img src={ft3} alt="ft1" className='ft-img' />
              <img src={ft4} alt="ft1" className='ft-img' />
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UseApp