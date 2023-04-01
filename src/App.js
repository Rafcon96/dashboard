import './App.css';
import Chart from "./components/Chart"
import React from 'react';
import TitleSection from './components/TitleSection'
import PaperContainer from './components/PaperContainer'
import Tabs from './components/BasicTabs';
import DataGrid from './components/DataGrid';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import DataCards from './components/DataCards';
import SideBar from './components/SideBar';
import Theme from './Theme'

const data = [
  {
    name: 'Jan’11',
    uv: 0,
    pv: 0,
  },
  {
    name: 'Mar’11',
    uv: 50,
    pv: 0,
  },
  {
    name: 'May’11',
    uv: 800,
    pv: 900,
  },
  {
    name: 'Jan’11',
    uv: 950,
    pv: 800,
  },
  {
    name: 'Mar’11',
    uv: 450,
    pv: 500,
  },
  {
    name: 'May’11',
    uv: 200,
    pv: 230,
  },
  {
    name: 'Jan’11',
    uv: 600,
    pv: 640,
  },
  {
    name: 'Mar’11',
    uv: 450,
    pv: 470,
  },
  
];
function App() {
  const mobileDisplay = useMediaQuery('(max-width:835px)');
  const [boughtTradeByID, setBoughtTradeByID] = React.useState([])
  const [selectedTradeByID, setSelectedTradeByID] = React.useState(null)
  const [expanded, setExpanded] = React.useState(false);

  const renderChildren = ((component)=>{
    if(component === "chart"){
      return <Chart data={data}/> 
    }else{
     return <Chart data={data}/>
    }
  })
  
  return (
    
    <div className="App" >
      
      <Theme>
        <Grid container spacing={1} justifyContent={"center"}>
          <Grid xs={mobileDisplay ? 12 : 9}  item >
            <Grid item container>
              {mobileDisplay ? <TitleSection /> 
              :
              <PaperContainer >
                <TitleSection />
              </PaperContainer>
              }
              
            </Grid>
            <Grid item container sx={{marginBottom:2,marginTop:2,backgroundColor: mobileDisplay ? "#fff" : null }}>
              {mobileDisplay ? <Chart data={data} mobileDisplay={true} /> :
              <Tabs renderChildren={renderChildren}/>
            }
            </Grid>
            <Grid  item container>
              { mobileDisplay ? 
                <DataCards 
                  selectedTradeByID={selectedTradeByID} 
                  setBoughtTradeByID={setBoughtTradeByID} 
                  boughtTradeByID ={boughtTradeByID}
                  setSelectedTradeByID={setSelectedTradeByID}/> 
                :
                <PaperContainer >
                  <DataGrid 
                    boughtTradeByID={boughtTradeByID} 
                    setSelectedTradeByID={setSelectedTradeByID} 
                    setExpanded={setExpanded}
                  />
                </PaperContainer>
              }
            </Grid>
        </Grid>
          {mobileDisplay ? 
            null 
            :
            <SideBar 
              selectedTradeByID={selectedTradeByID} 
              setBoughtTradeByID={setBoughtTradeByID}
              boughtTradeByID={boughtTradeByID}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            }
          </Grid>
      
     </Theme>
    </div>
  );
}

export default App;
