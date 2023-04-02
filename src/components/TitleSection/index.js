import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import TwoLineText from '../TwoLineText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PaperItem from '../PaperItem';

const data=[{line1:'50,183.82',line2:"Balance"}
,{line1:"$53.44",line2:"Net P/L"},{line1:"$53.44",line2:"Floating"},
{line1:"$50,183.82",line2:"Equity"},
{line1:"$53.44",line2:"Margin"},

]

export default function TitleSection() {
    const [open, setOpen] = React.useState(false);
    const mobileDisplay = useMediaQuery('(max-width:835px)');

    const handleClick = () => {
      setOpen(!open);
    };
    return (
    <Grid container style={{margin:15}}  >
        <Grid container spacing={4} style={{alignItems: "flex-end",marginBottom:5}}>
            <Grid item>
                <Typography variant='h1' >{"Neptune"}</Typography>
            </Grid>
            {mobileDisplay ? null :
                <> 
                    <Grid item>
                        <Typography variant='h2' color='#31A060' >{ "402.70%"}</Typography>
                    </Grid>
                    <Grid item>
                        <TwoLineText 
                            resource={{line1:"0.84771",line2:"Win %"}}
                            variant1={'subtitle1'}
                            variant2={'OP3'}
                            style2={{opacity:0.6, textAlign:"left"}}
                        />
                    </Grid>
                    <Grid item>
                        <TwoLineText 
                            resource={{line1:"103",line2:"Age (weeks)"}}
                            variant1={'subtitle1'}
                            variant2={'OP3'}
                            style2={{opacity:0.6, textAlign:"left"}} 
                        />
                    </Grid>
                </>
            }
        </Grid>
        <Grid container item style={{alignItems: "flex-end",marginBottom:5}}>
            <Typography variant='P1' >{"Neptune is semi-automated and follows both fundamental and technical analysis. "}</Typography>
        </Grid>
        <Grid container item style={{alignItems: "center",marginBottom:5,justifyContent:mobileDisplay ? "center" : 'flex-start'}} >
            <Typography variant='P2' color='#31A060' >{"Read more"}</Typography>
            <IconButton onClick={handleClick} color='#31A060' size={"small"} edge={"start"}>
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </IconButton>
            {open ? <Grid container variant='body1' >open text....</Grid>: null}
        </Grid>
        <Grid item container style={{gap:"10px",width:"100%"}}>
            {data.map((item,id,row)=><PaperItem 
                                        key={id} 
                                        flexGrow={row.length -1 === id ? 2 : 1}
                                        line1={item.line1} 
                                        line2={item.line2}
                                    />)
            }
        </Grid>
    </Grid>
    )
}
