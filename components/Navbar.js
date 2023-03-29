/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import navStyle from '../styles/Navbar.module.css';
export default function Navbar() {
  const [popup, setPopup] = useState(false);
  function handlePopup() {
    if (popup === false) setPopup(true);
    else setPopup(false);
  }
  return (
    <>
      <div className={navStyle.container}>
        <div className={navStyle.logo}>

        <img
          src="https://6sensehq.com/wp-content/uploads/2022/12/Charcoal.png"
          alt="6sense"
        />
        </div>
        
        <div class={navStyle.navbar}>
          <div className={navStyle.navigator}>
          <a href="#home"> Case Study</a>
          <div class={navStyle.dropdown}>
            <button class={navStyle.dropbtn}>
              Our Services <span>&or;</span>
              <i class="fa fa-caret-down"></i>
            </button>
            <div class={navStyle.dropdownContent}>
              <a href="#">Design</a>
              <a href="#">Development</a>
            </div>
          </div>
          <a href="#news">Our Process</a>
          </div>
          <button className={navStyle.contactUs}>Contact Us</button>
        </div>

        <div className={navStyle.hamburger} onClick={handlePopup}>
          <div className={navStyle.hamContent}></div>
          <div className={navStyle.hamContent}></div>
          <div className={navStyle.hamContent}></div>
        </div>

        {popup && (
          <div className={navStyle.mobileNavbar}>
            <div className={navStyle.navContent}>
              <p>Case Study</p>
              <p className={navStyle.bold}>
                Our Services
              </p>
              <div className={navStyle.ourServices}>
                <p>Design</p>
                <hr className={navStyle.solid}/>
                <p>Development</p>
              </div>
              <p>Our Process</p>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
    </>
  );
}
