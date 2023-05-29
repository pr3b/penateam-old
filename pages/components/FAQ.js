import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Chat from "../../public/assets/images/icons/chat.png";

function FAQ() {
  return (
    <div className="faq-container">
      <div data-aos="fade-out">
        <div className="faq-title-container">
          <h3>Frequently Asked Questions</h3>
          <Image src={Chat} alt="Speaker icon" />
        </div>
      </div>
      <div data-aos="fade-out">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How do pricing and subscriptions work?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Getting started with Pena is easy-breezy. When you subscribe to
              Pena, you choose monthly, quarterly, or yearly term. Each term has
              monthly billing, you will be billed on the date you subscribe and
              each month thereafter, on the date you subscribed. This
              subscription pricing will streamline and keep your documentation
              up to date. P.s. We&rsquo;ll also give you a great deal if you
              choose a longer terms.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div data-aos="fade-out">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              How do you understand what I want with my documentation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div data-aos="fade-out">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Why is Pena using a subscription service?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div data-aos="fade-out">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What makes your writers better?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
