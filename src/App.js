import "./App.css";
import Chart from "./components/Chart";
import React from "react";
import TitleSection from "./components/TitleSection";
import PaperContainer from "./components/PaperContainer";
import Tabs from "./components/BasicTabs";
import DataGrid from "./components/DataGrid";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DataCards from "./components/DataCards";
import SideBar from "./components/SideBar";
import Theme from "./Theme";
import { chartData } from "./data";

function App() {
  const mobileDisplay = useMediaQuery("(max-width:835px)");
  const [boughtTradeByID, setBoughtTradeByID] = React.useState([]);
  const [selectedTradeByID, setSelectedTradeByID] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const renderChildren = (component) => {
    if (component === "chart") {
      return <Chart data={chartData} />;
    } else {
      return <Chart data={chartData} />;
    }
  };

  return (
    <div className="App">
      <Theme>
        <Grid container spacing={1} justifyContent={"center"}>
          <Grid xs={mobileDisplay ? 12 : 8} lg={9} item>
            <Grid item container>
              {mobileDisplay ? (
                <TitleSection />
              ) : (
                <PaperContainer
                  styleProp={{
                    backgroundColor: "#F8F9FA",
                    padding: 5,
                    width: "100%",
                  }}
                >
                  <TitleSection />
                </PaperContainer>
              )}
            </Grid>
            <Grid
              item
              container
              sx={{
                marginBottom: 2,
                marginTop: 2,
                backgroundColor: mobileDisplay ? "#fff" : null,
              }}
            >
              {mobileDisplay ? (
                <Chart data={chartData} mobileDisplay={true} />
              ) : (
                <Tabs renderChildren={renderChildren} />
              )}
            </Grid>
            <Grid item container>
              {mobileDisplay ? (
                <DataCards
                  selectedTradeByID={selectedTradeByID}
                  setBoughtTradeByID={setBoughtTradeByID}
                  boughtTradeByID={boughtTradeByID}
                  setSelectedTradeByID={setSelectedTradeByID}
                />
              ) : (
                <PaperContainer
                  styleProp={{
                    backgroundColor: "#F8F9FA",
                    padding: 2,
                    width: "100%",
                  }}
                >
                  <DataGrid
                    boughtTradeByID={boughtTradeByID}
                    setSelectedTradeByID={setSelectedTradeByID}
                    setExpanded={setExpanded}
                  />
                </PaperContainer>
              )}
            </Grid>
          </Grid>
          {mobileDisplay ? null : (
            <Grid item xs={4} lg={3} sx={{ marginTop: 1 }}>
              <SideBar
                selectedTradeByID={selectedTradeByID}
                setBoughtTradeByID={setBoughtTradeByID}
                boughtTradeByID={boughtTradeByID}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            </Grid>
          )}
        </Grid>
      </Theme>
    </div>
  );
}

export default App;
