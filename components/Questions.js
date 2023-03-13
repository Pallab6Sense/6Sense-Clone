import { useCallback, useState } from 'react';
import dropdownStyle from '../styles/Questions.module.css';

export default function Questions() {
  const [iscollapse, setIsCollapse] = useState(true);
  const [iscollapse1, setIsCollapse1] = useState(false);
  const [iscollapse2, setIsCollapse2] = useState(false);

  let handleClick;

  handleClick = useCallback(() => {
    if (iscollapse == false) {
      setIsCollapse(true);
      setIsCollapse1(false);
      setIsCollapse2(false);
    }
  }, [iscollapse]);

  let handleClick1;

  handleClick1 = useCallback(() => {
    if (iscollapse1 == false) {
      setIsCollapse1(true);
      setIsCollapse(false);
      setIsCollapse2(false);
    }
  }, [iscollapse1]);

  let handleClick2;

  handleClick2 = useCallback(() => {
    if (iscollapse2 == false) {
      setIsCollapse2(true);
      setIsCollapse1(false);
      setIsCollapse(false);
    }
  }, [iscollapse2]);

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
                  Cost Savings By 50% <span>&or;</span>
                </p>
                {iscollapse && (
                  <p className={dropdownStyle.description}>
                    By working with our custom software company, our clients can
                    save at least 50% on their software development costs. Our
                    personalized solutions are designed specifically for the
                    needs and goals of each client, ensuring that they get the
                    most value for their investment. We work closely with our
                    clients to understand their unique needs and create software
                    that fits their workflow and processes, helping to
                    streamline operations and improve efficiency.
                  </p>
                )}
              </div>
            </div>
            <div className={dropdownStyle.collapseItem}>
              <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head} onClick={handleClick1}>
                  Ability to integrate with existing systems and processes{' '}
                  <span>&or;</span>
                </p>
                {iscollapse1 && (
                  <p className={dropdownStyle.description}>
                    We have the ability to seamlessly integrate with our
                    clients’ existing systems and processes. This means that our
                    software can work alongside their current technology and
                    platforms, rather than requiring them to completely overhaul
                    their systems. This not only saves time and resources, but
                    also helps to minimize disruptions to their business
                    operations..
                  </p>
                )}
              </div>
            </div>
            <div className={dropdownStyle.collapseItem}>
              <div className={dropdownStyle.items}>
                <p className={dropdownStyle.head} onClick={handleClick2}>
                  Improved data management <span>&or;</span>
                </p>
                {iscollapse2 && (
                  <p className={dropdownStyle.description}>
                    By designing software that fits the specific workflow and
                    processes of the client, we can help streamline data entry
                    and organization, making it easier to access and use. In
                    addition, our custom software can be designed with robust
                    security measures in place to protect sensitive data and
                    prevent unauthorized access.
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
