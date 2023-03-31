import { useCallback, useState } from 'react';
import dropdownStyle from '../styles/Questions.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
            <Accordion
              expanded={iscollapse}
              className={dropdownStyle.accordion}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick}
                expandIcon={!iscollapse ? <ExpandMoreIcon /> : null}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={dropdownStyle.head}>
                  What sets your software development company apart from
                  competitors?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  Our team has extensive experience in custom software
                  development and a strong track record of successfully
                  delivering projects for businesses of all sizes. We also offer
                  a range of services including web development, managed
                  delivery, dedicated team options, and UX design, allowing us
                  to be a one-stop shop for all of your software development
                  needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={iscollapse1}
              className={dropdownStyle.accordion}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick1}
                expandIcon={!iscollapse1 ? <ExpandMoreIcon /> : null}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={dropdownStyle.head}>
                  Do you offer any guarantees for the quality of your work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  Yes, we stand behind the quality of our work and offer a
                  satisfaction guarantee for all of our projects. If you are not
                  completely satisfied with the final product, we will work with
                  you to make any necessary revisions until you are happy with
                  the results.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={iscollapse2}
              className={dropdownStyle.accordion}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick2}
                expandIcon={!iscollapse2 ? <ExpandMoreIcon /> : null}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={dropdownStyle.head}>
                  Can you accommodate businesses of any size?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  Yes, we work with businesses of all sizes and have the
                  resources and experience to handle projects of any scope.
                  Whether you are a small startup or a large enterprise, we have
                  the expertise to deliver custom software solutions that meet
                  your specific needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={iscollapse3}
              className={dropdownStyle.accordion}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick3}
                expandIcon={!iscollapse3 ? <ExpandMoreIcon /> : null}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={dropdownStyle.head}>
                  Do you offer ongoing support and maintenance for your software
                  products?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  Yes, we offer ongoing support and maintenance for all of our
                  software products to ensure that they are running smoothly and
                  meeting the needs of your business. We also offer managed
                  delivery services to handle the ongoing maintenance and
                  updates for your software, allowing you to focus on running
                  your business.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={iscollapse4}
              className={dropdownStyle.accordion}
            >
              <AccordionSummary
                className={dropdownStyle.items}
                onClick={handleClick4}
                expandIcon={!iscollapse4 ? <ExpandMoreIcon /> : null}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={dropdownStyle.head}>
                  How do you ensure the security and confidentiality of my data?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={dropdownStyle.description}>
                  We take the security and confidentiality of our clients’ data
                  very seriously. We use industry-standard security protocols
                  and technologies to ensure the protection of your data, and we
                  are happy to discuss any specific concerns you may have about
                  the security of your information.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
