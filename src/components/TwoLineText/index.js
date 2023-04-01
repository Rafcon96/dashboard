import { Typography } from '@mui/material'
import React from 'react'

export default function TwoLineText({resource}) {
  return (
    <>
        <Typography
            variant='subtitle1'
            
        >
            {resource.line1}
        </Typography>
        <Typography
            variant='OP3'
            sx={{opacity:0.6, textAlign:"left"}}
        >
            {resource.line2}
    </Typography>
  </>
  )
}
