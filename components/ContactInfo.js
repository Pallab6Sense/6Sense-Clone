/* eslint-disable @next/next/no-img-element */
import style from '../styles/ContactInfo.module.css';
export default function ContactInfo() {
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <p className={style.heading}>
            Curious to Learn <span>More?</span>{' '}
          </p>
          <p className={style.subHeading}>
            Get in touch with us to know more about timeline & budget
          </p>
        </div>
        <div className={style.right}>
          <div className={style.getInTouch}>
          <button className={style.btn}>Get In Touch</button>
          <div className={style.meeting}>
            <img src="meeting.png" alt="" />
            <p>
              Or, <span>Schedule a Free Consultation</span>
            </p>
          </div>
          </div>
          <div className={style.logo}>
            <img src="Group-1000002561.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
