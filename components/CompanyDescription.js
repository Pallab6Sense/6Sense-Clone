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
          <img className={style.image} src="Group 1896 2.svg" alt="" />
          <img className={style.image} src="Color logo 1 1.svg" alt="" />
          <img className={style.image} src="Group 3041 1.svg" alt="" />
          <img className={style.image} src="Group 1000002856.svg" alt="" />
          <img className={style.image} src="Logo 476x204 1.svg" alt="" />
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
          <h1 className="">
            Expertise In <span>Leading Technologies</span>
          </h1>
          <p className="">
            Our team is proficient in a wide range of software technologies,
            ensuring top-quality solutions for your business.
          </p>
        </div>

        <div className={style.leadingTech}>
          <img src="Leading-Technologies.png" alt="" />
        </div>
      </div>
      <div className={style.container3}>
        <div className={style.competition}>
          <h1 className="">
            Setting <span>6sense </span>Apart From The Competition
          </h1>
          <p>
            We go above and beyond to ensure your satisfaction and success.
            Don’t just take our word for it – check out our track record and see
            for yourself why we stand out from the competition.
          </p>
        </div>
        <div className={style.jiraBoard}>
          <div className={style.left}>
            <div className={style.transparency}>
              <h1>Transparency and Communication</h1>
              <div className={style.transparencyitems}>
                <img src="verified.png" alt="" />
                <p className="">
                  At our company, transparency is a top priority. Our Jira board
                  allows you to easily track the progress of each team members
                  work, ensuring open communication and a clear understanding of
                  the development process.
                </p>
              </div>
              <div className={style.transparencyitems}>
                <img src="verified.png" alt="" />
                <p className="">
                  We work closely with our partners to create and roll out
                  custom software solutions that drive their business forward.
                  Our team excels at clear and effective communication, ensuring
                  a smooth and successful development process.
                </p>
              </div>
            </div>

            <div className={style.delivery}>
              <h1>On-Time Delivery Guaranteed</h1>
              <div className={style.deliveryItems}>
                <img src="verified.png" alt="" />
                <p className="">We use Jira to track our releases.</p>
              </div>
              <div className={style.deliveryItems}>
                <img src="verified.png" alt="" />
                <p className="">
                  Our forecasting accuracy allows us to confidently provide
                  reliable and accurate deadlines for projects, even up to 6
                  months in advance. You can trust us to deliver on time, every
                  time.
                </p>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <img src="Transparency-Communication.webp" alt="" />
          </div>
        </div>

        <div className={style.fullStack}>
          <div className={style.fullStackleft}>
            <img src="Scalable-Team-Options.webp" alt="" />
          </div>

          <div className={style.fullStackright}>
            <div className={style.flexible}>
              <h1>Flexible and Scalable Team</h1>
              <div className={style.flexibleitems}>
                <img src="verified.png" alt="" />
                <p className="">
                  Our team has a strong track record of delivering top-quality
                  software solutions, with over 100+ successful projects under
                  our belt. In the unlikely event that a team member leaves, we
                  have a robust staffing process in place to ensure that there
                  is minimal disruption to your project.
                </p>
              </div>
              <div className={style.flexibleitems}>
                <img src="verified.png" alt="" />
                <p className="">
                  Our diverse talent pool allows us to quickly assemble a team
                  with the specific skill sets required to meet your project
                  needs. With our comprehensive range of expertise, we can
                  ensure timely delivery of top-quality solutions.
                </p>
              </div>
            </div>

            <div className={style.Affordable}>
              <h1>Affordable Software Solutions</h1>
              <div className={style.AffordableItems}>
                <img src="verified.png" alt="" />
                <p className="">
                  Flexible pricing based on the skills and resources needed for
                  your project.
                </p>
              </div>
              <div className={style.AffordableItems}>
                <img src="verified.png" alt="" />
                <p className="">
                  Our team is flexible and able to adjust to your changing
                  business needs, offering scalable solutions without any
                  long-term commitments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.scrum}>
          <div className={style.scrumleft}>
            <div className={style.satisfaction}>
              <h1>Satisfaction Guaranteed</h1>
              <div className={style.Satisfactionitems}>
                <img src="verified.png" alt="" />
                <p className="">
                  At 6sense, we follow a Scrum approach to ensure efficient and
                  transparent project management. As a client, youll have the
                  opportunity to participate in our daily standup meetings and
                  stay up-to-date on the progress of your project.
                </p>
              </div>
              <div className={style.transparencyitems}>
                <img src="verified.png" alt="" />
                <p className="">
                  Transparent and collaborative project management with client
                  input and feedback for a satisfying outcome.
                </p>
              </div>
            </div>

            <div className={style.clear}>
              <h1>Clear and Efficient Contract Process</h1>
              <div className={style.clearItems}>
                <img src="verified.png" alt="" />
                <p className="">
                  At 6sense, we take great pride in honoring our agreements and
                  delivering top-quality results for our clients. Read our rave
                  reviews on Clutch to see for yourself how we consistently meet
                  and exceed expectations.
                </p>
              </div>
              <div className={style.clearItems}>
                <img src="verified.png" alt="" />
                <p className="">
                  At 6sense, we understand the importance of confidentiality and
                  are happy to sign non-disclosure agreements (NDA) or
                  non-circumvent non-disclosure agreements (NCNDA) to protect
                  your sensitive information.
                </p>
              </div>
            </div>
          </div>
          <div className={style.clearright}>
            <img src="Satisfaction-Guaranteed.webp" alt="" />
          </div>
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
