import { Alert, Button, CircularProgress, FormControlLabel, Grid, Switch, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import IncDecCounter from '../IncDecCounter'
import PaperContainer from '../PaperContainer'

const resourse = {header:"Atlas Strategy",symbolTitle: "Symbol",
    symbolValue: "AUD/USD",sizeTitle: "Size",
    sizeValue: "4.00",winTitle: "Win",winValue:"56%",lossTitle: "Loss",
    lossValue: "44%",tradeLost:"440 Trades",tradeWin:"560 Trades",infoMsg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    inputLabel:"Select Lot Size",
    actionBtnTitle:"Market Execution",
    actionBtnValue:"BUY",
    cancelBtn:"cancel",
    switchLabel:"The trade will be opened on my account",
    error:"Plase select a lot val bigger then 0!",
}
export default function DirectCopyAction({selectedTradeByID,
                                        setBoughtTradeByID,
                                        boughtTradeByID,
                                        setTradeBeenBought,
                                        setShowCopyDetails }) {
    const [lotSize, setLotSize] = React.useState(0)
    const [checked, setChecked] = React.useState(true)
    const [buying, setBuying] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const handleBuy = ()=>{
        if(lotSize > 0){
            setError(null)
            setBuying(true)
            setLoading(true)
            sendData(3000)
        }else{
            setError(resourse.error)
        }
    }
    const handleBuyAgain = () =>{
        const newArr = [...boughtTradeByID]
        const index = newArr.indexOf(selectedTradeByID);
        newArr.splice(index, 1)
        setBoughtTradeByID(newArr)
    }
    useEffect(() => {
        if(setTradeBeenBought){
            setTradeBeenBought(boughtTradeByID.includes(selectedTradeByID))
        }
    }, [selectedTradeByID,boughtTradeByID])
    
    const sendData = (timeMs)=> {  
        setBoughtTradeByID(prev=>[...prev,selectedTradeByID])
        setBuying(false)
        setTimeout(() => {
            setLoading(false)
          }, timeMs);
    }
    const successMsg = () =>
        <Grid container >
            <Grid item container justifyContent={"center"}>
                <Typography style={{fontSize:"18px",fontWeight:600}}>
                    Trade generated
                </Typography>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Typography sx={{fontSize:"16px",fontWeight:400}}>
                    TicketID #5544555, 
                </Typography>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Typography sx={{fontSize:"16px",fontWeight:400}}>
                    {`Buy ${lotSize} AUDUSD`}, 
                </Typography>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Typography sx={{fontSize:"18px"}}>
                    P/L $72.35
                </Typography>
            </Grid>
        </Grid>
  
    return (
    <Grid container spacing={2}>
        <Grid container item justifyContent={"center"}>
            <Typography>{resourse.header}</Typography>
        </Grid>
        <Grid container item justifyContent={"space-between"}>
            <Grid item><Typography>{resourse.symbolTitle}</Typography></Grid>
            <Grid item><Typography>{resourse.symbolValue}</Typography></Grid>
        </Grid>
        <Grid container item justifyContent={"space-between"}>
            <Grid item><Typography>{resourse.sizeTitle}</Typography></Grid>
            <Grid item><Typography>{resourse.sizeValue}</Typography></Grid>
        </Grid>
        <Grid container item justifyContent={"space-between"} sx={{gap:"1px"}}>
            <Grid item sx={{ width: "54%",backgroundColor:"#31A060",height:"5px" }}/>
            <Grid item sx={{ width: "42%",backgroundColor:"#F53F3F",height:"5px" }}/>
        </Grid>
        <Grid container item justifyContent={"space-between"} sx={{gap:"1px"}}>
            <Grid item sx={{color:"#31A060" }}>
                <Typography>{`${resourse.winTitle} ${resourse.winValue}`}</Typography>
            </Grid>
            <Grid item sx={{color:"#F53F3F"}}>
            <Typography>{`${resourse.lossTitle} ${resourse.lossValue}`}</Typography>
            </Grid>
        </Grid>
        <Grid container item justifyContent={"space-between"}>
            <Grid item><Typography>{resourse.tradeWin}</Typography></Grid>
            <Grid item><Typography>{resourse.tradeLost}</Typography></Grid>
        </Grid>
        <Grid item container>
            <Alert severity="info" sx={{width:"100%",margin:2}} >{resourse.infoMsg}</Alert>
        </Grid>
        {boughtTradeByID.includes(selectedTradeByID) ? null :
            <>
                <Grid container item justifyContent={"center"}>
                    <Typography>{resourse.inputLabel}</Typography>
                </Grid>
                <Grid container item>
                    <IncDecCounter num={lotSize} setNum={setLotSize} />
                </Grid>
                <Grid container item>
                    <FormControlLabel
                        value="start"
                        control={<Switch checked={checked} onChange={e=>setChecked(!checked)} />}
                        label={resourse.switchLabel}
                        labelPlacement="start"
                    />
                </Grid>
            </>
        }
            {!!error && !lotSize && <Grid item container >
                            <Alert sx={{width:"100%"}} severity="error">{resourse.error}</Alert>
                        </Grid>
            }
        {!buying && !boughtTradeByID.includes(selectedTradeByID)  ?
        <Grid container item justifyContent={"center"}>
            <Button fullWidth onClick={handleBuy}>
                <Grid container item sx={{backgroundColor:"#E9ECEF"}}>
                    <Grid  item container justifyContent={"center"}>
                        {resourse.actionBtnTitle}
                    </Grid>
                    <Grid justifyContent={"center"} item container>
                        {`${resourse.actionBtnValue} ${lotSize}`}
                    </Grid>
                </Grid>
            </Button>
        </Grid>
        : loading ? 
            <Grid container>
                <PaperContainer bgcolor={"#FFF6E6"} padding={2}>
                    <CircularProgress 
                        size={22} color="success"
                        sx={{marginRight:2}}/>
                <span style={{fontSize:"18px", marginLeft:3}}>
                    Sent to the broker
                </span>
                </PaperContainer>
            </Grid>
            :
            <Grid item container >
                <Alert severity="success">{successMsg()}</Alert>
            </Grid>
    }
        {!boughtTradeByID.includes(selectedTradeByID) ?<Grid container item justifyContent={"center"}>
            <Button fullWidth sx={{color:'#5C5C5C'}} onClick={e=>setShowCopyDetails(false)}>{resourse.cancelBtn}</Button>
        </Grid>
         : loading ? null :
         <Grid item container >
            <Button fullWidth  onClick={handleBuyAgain} sx={{padding:1}}>
                <Grid container item sx={{backgroundColor:"#E9ECEF"}}>
                    <Grid  item container justifyContent={"center"}>
                        {"Buy Again"}
                    </Grid>
                </Grid>
            </Button>
        </Grid>
         }
    </Grid>
  )
}
