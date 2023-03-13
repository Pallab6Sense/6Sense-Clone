/* eslint-disable @next/next/no-img-element */
// import axios from 'axios';
import { useEffect, useState } from 'react';
import style from '../styles/PartnershipWork.module.css';
import Usefetch from './UseFetch';

export default function PartnershipWork() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:8000/works`)
  //     .then((response) => response.json())
  //     .then((actualData) => setData(actualData));
  // }, []);
  const { data: data } = Usefetch('http://localhost:8000/works');
  return (
    <>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.head}>
            Some of our <span>Partnership Works</span>
          </p>
          <p className={style.subHeading}>
            Experience the Cost-Effective Benefits of Partnering with Our
            Software Development Team
          </p>
        </div>
        <div className={style.works}>
          {data &&
            data.map((items) => {
              const { id, img, logo, description } = items;
              return (
                <div className={style.worksItems} key={id}>
                  <div className={style.mainImage}>
                    <img src={img} alt="" />
                  </div>
                  <div className={style.desc}>
                    <img src={logo} alt="" />
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
