import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Acordion from "../Accordion";
import SettingsIcon from "@mui/icons-material/Settings";
import DraftsIcon from "@mui/icons-material/Drafts";
import CopyAllTwoToneIcon from "@mui/icons-material/CopyAllTwoTone";
import DirectCopyAction from "../DirectCopyAction";
import "./style.css";

export default function SideBar({
  selectedTradeByID,
  setBoughtTradeByID,
  boughtTradeByID,
  expanded,
  setExpanded,
}) {
  const [tradeBeenBought, setTradeBeenBought] = useState(false);
  const handleChangeAccodion = () => {
    setExpanded(!expanded);
  };

  const renderSettingIcon = () => <SettingsIcon sx={{ color: "#568CF3" }} />;
  const renderNotifyIcon = () => <DraftsIcon sx={{ color: "#568CF3" }} />;
  const renderCopyIcon = () => (
    <CopyAllTwoToneIcon
      sx={{ color: tradeBeenBought ? "#FFA800" : "#568CF3" }}
    />
  );

  const acordionTitle = (iconFun, title) => (
    <Grid container alignItems={"center"} spacing={1}>
      <Grid item>{iconFun()}</Grid>
      <Grid item sx={{ color: "#5C5C5C" }}>
        {title}
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={1} className="sidebar-container">
      <Grid item className="container-width">
        <Button variant="contained" fullWidth id="sign-btn">
          Sign in
        </Button>
      </Grid>
      <Grid item className="container-width">
        <Acordion title={acordionTitle(renderSettingIcon, "Activate")} />
      </Grid>
      <Grid item className="container-width">
        <Acordion title={acordionTitle(renderNotifyIcon, "Notify")} />
      </Grid>
      <Grid item className="container-width">
        <Acordion
          title={acordionTitle(renderCopyIcon, "Direct copy")}
          expanded={expanded}
          onChange={handleChangeAccodion}
        >
          {!!selectedTradeByID && (
            <DirectCopyAction
              selectedTradeByID={selectedTradeByID}
              setBoughtTradeByID={setBoughtTradeByID}
              boughtTradeByID={boughtTradeByID}
              setTradeBeenBought={setTradeBeenBought}
              handleCancel={handleChangeAccodion}
            />
          )}
        </Acordion>
      </Grid>
    </Grid>
  );
}
