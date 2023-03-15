/* eslint-disable @next/next/no-img-element */
import style from '../styles/Footer.module.css';
import ScrollToTop from 'react-scroll-to-top';

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.image}>
            <img
              src="https://6sensehq.com/wp-content/uploads/2022/12/Charcoal.png"
              alt=""
            />
          </div>

          <p>Copyright 2023 ©6sense Technologies All rights reserved.</p>
        </div>
        <div className={style.Flex}>
          <div className={style.middle}>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
          <div className={style.right}>
            <div className={style.fb}>
              <img src="ci_facebook.svg" alt="" />
            </div>
            <div className={style.in}>
              <img src="Group 1000002978.svg" alt="" />
            </div>
            <div className={style.twitter}>
              <img src="vector.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
