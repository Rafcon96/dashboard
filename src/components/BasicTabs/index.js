import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const data = [{label:"Profit", component:"chart"},
              {label:"Balance", component:"chart"},
              {label:"DD", component:"chart"},
              {label:"Monthly P/L", component:"chart"},
              {label:"Providers P/L", component:"chart"},
              {label:"Symbols", component:"chart"},
            ]


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component={'span'} sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({renderChildren}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor:"#F8F9FA",width:"100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          variant="scrollable" 
          sx={{"& .MuiTab-root.Mui-selected": {background: '#EEF4FE'}}}
        >
          {data.map((item,id)=><Tab 
            label={<span style={{fontSize:"clamp(0.7rem, 1.5vw, 1rem) "}}>
                    {item.label}
                  </span>}
             key={id}
            {...a11yProps(0)} />)}
        </Tabs>
      </Box>
      <Box>
      {
        data.map((item,id)=>
          <TabPanel value={value} key={id} index={id}>
            {renderChildren(item.component)}
          </TabPanel>)
      }
      </Box>
    </Box>
  );
}
