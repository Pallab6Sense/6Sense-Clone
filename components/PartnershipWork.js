/* eslint-disable @next/next/no-img-element */
import style from '../styles/PartnershipWork.module.css';
function getData(){
  const data = [
    {
      id: 1,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/software-development-partner_2.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/11/1-3-1.png',
      description: 'Baseball coaching marketplace.',
    },
    {
      id: 2,
      img: 'https://6sensehq.com/wp-content/uploads/2022/11/Sale-Page-Post-%E2%80%93-Figma.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/11/1-3-1-1.png',
      description: 'The Best EV Charging Solution Period.',
    },
    {
      id: 3,
      img: 'https://6sensehq.com/wp-content/uploads/2022/11/Sale-Page-Post-%E2%80%93-Figma-1.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/11/1-3-1-2.png',
      description: 'B2B sales automation tool with A.I.',
    },
    {
      id: 4,
      img: 'https://6sensehq.com/wp-content/uploads/2022/11/Sale-Page-Post-%E2%80%93-Figma-2.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/11/1-3-1-9.png',
      description: 'Simplest task management platform.',
    },
    {
      id: 5,
      img: 'https://6sensehq.com/wp-content/uploads/2022/11/Sale-Page-Post-%E2%80%93-Figma-3.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/11/1-3-1-10.png',
      description: 'A gold buying- selling marketplace.',
    },
    {
      id: 6,
      img: 'https://6sensehq.com/wp-content/uploads/2022/11/Sale-Page-Post-%E2%80%93-Figma-4.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/11/1-3-1-11.png',
      description: 'An one stop wholeselling marketplace.',
    },
    {
      id: 7,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/software-development-partner_7-1.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/12/1-3-1-5.png',
      description: 'Personalized media sharing platform.',
    },
    {
      id: 8,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/software-development-partner_7-2.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/12/1-3-1-6.png',
      description: 'Healthcare budget management.',
    },
    {
      id: 9,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/software-development-partner_7-3.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/12/1-3-1-4.png',
      description: 'Accounting for Small businesses. ',
    },
    {
      id: 10,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/software-development-partner_7-4-1.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/12/1-3-1-7.png',
      description: 'Identifying emotions via voice analysis.',
    },
    {
      id: 11,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/software-development-partner_7-6.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/12/1-3-1-9.png',
      description: 'Effortlessly share audio recordings.',
    },
    {
      id: 12,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/software-development-partner_7-5.png',
      logo: 'https://6sensehq.com/wp-content/uploads/2022/12/1-3-1-8.png',
      description: 'All-in-one Quran app for daily guidance.',
    },
  ];
  return data;
}
export default function PartnershipWork() {
  const data = getData();

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
