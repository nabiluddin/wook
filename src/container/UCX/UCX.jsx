import React from 'react'
import { motion } from 'framer-motion';
import './UCX.scss'

import coinbase from '../../assets/Coinbase-logo 1.png'
import huobi from '../../assets/Huobi-Token-Logo-PNG-Pic 1.png'
import okx from '../../assets/OKX_Logo 1.png'
import kucoin from '../../assets/KUCOIN 1.png'
import bitfinex from '../../assets/download (10) 1.png'
import bybit from '../../assets/Bybit-logo_(cropped) 1.png'
import okx2 from '../../assets/Group 68.png'
import panecake from '../../assets/Group 176788.png'
import uniswap from '../../assets/Frame 66.png'
import huobi2 from '../../assets/Frame 67.png'
import bing from '../../assets/Frame 69.png'
import gecko from '../../assets/Frame 265.png'
import dextol from '../../assets/Frame 271.png'
import etherscan from '../../assets/Frame 271 (1).png'

import { LazyLoadImage } from 'react-lazy-load-image-component';

function UCX() {
  return (
    <div className='ucx'>
      <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className="ucx-htb-head-txt">
        Find Wookiees Upcoming On Exchanges
      </motion.div>
      <div className="all-cmps">  
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={coinbase} x="16" y="0" width="200" height="90" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={huobi} x="16" y="4" width="90%" height="100%" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={okx} x="16" y="0" width="200" height="90" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={kucoin} x="23" y="0" width="180" height="90" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={bitfinex} x="16" y="0" width="200" height="90" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={bybit} x="36" y="7" width="160" height="70" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1333)" stroke="url(#paint1_linear_679_1333)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M167.468 43.8386H171.761V39.5444H167.468V43.8386ZM144.649 50.9898C145.469 48.814 147.57 47.2648 150.033 47.2648C152.496 47.2648 154.596 48.814 155.417 50.9898H144.649ZM150.033 43.2723C144.652 43.2723 140.288 47.6365 140.288 53.0201C140.288 58.4038 144.652 62.7673 150.033 62.7673C153.726 62.7673 156.939 60.7135 158.592 57.6863L154.991 55.9389C153.991 57.6357 152.145 58.7748 150.033 58.7748C147.365 58.7748 145.121 56.9577 144.471 54.4931H155.595C155.594 54.495 155.594 54.4975 155.594 54.4996H159.669C159.742 54.017 159.78 53.5228 159.78 53.0201C159.78 47.6365 155.416 43.2723 150.033 43.2723ZM160.912 62.2477H165.205V57.9535H160.912V62.2477ZM167.468 62.2477H171.761V45.7264H167.468V62.2477ZM183.744 58.7748C180.566 58.7748 177.99 56.1982 177.99 53.0201C177.99 49.8413 180.566 47.2648 183.744 47.2648C186.921 47.2648 189.498 49.8413 189.498 53.0201C189.498 56.1982 186.921 58.7748 183.744 58.7748ZM183.742 43.2723C178.361 43.2723 173.996 47.6365 173.996 53.0201C173.996 58.4038 178.361 62.7673 183.742 62.7673C189.125 62.7673 193.489 58.4038 193.489 53.0201C193.489 47.6365 189.125 43.2723 183.742 43.2723ZM93.9823 49.427V53.8669H99.9852C99.6718 55.1356 99.0521 56.2725 98.1634 57.1807C96.8231 58.5507 94.9653 59.3055 92.9307 59.3055C88.7086 59.3055 85.2735 55.87 85.2735 51.6469C85.2735 47.4239 88.7086 43.988 92.9307 43.988C95.1917 43.988 97.2707 44.9562 98.7118 46.6259L102.149 43.8171C99.8701 41.146 96.4887 39.5477 92.9307 39.5477C86.2608 39.5477 80.8346 44.9755 80.8346 51.6469C80.8346 58.3183 86.2608 63.7458 92.9307 63.7458C96.1687 63.7458 99.1541 62.5787 101.337 60.348C103.168 58.4756 104.382 55.8639 104.615 53.2475C104.729 51.9712 104.74 50.7036 104.672 49.427H93.9823ZM115.849 58.7758C112.672 58.7758 110.095 56.1985 110.095 53.0201C110.095 49.841 112.672 47.2645 115.849 47.2645C119.027 47.2645 121.604 49.841 121.604 53.0201C121.604 56.1985 119.027 58.7758 115.849 58.7758ZM121.604 45.172C119.991 43.9891 118.002 43.2888 115.849 43.2888C110.468 43.2888 106.106 47.6527 106.106 53.0352C106.106 58.4185 110.468 62.7816 115.849 62.7816C118.002 62.7816 119.991 62.0817 121.604 60.8988V62.2477H125.594V43.8232H121.604V45.172ZM134.157 39.5448H130.167V43.8386H127.777V47.6045H130.167V57.4597C130.167 58.4774 130.296 59.3335 130.549 60.0054C130.799 60.6701 131.181 61.1904 131.635 61.5969C132.095 62.0096 132.635 62.331 133.275 62.5133C133.926 62.6965 134.644 62.7673 135.402 62.7673C136.187 62.7673 136.887 62.6857 137.485 62.5245C138.039 62.3755 138.571 62.1647 139.066 61.8968V58.8624C138.279 59.2028 137.543 59.326 136.704 59.3651C135.818 59.4068 135.293 59.1536 134.857 58.7378C134.4 58.3021 134.157 57.7344 134.157 56.7821V47.6045H139.066V43.8386H134.157V39.5448Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M59.305 59.8289C54.0487 59.8289 49.7875 55.5671 49.7875 50.3091C49.7875 45.0515 54.0487 40.7889 59.305 40.7889V33C49.7476 33 42 40.7495 42 50.3091C42 59.8684 49.7476 67.6179 59.305 67.6179C68.8622 67.6179 76.6102 59.8684 76.6102 50.3091H68.8227C68.8227 55.5671 64.5615 59.8289 59.305 59.8289Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M59.3048 50.3092H68.8224V40.7893H59.3048V50.3092Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_679_1333" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.14" />
              <stop offset="1" stop-color="white" stop-opacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1333" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <path d="M50.0878 38.2715C52.9716 35.6913 56.7444 34.3035 60.5822 34C64.42 34.0867 68.3445 35.2793 71.2717 37.8595C69.9924 38.9653 68.9083 40.3096 67.5206 41.307C63.6394 38.0113 57.2864 38.3365 53.6654 41.8491C52.4512 40.6783 51.237 39.5073 50.0878 38.2715Z" fill="white" />
          <path d="M46.1631 56.0078C44.19 51.1942 44.7103 45.2965 47.8543 41.1118C50.5646 43.8222 53.2966 46.5324 56.0503 49.1777C58.0668 47.5082 59.758 45.3399 61.8396 43.7571C63.791 45.5351 65.5906 47.4431 67.5421 49.2211C68.7997 47.9418 70.1006 46.7059 71.4233 45.4917C70.8595 44.7761 70.1657 44.169 69.5585 43.5185C72.0087 43.5402 74.4588 43.5185 76.909 43.5185C76.909 45.947 76.909 48.3972 76.909 50.8256C76.3018 50.2401 75.7598 49.568 75.0876 49.0477C74.6973 49.0043 74.5022 49.4596 74.2203 49.6547C71.9653 51.8447 69.7754 54.1647 67.4337 56.2679C65.569 54.4249 63.6826 52.5819 61.7745 50.7606C59.8881 52.5819 57.9801 54.4249 56.1804 56.3113C54.0122 54.5333 52.2125 52.3 50.0443 50.522C50.1526 53.7527 51.7138 56.7666 54.3157 58.6964C58.1102 61.7103 63.8994 61.6235 67.7156 58.6747C68.9297 59.7588 69.9922 61.0164 71.2281 62.1006C70.8161 62.7727 70.1223 63.1196 69.4935 63.5316C67.7156 64.594 65.7641 65.3963 63.7042 65.6782C62.0564 65.7649 60.4085 65.6998 58.7607 65.7649C53.2315 65.0493 48.2229 61.1899 46.1631 56.0078Z" fill="white" />
          <path d="M88.1839 42.2394C92.7806 36.4718 102.625 36.0598 107.633 41.5021C106.592 42.4562 105.573 43.4535 104.511 44.4293C101.258 41.4371 95.6863 41.307 92.4338 44.3425C88.8777 47.8334 89.0946 54.5984 93.1707 57.5906C96.6402 59.9974 101.714 59.4336 104.749 56.5715C105.812 57.6123 106.809 58.7181 107.959 59.6722C106.332 61.5151 103.947 62.5993 101.583 63.1631C98.0281 63.7701 94.1469 63.5099 91.0026 61.6019C88.7477 60.2142 87.0564 58.0893 86.2108 55.5741C84.693 51.1726 85.2351 45.9254 88.1839 42.2394Z" fill="white" />
          <path d="M131.506 38.2281C133.132 37.5126 135.235 38.8136 135.04 40.6566C135.17 42.8032 132.329 43.8222 130.812 42.5429C129.403 41.4155 129.75 38.8136 131.506 38.2281Z" fill="white" />
          <path d="M154.706 38.1847C156.441 38.098 158.197 38.163 159.932 38.1414C161.883 43.9089 163.747 49.7198 165.634 55.5091C165.699 55.5958 165.829 55.7476 165.894 55.8343C167.694 50.2403 169.645 44.7112 171.466 39.1388C171.597 38.8135 171.64 38.4015 171.922 38.1847C172.876 38.1197 173.852 38.1847 174.805 38.1414C176.953 44.0173 178.925 49.98 181.05 55.8777C181.354 55.2489 181.571 54.6201 181.744 53.948C183.414 48.6791 185.083 43.4319 186.753 38.163C188.487 38.163 190.244 38.1197 192 38.1847C189.008 46.4024 186.059 54.6418 183.067 62.8812C181.744 62.8812 180.421 62.8812 179.099 62.9029C177.429 58.7398 175.738 54.5551 174.415 50.2619C174.025 49.3296 173.916 48.2671 173.331 47.4215C171.748 52.6687 169.819 57.7857 167.802 62.8595C166.458 62.8812 165.092 62.9029 163.747 62.8378C160.798 54.6201 157.763 46.4024 154.706 38.1847Z" fill="white" />
          <path d="M115.504 45.5135C118.453 44.7546 121.857 45.1883 124.242 47.2264C127.95 50.3487 128.362 56.4849 125.305 60.1709C121.987 64.1822 115.092 64.334 111.536 60.5612C108.609 57.3739 108.37 52.0616 110.929 48.5924C112.056 47.0963 113.683 45.9905 115.504 45.5135ZM116.74 49.2212C113.358 50.262 112.555 54.9237 114.485 57.5907C116.09 59.824 119.71 59.9541 121.553 57.981C123.592 55.7477 123.331 51.7798 120.903 49.9367C119.754 49.0044 118.149 48.8526 116.74 49.2212Z" fill="white" />
          <path d="M130.335 45.4051C131.744 45.4051 133.154 45.4268 134.563 45.3834C134.671 51.2161 134.607 57.0704 134.585 62.9247C133.154 62.8813 131.723 62.9247 130.291 62.8813C130.357 57.027 130.335 51.2161 130.335 45.4051Z" fill="white" />
          <path d="M138.423 45.47C139.68 45.3833 140.959 45.47 142.217 45.405C142.369 46.1639 142.455 46.9444 142.477 47.725C143.193 47.2914 143.778 46.7059 144.494 46.2939C147.139 44.6461 150.912 44.8846 153.21 47.0529C155.075 48.7875 155.769 51.4544 155.725 53.9479C155.704 56.9401 155.79 59.9323 155.682 62.9245C154.273 62.8594 152.863 62.8811 151.454 62.9028C151.454 60.0407 151.454 57.1569 151.454 54.2732C151.432 52.8855 151.216 51.3677 150.239 50.3053C148.635 48.5707 145.578 48.7007 144.039 50.457C143.171 51.4111 142.716 52.6686 142.737 53.9479C142.759 56.9184 142.716 59.889 142.759 62.8594C141.328 62.9028 139.897 62.8594 138.466 62.9028C138.379 57.0919 138.488 51.2809 138.423 45.47Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.14" />
              <stop offset="1" stop-color="white" stop-opacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={okx2} x="30" y="15" width="180" height="60" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1356)" stroke="url(#paint1_linear_679_1356)" />
          <path d="M103.688 56.6653C103.227 61.6566 98.8694 65.1147 93.8322 65.1147H81.4692L84.1602 35.9797H95.6477C100.558 35.9797 104.206 39.3111 103.757 44.1814C103.526 46.677 102.304 48.6366 100.471 50.0083C102.679 51.3397 103.97 53.6278 103.688 56.6653ZM89.4115 41.3514L88.8173 47.7605H94.5641C96.3565 47.7605 97.8148 46.3888 97.9815 44.556C98.149 42.7231 96.9844 41.3514 95.1575 41.3514H89.4115ZM98.0221 56.2906C98.201 54.3368 96.9209 52.8786 94.9671 52.8786H88.3447L87.7108 59.743H94.3278C96.2869 59.7488 97.8378 58.2906 98.0221 56.2906Z" fill="white" />
          <path d="M127.278 41.4725H119.411L117.226 65.1147H111.48L113.67 41.4725H105.843L106.351 35.9797H127.785L127.278 41.4725Z" fill="white" />
          <path d="M126.644 50.5501C127.433 42.0199 134.373 35.3976 143.197 35.3976C148.528 35.3976 152.978 38.1065 155.087 42.262L149.865 45.1323C148.69 42.5503 146.003 40.971 142.672 40.971C136.972 40.971 132.857 44.9248 132.338 50.5443C131.82 56.1235 135.203 60.0773 140.903 60.0773C144.235 60.0773 147.248 58.498 148.857 55.9563L153.543 58.8266C150.701 62.9879 145.744 65.691 140.378 65.691C131.572 65.6968 125.86 59.0398 126.644 50.5501Z" fill="white" />
          <path d="M175.041 59.622L174.534 65.1147H156.51L159.208 35.9797H177.023L176.516 41.4725H164.447L163.871 47.6741H174.902L174.401 53.0803H163.369L162.764 59.6163L175.041 59.622Z" fill="white" />
          <path d="M187.704 58.1406L182.902 65.1088H176.407L184.776 52.9534L187.704 58.1406ZM186.13 36.0891L200.752 65.1145H194.216L179.836 36.0891H186.13Z" fill="white" />
          <path d="M190.234 55.8582L183.301 41.3916L188.735 41.3513L190.435 44.7229L196.055 36.0891H203L190.234 55.8582Z" fill="white" />
          <path d="M51.3194 31C50.8065 31 50.38 31.3919 50.3339 31.8991L50.1667 33.7435L50.1494 33.9452L49.6999 38.9019V38.9077L49.5155 40.9019C50.8123 40.2909 52.259 39.9509 53.7863 39.9509C54.2416 39.9509 54.6854 39.9854 55.1235 40.0431C56.6104 40.216 57.9706 40.7001 59.1464 41.4437C59.6536 41.7664 60.1263 42.1295 60.5585 42.5387C61.6075 43.4551 62.5297 44.5098 63.2905 45.6856C63.9648 46.723 64.5066 47.8412 64.91 49.0343C65.4114 50.5328 65.6938 52.1351 65.6938 53.8008C65.6938 60.8727 60.7717 66.7919 54.1725 68.3365C63.1925 66.9648 70.103 59.1782 70.103 49.772C70.0973 39.4091 61.6882 31 51.3194 31Z" fill="white" />
          <path d="M65.4404 51.1207C65.3078 50.406 65.1292 49.7144 64.9043 49.0401C64.5009 47.847 63.9592 46.7289 63.2848 45.6915C62.524 44.5214 61.6018 43.4609 60.5529 42.5446C62.0687 43.9739 63.0889 45.9047 63.3943 48.1006C63.4808 48.7173 63.5096 49.3571 63.475 50.0084C63.4692 50.0948 63.4692 50.1813 63.4635 50.2735C63.3713 51.5012 63.06 52.6826 62.5759 53.7778C61.9937 55.0977 61.158 56.3022 60.1379 57.3282C59.7863 57.6855 59.4117 58.0198 59.0198 58.331C52.8296 63.6335 44.7836 66.8323 35.9942 66.8323C35.3371 66.8323 34.6801 66.815 34.0288 66.7746C34.2074 67.7833 35.0836 68.5498 36.1382 68.5498H51.3138C52.2821 68.5498 53.2331 68.4749 54.1611 68.3366C60.7661 66.7919 65.6824 60.8727 65.6824 53.8008C65.6882 52.8844 65.6018 51.991 65.4404 51.1207Z" fill="white" />
          <path d="M51.7807 60.9304H41.8673C41.7635 60.9304 41.6598 60.9074 41.5733 60.8728C41.5388 60.8612 41.5042 60.8381 41.4696 60.8209C38.9452 60.6365 36.6051 59.8007 34.6167 58.4751L34 66.4115C34 66.5383 34.0115 66.6594 34.0346 66.7804C34.6859 66.815 35.3429 66.8381 35.9999 66.8381C44.7895 66.8381 52.8297 63.6335 59.0255 58.3368C56.9794 59.9506 54.4319 60.9304 51.7807 60.9304Z" fill="white" />
          <path d="M46.4899 31H38.7205C37.5333 31 36.5765 31.9625 36.5765 33.1441L35.9713 40.9825L35.6082 45.6799L35.3085 49.5703L34.9684 53.9507L34.6168 58.4808C36.6053 59.8065 38.9453 60.648 41.4697 60.8266C41.3833 60.7805 41.2968 60.7171 41.2334 60.6421C41.1009 60.4808 41.0317 60.2732 41.0548 60.0428L41.9712 49.9737L42.7723 41.1958L43.0663 37.997L43.2796 35.6109L43.366 34.6887L43.4236 34.0778L43.4294 34.0374H43.4525C43.4525 32.3602 44.8126 31 46.4899 31Z" fill="white" />
          <path d="M51.6826 46.2101C51.5212 46.1582 51.3483 46.1293 51.1811 46.1179C50.4089 46.066 49.6769 46.3426 49.014 46.6539L48.3397 54.0428C48.3397 54.0659 48.3397 54.0947 48.3455 54.1177C48.5357 54.1926 48.7374 54.256 48.9391 54.3021C49.2503 54.3713 49.5731 54.4175 49.9074 54.4175C50.2532 54.4175 50.5818 54.3713 50.9045 54.2964C51.4924 54.1581 52.0342 53.8929 52.501 53.5413C53.5327 52.7575 54.2013 51.5183 54.2013 50.1236C54.2013 48.3829 53.2388 46.7 51.6826 46.2101Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_679_1356" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.14" />
              <stop offset="1" stop-color="white" stop-opacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1356" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1373)" stroke="url(#paint1_linear_679_1373)" />
          <path d="M83.1663 57.8309L70.0911 34.6236C67.2044 29.7996 60.2422 29.7127 57.4827 34.8409L43.7282 59.0043C41.181 63.4372 44.3225 69 49.4593 69H76.9684C82.1478 69 86.0106 63.2633 83.1663 57.8309Z" fill="white" />
          <path d="M64.65 59.6572L63.8237 58.2233C63.0409 56.8763 61.3451 54.0083 61.3451 54.0083L49.9952 34.3241C47.7339 30.8913 43.1245 29.9788 39.6891 32.2384C38.602 32.9336 37.7323 33.933 37.1669 35.1062L23.9907 57.9191C21.9469 61.4388 23.1645 65.9579 26.7304 68.0002C27.8609 68.6521 29.122 68.9996 30.4266 68.9996H77.5217C70.2596 69.0431 67.9548 65.2627 64.65 59.6572Z" fill="white" />
          <path d="M133.696 67.3478V40.0869H155.174V41.81C155.174 43.1797 154.127 44.2843 152.83 44.2843H139.013V51.5745H152.83V55.7718H139.013V63.1062H152.83C154.127 63.1062 155.174 64.2108 155.174 65.5805V67.3036L133.696 67.3478Z" fill="white" />
          <path d="M187.305 40.0869H182.068C181.116 40.0869 180.208 40.5273 179.601 41.276L173.326 49.3794L167.008 41.32C166.402 40.5713 165.493 40.1309 164.541 40.1309H159.304L169.907 53.6953L159.304 67.2597H164.541C165.493 67.2597 166.402 66.8193 167.008 66.0707L173.326 58.0553L179.688 66.1587C180.294 66.9074 181.202 67.3478 182.155 67.3478H187.391L176.745 53.7834L187.305 40.0869Z" fill="white" />
          <path d="M116.172 64.5203L123.304 51.5316V67.3478H128.739V40.0891H125.385C124.324 40.0891 123.347 40.6634 122.838 41.6354L114.304 57.8492L105.77 41.6354C105.261 40.6634 104.284 40.0449 103.223 40.0891H99.826V67.3478H105.261V51.5316L112.393 64.5203H116.172Z" fill="white" />
          <path d="M201.971 67.3441C194.52 67.5166 188.345 61.5218 188.217 53.9743C188.217 53.888 188.217 53.8449 188.217 53.7587C188.217 49.5752 189.495 46.0817 191.836 43.7097C194.178 41.3376 197.628 40.0869 201.716 40.0869C206.528 40.0869 210.275 41.7689 213 45.0467L211.297 46.513C210.232 47.4188 208.656 47.4619 207.507 46.5993C205.889 45.3917 203.93 44.7879 201.929 44.8742C196.563 44.8742 193.413 48.1519 193.413 53.6724C193.413 59.1929 196.691 62.6863 201.929 62.6863C203.93 62.7294 205.889 62.1256 207.507 60.9611C208.656 60.0985 210.19 60.1417 211.297 61.0474L213 62.5138C210.318 65.7053 206.656 67.3441 201.971 67.3441Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_679_1373" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.14" />
              <stop offset="1" stop-color="white" stop-opacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1373" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={panecake} x="16" y="0" width="200" height="90" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={uniswap} x="16" y="0" width="200" height="90" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={huobi2} x="19" y="10" width="180" height="70" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={bing} x="33" y="14" width="180" height="60" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={gecko} x="16" y="0" width="200" height="90" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={dextol} x="33" y="10" width="180" height="70" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="50" viewBox="0 0 240 90" fill="none">
          <rect x="0.5" y="0.5" width="239" height="89" rx="9.5" fill="url(#paint0_linear_679_1342)" stroke="url(#paint1_linear_679_1342)" />
          <image xlinkHref={etherscan} x="26" y="10" width="180" height="70" />

          <defs>
            <linearGradient id="paint0_linear_679_1342" x1="2.37152e-06" y1="20.25" x2="239.273" y2="50.7129" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.14" />
              <stop offset="1" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="paint1_linear_679_1342" x1="3.25688e-06" y1="8.55" x2="207.549" y2="86.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div>
        <div className="one-bg-bx">
          <LazyLoadImage src={coinbase} alt="coinbase" className='one-bg-bx-item' />
        </div> */}
      </div>
    </div>
  )
}

export default UCX