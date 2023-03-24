/* eslint-disable @next/next/no-img-element */
import bannerStyle from '../styles/Banner.module.css';
export default function Banner() {
  return (
    <>
      <div className={bannerStyle.container}>
        <div className={bannerStyle.content}>
          <div className={bannerStyle.left}>
            <div className={bannerStyle.heading}>
              <h1 className={bannerStyle.heading1}>Export Custom</h1>
              <h1 className={bannerStyle.heading2}>Software Development</h1>
              <p className="">By An Award Winning Agency</p>
            </div>
            <div className={bannerStyle.list}>
              <div className={bannerStyle.listItem}>
                <img src="vector.png" alt="" />{' '}
                <p>
                  Recognized as Delaware’s <span>Top Software Developer</span>{' '}
                  2023
                </p>
              </div>
              <div className={bannerStyle.listItem}>
                <img src="vector.png" alt="" />{' '}
                <p>
                  Honored with Delaware’s <span>Top Design Company Award</span>{' '}
                  2023
                </p>
              </div>
              <div className={bannerStyle.listItem}>
                <img src="vector.png" alt="" />{' '}
                <p>
                  Proud provider of Custom Software for the{' '}
                  <span>U.S. Army</span>{' '}
                </p>
              </div>
              <div className={bannerStyle.listItem}>
                <img src="vector.png" alt="" />{' '}
                <p>
                  Idea to Market in <span>Three Months</span> with Custom
                  Software
                </p>
              </div>
            </div>
            <div className={bannerStyle.btnDiv}>
              <button className={bannerStyle.btn}>Get In Touch</button>
            </div>
            {/* <button className={bannerStyle.btn}>Get In Touch</button> */}
            <div className={bannerStyle.meeting}>
              <img src="meeting.png" alt="" />
              <p>
                Or, <span>Schedule a Free Consultation</span>
              </p>
            </div>
          </div>

          <div className={bannerStyle.right}>
            <img
              src="https://6sensehq.com/wp-content/uploads/2023/02/6sense.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={bannerStyle.bottom}>
        <div className={bannerStyle.bottomItems}>
          <div className={bannerStyle.logo}>
            <img src="vector-2.png" alt="" />
          </div>
          <div>
            <h1>60+</h1>
            <p>Successful</p>
            <p>software projects</p>
          </div>
        </div>
        <div className={bannerStyle.bottomItems}>
          <div className={bannerStyle.bottomItemsFix}>
            <div className={bannerStyle.fixlogo}>
              <img src="Group-4.png" alt="" className={bannerStyle.fix} />
            </div>
            <div className={bannerStyle.bottomDesc}>
              <h1>200+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className={bannerStyle.bottomItems}>
          <div className={bannerStyle.logo}>
            <img src="Group-1-1.png" alt="" />
          </div>
          <div>
            <h1>4.9</h1>
            <p>Client Feedbacks</p>
          </div>
        </div>
        <div className={bannerStyle.bottomlogo}>
          <div className={bannerStyle.logo}>
            <img src="image-42.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
