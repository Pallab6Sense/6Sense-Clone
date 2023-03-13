/* eslint-disable @next/next/no-img-element */
import style from '../styles/Quote.module.css';
export default function Quote() {
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.companyLogo}>
            <img src="Group-3041-1-1.png" alt="" />
          </div>
          <div className={style.content}>
            <p className={style.quote}>
              I find it comforting that they follow the schedule they provided
              me with. It establishes trust between us.
            </p>
            <p className={style.name}>Gabriel Sotomayor</p>
            <span>CEO, Impromek Ltd.</span>
          </div>
          <div className={style.icon}>
            <img src="Quote-Icon-1.png" alt="" />
          </div>
          {/* <hr /> */}
        </div>
        <div className={style.divider}></div>

        <div className={style.bottomGrid}>
          <div className={style.grid}>
            <div className={style.items}>
              <img src="ic_baseline-speed1.png" alt="" />
              <p>Sports</p>
              <span>Industry</span>
            </div>

            <div className={style.items}>
              <img src="uil_calender.png" alt="" />
              <p>4 months</p>
              <span>Duration</span>
            </div>

            <div className={style.items}>
              <img src="la_users-cog.png" alt="" />
              <p>5 Engineers</p>
              <span>Team Size</span>
            </div>

            <div className={style.items}>
              <img src="ic_baseline-speed.png" alt="" />
              <p>Node JS, React Js</p>
              <span>Technology</span>
            </div>
          </div>
        </div>

        <div className={style.review}>
          <div className={style.left}>
            <img src="image-42 (1).png" alt="" className="" />
            <button className={style.btn}>Visit Clutch</button>
          </div>
          <div className={style.right}>
            <div className={style.rightGrid}>
              <div className={style.gridItems}>
                <div className={style.Flex}>
                  <div className={style.flexIcon}>
                    <img src="Group-1000002656.png" alt="" />
                  </div>
                  <div>
                    <span>Scheduling</span>
                    <p>On time/ deadlines</p>
                  </div>
                </div>
              </div>
              <div className={style.gridItems}>
                <div className={style.Flex}>
                  <div className={style.flexIcon}>
                    <img src="Group-1000002656.png" alt="" />
                  </div>
                  <div>
                    <span>Scheduling</span>
                    <p>On time/ deadlines</p>
                  </div>
                </div>
              </div>
              <div className={style.gridItems}>
                <div className={style.Flex}>
                  <div className={style.flexIcon}>
                    <img src="Group-1000002656.png" alt="" />
                  </div>
                  <div>
                    <span>Scheduling</span>
                    <p>On time/ deadlines</p>
                  </div>
                </div>
              </div>
              <div className={style.gridItems}>
                <div className={style.Flex}>
                  <div className={style.flexIcon}>
                    <img src="Group-1000002656.png" alt="" />
                  </div>
                  <div>
                    <span>Scheduling</span>
                    <p>On time/ deadlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.mobileReview}>
          <img src="image-42 (1).png" alt="" className="" />
          <img src="review.png" alt="" />
          <div className={style.button}>
          <button className={style.btn}>Visit Clutch</button>
          </div>
        </div>
      </div>
    </>
  );
}
