import { Grid } from "@mui/material";
import React from "react";
import DataCardItem from "../DataCardItem";
import { tradeData } from "../../data";

export default function DataCards({
  selectedTradeByID,
  setSelectedTradeByID,
  setBoughtTradeByID,
  boughtTradeByID,
}) {
  return (
    <Grid container>
      {tradeData.map((item) => (
        <DataCardItem
          data={item}
          key={item.id}
          id={item.id}
          selectedTradeByID={selectedTradeByID}
          setSelectedTradeByID={setSelectedTradeByID}
          setBoughtTradeByID={setBoughtTradeByID}
          boughtTradeByID={boughtTradeByID}
        />
      ))}
    </Grid>
  );
}
