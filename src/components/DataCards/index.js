import { Grid } from '@mui/material'
import React from 'react'
import DataCardItem from '../DataCardItem'

export default function DataCards({cardItemsData,selectedTradeByID,setSelectedTradeByID,setBoughtTradeByID,boughtTradeByID}) {
  const data =[{title:{"name":"ACE", currency:"NZD/USD",action:"BUY"},data:{Ticket:0.84771,Size:0.84771,Open:0.84711,stop:"-",Limit:"-",Current:"-",
              "Net P/L":"-$72.35","Open Time (GMT):":"2021-08-06 15:57:49"},id:1},
              {title:{"name":"ACE", currency:"NZD/USD",action:"BUY"},data:{Ticket:0.84771,Size:0.84771,Open:0.84711,stop:"-",Limit:"-",Current:"-",
              "Net P/L":"-$72.35","Open Time (GMT):":"2021-08-06 15:57:49"},id:2},]
  return (
    <Grid container>
      {
        data.map((item,index)=><DataCardItem 
                                  title={item.title} 
                                  data={item.data} 
                                  key={index}
                                  id={item.id}
                                  selectedTradeByID={selectedTradeByID}
                                  setSelectedTradeByID={setSelectedTradeByID}
                                  setBoughtTradeByID={setBoughtTradeByID}
                                  boughtTradeByID={boughtTradeByID} />)
      }
    </Grid>
  )
}
