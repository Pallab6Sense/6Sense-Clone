/* eslint-disable @next/next/no-img-element */
import style from '../styles/CompanyDescription.module.css';
export default function CompanyDescription() {
  return (
    <>
      <div className={style.container}>
        <div className={style.headingDiv}>
          <div className={style.heading}>
            <h2 className="">TRUSTED BY 50+ COMPANIES WORLDWIDE</h2>
          </div>
          <div className={style.paragraph}>
            <p className="">
              Experience and Expertise You Can Count On. Our team has a proven
              track record of delivering top-quality solutions for businesses
              across a variety of industries.
            </p>
          </div>
        </div>

        <div className={style.brandLogo}>
          <img className={style.image} src="breaking mars.png" alt="" />
          <img className={style.image} src="charge on site.png" alt="" />
          <img className={style.image} src="impromek.png" alt="" />
          <img className={style.image} src="jawhargy.png" alt="" />
          <img className={style.image} src="itcan.png" alt="" />
        </div>

        <div className={style.headingDiv2}>
          <div className={style.heading2}>
            <h1 className="">
              Full-Service <span>Software Development</span>{' '}
            </h1>
          </div>
          <div className={style.paragraph2}>
            <p className="">
              Expert custom software development for your business needs. From
              design to deployment, we’ve got you covered.
            </p>
          </div>
        </div>

        <div className={style.services}>
          <div className={style.servicesItems}>
            {/* <div className={style.servicesImage}> */}
            <img src="web development.png" alt="" />
            {/* </div> */}
            {/* <div className={style.servicesDescription}></div> */}
            <h3 className="">Web Development</h3>
            <p className="">
              Web development tailored to your business needs. From simple
              websites to complex platforms, we’ve got you covered.
            </p>
          </div>
          <div className={style.servicesItems}>
            <img src="software development.png" alt="" />

            <h3 className="">Custom Software Development</h3>
            <p className="">
              Expertly crafted custom software solutions for your unique
              business needs.
            </p>
          </div>
          <div className={style.servicesItems}>
            <img src="delivery.jpg" alt="" />
            <h3 className="">Managed Delivery</h3>
            <p className="">
              Streamline your project with our managed delivery service,
              including expert project management and regular progress updates.
            </p>
          </div>
          <div className={style.servicesItems}>
            <img src="team.png" alt="" />
            <h3 className="">Dedicated Team</h3>
            <p className="">
              Dedicate a team of expert developers to your project for
              personalized service and efficient delivery.
            </p>
          </div>
          <div className={style.servicesItems}>
            <img src="ui ux.png" alt="" />
            <h3 className="">UI/UX Design</h3>
            <p className="">
              Dedicate a team of expert developers to your project for
              personalized service and efficient delivery.
            </p>
          </div>
          <div className={style.servicesItems}>
            <img src="saas.png" alt="" />
            <h3 className="">SaaS</h3>
            <p className="">
              Streamline your business operations with our custom software as a
              service development solutions.
            </p>
          </div>
        </div>

        <div className={style.keyfactors}>
          <div className={style.heading3}>
            <h1 className="">
              Key Factors <span> In 6sense Process</span>
            </h1>
          </div>
          <div className={style.para}>
            <p>
              Ensuring Success through Quality Assurance, Timely Delivery,
              Scalability, and Collaboration.
            </p>
          </div>

          <div className={style.imageGrid}>
            <div className="">
              <img
                src="AWS-Certified-Developer-Associate-Laneways-1.png"
                alt=""
                className=""
              />
            </div>

            <div className="">
              <img
                src="AWS-Certified_Security_Specialty_512x512-1.png"
                alt=""
                className=""
              />
            </div>

            <div className="">
              <img src="asset_40pspo_i-1.png" alt="" className="" />
            </div>

            <div className="">
              <img src="asset_44psmi_0-1.png" alt="" className="" />
            </div>

            <div className="">
              <img
                src="UX-Master-Certified-NNg__1_-removebg-preview-1.png"
                alt=""
                className=""
              />
            </div>

            <div className="">
              <img src="acp@2x-1.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.expertise}>
          <h1 className="">Expertise In <span>Leading Technologies</span></h1>
          <p className="">Our team is proficient in a wide range of software technologies, ensuring top-quality solutions for your business.</p>
        </div>

        <div className={style.leadingTech}>
          <img src="Leading-Technologies.png" alt="" />
        </div>

      </div>
      <div className={style.container3}>
        <div className={style.competition}>
          <h1 className="">Setting <span>6sense </span>Apart From The Competition</h1>
          <p>We go above and beyond to ensure your satisfaction and success. Don’t just take our word for it – check out our track record and see for yourself why we stand out from the competition.</p>
        </div>
      </div>

      <div className={style.zIndex}>
        <div className={style.quoteDiv}>
          <div className={style.itcanDiv}>
            <img src="itcan.png" alt="" />
          </div>
          <div className={style.quote}>
            <p>
              We interviewed different providers and selected 6sense because of
              two main factors: their proven track record of success developing
              businesses, and the leaderships passion and commitment to building
              great products.
            </p>
          </div>

          <div className={style.quoteIcon}>
            <img src="Quote-Icon-1.png" alt="" />
          </div>
        </div>

        <div className={style.companyQuote}>
          <div className={style.ceoName}>
            <h4 className={style.name}>AL</h4>
            <p className="">CEO, Itcan Inc.</p>
          </div>
        </div>

        <hr />
      </div>
      <div className={style.zindexBottom}>
        <div className={style.bottomItems}>
          <div className={style.items}>
          <img src="ic_baseline-speed.png" alt="" className="" />
          <h4>Constraction</h4>
          <p>Industry</p>
          </div>
          
        </div>

        <div className={style.bottomItems}>
          <img src="uil_calender.png" alt="" className="" />
          <h4>16 months</h4>
          <p>Duration</p>
        </div>

        <div className={style.bottomItems}>
          <img src="la_users-cog.png" alt="" className="" />
          <h4>8 Engineers</h4>
          <p>Team Size</p>
        </div>

        <div className={style.bottomItems}>
          <div className={style.items}>
          <img src="ic_baseline-speed.png" alt="" className="" />
          <h4>Node JS, React Js</h4>
          <p>Technology</p>
          </div>
        </div>
      </div>
    </>
  );
}
