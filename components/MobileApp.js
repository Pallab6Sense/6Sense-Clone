/* eslint-disable @next/next/no-img-element */
import style from '../styles/MobileApp.module.css';
import Usefetch from './UseFetch';
export default function MobileApp() {
  const { data: data } = Usefetch('http://localhost:5000/MobileWorks');
  console.log(data);

  return (
    <>
      <div className={style.container}>
        <div className={style.heading}>
          <strong>
            Mobile Apps <span>Success Stories</span>{' '}
          </strong>
          <p>
            Experience the Benefits of Partnering with Our Expert Software
            Development Team
          </p>
        </div>

        <div className={style.content}>
          {data.map((item) => {
            const { id, img, description } = item;
            return (
              <div className={style.items} key={id}>
                <div className={style.image}>
                <img src={img} alt="" />

                </div>
                <hr />
                <div className={style.description}>
                <p>{description}</p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
