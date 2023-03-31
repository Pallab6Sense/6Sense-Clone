/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from 'react';
import dropdownStyle from '../styles/DropDown.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DropDown() {
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

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            <Accordion
              className={dropdownStyle.accordion}
              expanded={iscollapse}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick}
                expandIcon={!iscollapse ? <ExpandMoreIcon /> : null}
                aria-controls="panel1bh-content"
                id="panel1bh-header"   
              >
                <Typography className={dropdownStyle.head}>
                  Cost Savings By 50%
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  By working with our custom software company, our clients can
                  save at least 50% on their software development costs. Our
                  personalized solutions are designed specifically for the needs
                  and goals of each client, ensuring that they get the most
                  value for their investment. We work closely with our clients
                  to understand their unique needs and create software that fits
                  their workflow and processes, helping to streamline operations
                  and improve efficiency.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={dropdownStyle.accordion}
              expanded={iscollapse1}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick1}
                expandIcon={!iscollapse1 ? <ExpandMoreIcon /> : null}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={dropdownStyle.head}>
                  Ability to integrate with existing systems and processes
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  We have the ability to seamlessly integrate with our clients’
                  existing systems and processes. This means that our software
                  can work alongside their current technology and platforms,
                  rather than requiring them to completely overhaul their
                  systems. This not only saves time and resources, but also
                  helps to minimize disruptions to their business operations.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={dropdownStyle.accordion}
              expanded={iscollapse2}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick2}
                expandIcon={!iscollapse2 ? <ExpandMoreIcon /> : null}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={dropdownStyle.head}>
                  Improved data management
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  By designing software that fits the specific workflow and
                  processes of the client, we can help streamline data entry and
                  organization, making it easier to access and use. In addition,
                  our custom software can be designed with robust security
                  measures in place to protect sensitive data and prevent
                  unauthorized access.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={dropdownStyle.rightImage}>
            <img src="Choosing-6sense.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
