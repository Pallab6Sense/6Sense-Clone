/* eslint-disable @next/next/no-img-element */
import style from '../styles/MobileApp.module.css';
export default function MobileApp() {
  
  const data = [
    {
      id: 1,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_1.png',
      description: 'Bling Your Screen',
    },
    {
      id: 2,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_2.png',
      description: 'Engineering Toolbox',
    },
    {
      id: 3,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_3.png',
      description: 'Get Likes',
    },
    {
      id: 4,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_4.png',
      description: 'Grades Up',
    },
    {
      id: 5,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_5.png',
      description: 'iPhone Secret App',
    },
    {
      id: 6,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_6.png',
      description: 'Little Memory',
    },
    {
      id: 7,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_7.png',
      description: 'Live Smart',
    },
    {
      id: 8,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_8.png',
      description: 'Oil Guide',
    },
    {
      id: 9,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_9.png',
      description: 'Quran-Touch',
    },
    {
      id: 10,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_10.png',
      description: 'Roll With Me',
    },
    {
      id: 11,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_11.png',
      description: 'Scan Chief',
    },
    {
      id: 12,
      img: 'https://6sensehq.com/wp-content/uploads/2022/12/custom-mobile-app-development-company_12.png',
      description: 'Venus',
    },
  ];
  
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
