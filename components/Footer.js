/* eslint-disable @next/next/no-img-element */
import style from '../styles/Footer.module.css';
import ScrollToTop from 'react-scroll-to-top';

export default function Footer() {
  return (
    <>
      <ScrollToTop
        smooth
        top={200}
        svgPath="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	      l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	      C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        style={{
          marginRight: -10,
          marginBottom: 100,
          borderRadius: 5,
          paddingRight: 20,
          paddingLeft: 20,
        }}
      />
      <div className={style.container}>
        <div className={style.left}>
          <img
            src="https://6sensehq.com/wp-content/uploads/2022/12/Charcoal.png"
            alt=""
          />
          <p>Copyright 2023 ©6sense Technologies All rights reserved.</p>
        </div>
        <div className={style.Flex}>
          <div className={style.middle}>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
          <div className={style.right}>
            <button className={style.fb}>f</button>
            <button className={style.in}>in</button>
          </div>
        </div>
      </div>
    </>
  );
}
