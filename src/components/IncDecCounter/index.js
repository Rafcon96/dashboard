import { Button, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function IncDecCounter({num,setNum}){
  const incNum =()=>{
    
    setNum(prev=> Math.round((Number(prev) + 0.01) * 100) / 100);
    
  };
  const decNum = () => {
     if(num -0.01>=0)
     {
      setNum(prev=>Math.round((Number(prev) - 0.01) * 100) / 100);
     }
  }
 const handleChange = (e)=>{
    const input = e.target.value
    const regaxIsNumberPattern =/^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/
    if(regaxIsNumberPattern.test(input)){
        setNum(input)
    }
}
const parseNum = (num) => {
    if(num.toString().length){
    const trimIndex = num.toString().indexOf(".")
    }
  }
   return(
    <Paper
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: "100%" }}
    >
      <Button sx={{ backgroundColor:"#C1E3CF" }} onClick={decNum} >
        <RemoveIcon fontSize="large" />
        
      </Button>
      <InputBase
        sx={{ flex: 1,textAlign:"center" }}
        value={num}
        onChange={handleChange}
        inputProps={{min: 0, style: { textAlign: 'center' }}}
      />
      <Button sx={{ backgroundColor:"#C1E3CF" }} onClick={incNum} >
        <AddIcon fontSize="large" />
      </Button>
      </Paper>
  );
}
export default IncDecCounter;