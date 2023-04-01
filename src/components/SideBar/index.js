import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import Acordion from '../Accordion'
import SettingsIcon from '@mui/icons-material/Settings';
import DraftsIcon from '@mui/icons-material/Drafts';
import CopyAllTwoToneIcon from '@mui/icons-material/CopyAllTwoTone';
import DirectCopyAction from '../DirectCopyAction';

export default function SideBar({selectedTradeByID,
                                 setBoughtTradeByID, 
                                 boughtTradeByID,
                                 expanded,
                                 setExpanded
                                }) {
    const [tradeBeenBought, setTradeBeenBought] = useState(false);
    const handleChangeAccodion = () =>{setExpanded(!expanded)}
                                      
    const renderSettingIcon = ()=><SettingsIcon sx={{color:"#568CF3"}} />
    const renderNotifyIcon = ()=><DraftsIcon sx={{color:"#568CF3"}} />
    const renderCopyIcon = ()=><CopyAllTwoToneIcon sx={{color: tradeBeenBought ? "#FFA800": "#568CF3"}}/>

    const acordionTitle = (iconFun, title) =>
    <Grid container  alignItems={"center"} spacing={1}>
        <Grid item >{iconFun()}</Grid>
        <Grid item sx={{color:"#5C5C5C"}}>{title}</Grid>
    </Grid>
  return (
    <Grid xs={3} item sx={{marginTop:1}}>
        <Grid container spacing={1} style={{backgroundColor:"#FFFFFF",paddingBottom:10,borderRadius:"5px"}}>
            <Grid item sx={{width:"98%"}} > 
                <Button 
                    variant="contained" 
                    sx={{width:"100%",justifyContent: "flex-start",height:"50px",backgroundColor:"#31A060"}}>
                    Sign in
                </Button>
        </Grid> 
            <Grid item sx={{width:"98%"}} > 
                <Acordion title={acordionTitle(renderSettingIcon, "Activate")} />
            </Grid> 
        <Grid item sx={{width:"98%"}}> 
            <Acordion title={acordionTitle(renderNotifyIcon, "Notify")}  />
        </Grid> 
        <Grid item sx={{width:"98%"}}> 
            <Acordion 
                title={acordionTitle(renderCopyIcon, "Direct copy")} 
                expanded={expanded} 
                onChange={handleChangeAccodion}
            >
            {
                !!selectedTradeByID && <DirectCopyAction 
                                            selectedTradeByID={selectedTradeByID} 
                                            setBoughtTradeByID={setBoughtTradeByID}
                                            boughtTradeByID={boughtTradeByID}
                                            setTradeBeenBought={setTradeBeenBought} 
                                        />
            }
            </Acordion>
        </Grid> 
    </Grid>

    
    </Grid>
  )
}
