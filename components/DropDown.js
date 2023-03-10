/* eslint-disable @next/next/no-img-element */
import dropdownStyle from '../styles/DropDown.module.css';
export default function DropDown() {
  return (
    <>
      <div className={dropdownStyle.container}>

        <div className={dropdownStyle.heading}>
          <p className={dropdownStyle.advantages}>
            Advantages Of Choosing <span>6sense</span>{' '}
          </p>
          <p className={dropdownStyle.desc}>
            By utilizing our full off-shore team of experienced software
            developers, responsible American companies are enjoying an
            impressive range of benefits.
          </p>
        </div>

        <div className={dropdownStyle.collapse}>
            <div className={dropdownStyle.collapseDiv}>
          <div className={dropdownStyle.collapseItem}>
            <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head}>Cost Savings By 50%</p>
                <p className={dropdownStyle.description}>By working with our custom software company, our clients can save at least 50% on their software development costs. Our personalized solutions are designed specifically for the needs and goals of each client, ensuring that they get the most value for their investment. We work closely with our clients to understand their unique needs and create software that fits their workflow and processes, helping to streamline operations and improve efficiency.</p>
            </div>
          </div>
          <div className={dropdownStyle.collapseItem}>
            <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head}>Ability to integrate with existing systems and processes</p>
                <p className={dropdownStyle.description}>We have the ability to seamlessly integrate with our clients’ existing systems and processes. This means that our software can work alongside their current technology and platforms, rather than requiring them to completely overhaul their systems. This not only saves time and resources, but also helps to minimize disruptions to their business operations..</p>
            </div>
          </div>
          <div className={dropdownStyle.collapseItem}>
            <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head}>Improved data management</p>
                <p className={dropdownStyle.description}>By designing software that fits the specific workflow and processes of the client, we can help streamline data entry and organization, making it easier to access and use. In addition, our custom software can be designed with robust security measures in place to protect sensitive data and prevent unauthorized access.</p>
            </div>
          </div>
          </div>
          <div className={dropdownStyle.rightImage}>
            <img src="Choosing-6sense.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
