/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import navStyle from '../styles/Navbar.module.css';
export default function Navbar() {
  return (
    <>
      <div className={navStyle.container}>
        <img
          src="https://6sensehq.com/wp-content/uploads/2022/12/Charcoal.png"
          alt="6sense"
        />
        {/* <div className={navStyle.right}>
          <div className={navStyle.navigation}>
            <ul className="">
              <li className="">Case Study</li>
              <div className={navStyle.dropDown}>
                <li className="">Our Services </li>
              </div>
              <li className="">Our Process</li>
            </ul>
          </div> */}

        <div class={navStyle.navbar}>
          <a href="#home">Case Study</a>
          <div class={navStyle.dropdown}>
            <button class={navStyle.dropbtn}>
              Our Services  
              <i class="fa fa-caret-down"></i>
            </button>
            <div class={navStyle.dropdownContent}>
              <a href="#">Design</a>
              <a href="#">Development</a>
            </div>
          </div>
          <a href="#news">Our Process</a>
        <button className={navStyle.contactUs}>Contact Us</button>
        </div>

      </div>
      {/* </div> */}
    </>
  );
}
