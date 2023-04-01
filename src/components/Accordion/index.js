import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({title,children, expanded,onChange}) {
  return (
      <Accordion expanded={expanded } onChange={onChange} >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon /> }
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
  );
}
