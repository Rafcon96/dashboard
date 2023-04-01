import { Grid, Paper } from '@mui/material'
import React from 'react'

export default function PaperContainer({children, variant, bgcolor, margin, padding}) {
  return (
    <Grid container >
    <Paper variant="outlined" sx={{backgroundColor:bgcolor ? bgcolor : "#F8F9FA",padding:padding? padding : 5,width:"100%"}}>
      
        {children}
        
    </Paper>
    </Grid>
  )
}
