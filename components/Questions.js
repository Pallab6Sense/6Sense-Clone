import { useCallback, useState } from 'react';
import dropdownStyle from '../styles/Questions.module.css';

export default function Questions() {
  const [iscollapse, setIsCollapse] = useState(true);
  const [iscollapse1, setIsCollapse1] = useState(false);
  const [iscollapse2, setIsCollapse2] = useState(false);
  const [iscollapse3, setIsCollapse3] = useState(false);
  const [iscollapse4, setIsCollapse4] = useState(false);

  let handleClick;

  handleClick = useCallback(() => {
    if (iscollapse == false) {
      setIsCollapse(true);
      setIsCollapse1(false);
      setIsCollapse2(false);
      setIsCollapse3(false);
      setIsCollapse4(false);
    }
  }, [iscollapse]);

  let handleClick1;

  handleClick1 = useCallback(() => {
    if (iscollapse1 == false) {
      setIsCollapse1(true);
      setIsCollapse(false);
      setIsCollapse2(false);
      setIsCollapse3(false);
      setIsCollapse4(false);
    }
  }, [iscollapse1]);

  let handleClick2;

  handleClick2 = useCallback(() => {
    if (iscollapse2 == false) {
      setIsCollapse2(true);
      setIsCollapse1(false);
      setIsCollapse(false);
      setIsCollapse3(false);
      setIsCollapse4(false);
    }
  }, [iscollapse2]);
  let handleClick3;

  handleClick3 = useCallback(() => {
    if (iscollapse3 == false) {
      setIsCollapse3(true);
      setIsCollapse(false);
      setIsCollapse1(false);
      setIsCollapse2(false);
      setIsCollapse4(false);
    }
  }, [iscollapse3]);
  let handleClick4;

  handleClick4 = useCallback(() => {
    if (iscollapse4 == false) {
      setIsCollapse4(true);
      setIsCollapse(false);
      setIsCollapse1(false);
      setIsCollapse2(false);
      setIsCollapse3(false);
    }
  }, [iscollapse4]);

  return (
    <>
      <div className={dropdownStyle.container}>
        <div className={dropdownStyle.heading}>
          <p className={dropdownStyle.advantages}>
            Frequently Asked <span>Questions</span>{' '}
          </p>
        </div>

        <div className={dropdownStyle.collapse}>
          <div className={dropdownStyle.collapseDiv}>
            <div className={dropdownStyle.collapseItem}>
              <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head} onClick={handleClick}>
                What sets your software development company apart from competitors? <span>&or;</span>
                </p>
                {iscollapse && (
                  <p className={dropdownStyle.description}>
                    Our team has extensive experience in custom software development and a strong track record of successfully delivering projects for businesses of all sizes. We also offer a range of services including web development, managed delivery, dedicated team options, and UX design, allowing us to be a one-stop shop for all of your software development needs.
                  </p>
                )}
              </div>
            </div>
            <div className={dropdownStyle.collapseItem}>
              <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head} onClick={handleClick1}>
                Do you offer any guarantees for the quality of your work?{' '}
                  <span>&or;</span>
                </p>
                {iscollapse1 && (
                  <p className={dropdownStyle.description}>
                    Yes, we stand behind the quality of our work and offer a satisfaction guarantee for all of our projects. If you are not completely satisfied with the final product, we will work with you to make any necessary revisions until you are happy with the results.
                  </p>
                )}
              </div>
            </div>
            <div className={dropdownStyle.collapseItem}>
              <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head} onClick={handleClick2}>
                Can you accommodate businesses of any size? <span>&or;</span>
                </p>
                {iscollapse2 && (
                  <p className={dropdownStyle.description}>
                    Yes, we work with businesses of all sizes and have the resources and experience to handle projects of any scope. Whether you are a small startup or a large enterprise, we have the expertise to deliver custom software solutions that meet your specific needs.
                  </p>
                )}
              </div>
            </div>
            <div className={dropdownStyle.collapseItem}>
              <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head} onClick={handleClick3}>
                Do you offer ongoing support and maintenance for your software products? <span>&or;</span>
                </p>
                {iscollapse3 && (
                  <p className={dropdownStyle.description}>
                   Yes, we offer ongoing support and maintenance for all of our software products to ensure that they are running smoothly and meeting the needs of your business. We also offer managed delivery services to handle the ongoing maintenance and updates for your software, allowing you to focus on running your business.
                  </p>
                )}
              </div>
            </div>
            <div className={dropdownStyle.collapseItem}>
              <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head} onClick={handleClick4}>
                How do you ensure the security and confidentiality of my data? <span>&or;</span>
                </p>
                {iscollapse4 && (
                  <p className={dropdownStyle.description}>
                    We take the security and confidentiality of our clients’ data very seriously. We use industry-standard security protocols and technologies to ensure the protection of your data, and we are happy to discuss any specific concerns you may have about the security of your information.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
