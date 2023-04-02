import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CopyAllTwoToneIcon from '@mui/icons-material/CopyAllTwoTone';
import DirectCopyAction from '../DirectCopyAction';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const lineToDisplay =["Ticket","size","open", "stop", "limit","Current","Net P/L","Open Time (GMT)"]

export default function DataCardItem({data,
									selectedTradeByID,
									setSelectedTradeByID,
									setBoughtTradeByID,
									boughtTradeByID,
									id}) {
    const [expanded, setExpanded] = useState(false)
    const [showCopyDetails, setShowCopyDetails] = useState(false)

    const handleClick = ()=>setExpanded(prev=>!prev)
    const handleSelectedTrade = () =>{
        setShowCopyDetails(true)
        setSelectedTradeByID(id)
    }
	
    const renderCopyBtn = () =>{
        const backGround = boughtTradeByID.includes(id) ? "#C1E3CF" : "#DADFE5"
        const color = boughtTradeByID.includes(id) ? "#31A060" : "#858585"
        const btnTitle = boughtTradeByID.includes(id) ? resourse.copied : resourse.copy
        const copyIcon =() => boughtTradeByID.includes(id) ? <CheckBoxIcon sx={{color}} /> : <CopyAllTwoToneIcon sx={{color}}/>
        return ( 
            <Button 
                fullWidth 
                sx={{backgroundColor:backGround}} 
                onClick={handleSelectedTrade}>
                    {copyIcon()}
                    <span style={{color:color,fontWeight:600}} >
                        {btnTitle}
                    </span>
            </Button>
        )
    }

    const resourse = {copy:"Copy",copied:"Copied" }
    return (
        <Grid container sx={{backgroundColor:"#FFFFFF",margin:2}}>
            <Grid item container  justifyContent={"space-between"} sx={{margin:2}} >
                <Grid item container spacing={1}  xs={8}>
                    <Grid item>
                        {expanded ? 
                            <ExpandLessIcon sx={{color:"#568CF3", cursor:"pointer"}} size="small" onClick={handleClick} />
                            :
                            <ExpandMoreIcon size="small" sx={{color:"#568CF3", cursor:"pointer"}} onClick={handleClick}/>          
                        }
                    </Grid>
                    <Grid item sx={{fontSize:"14px", color:"#568CF3"}}> 
                        {data.Strategy}
                    </Grid>
                    <Grid item sx={{fontSize:"14px",fontWeight:400}}> 
                        {data.Symbol}
                    </Grid>
                </Grid>
                <Grid item container xs={4} justifyContent={"flex-end"} sx={{fontSize:"14px",}}>
                    {data["Buy/Sell"]}
                </Grid>
            </Grid>
            { expanded ?
                <Grid item container justifyContent={"space-between"} spacing={2}>
                    <Grid container sx={{marginLeft:2}}>
                        {
                            lineToDisplay.map((key,id)=>{
                                return <Grid 
                                            container  
                                            justifyContent={"space-between"} 
                                            key={id} 
                                            sx={{borderTop:"1px solid #DADFE5",
                                                borderBottom:"1px solid #DADFE5",
                                                padding:2
                                            }}>
                                    <Grid item  sx={{paddingLeft:2,fontSize:"14px"}}>
                                        {key}  
                                    </Grid>
                                    <Grid item sx={{fontSize:"14px",fontWeight:400}}>
                                        {data?.[key] || "-"}
                                    </Grid>
                                </Grid>
                            })
                        }
                        </Grid>
                        <Grid item container>
                            {renderCopyBtn()}
                        </Grid>
                </Grid>
                : null
                }
                <Grid>
                { id === selectedTradeByID && showCopyDetails && expanded ? 
                    <Grid container item>
                        <DirectCopyAction      
                            selectedTradeByID={id} 
                            setBoughtTradeByID={setBoughtTradeByID}
                            boughtTradeByID={boughtTradeByID}
                            handleCancel={setShowCopyDetails}
                         />
                    </Grid>
                    : null
                }
                </Grid>
         
        </Grid>
    )
}
