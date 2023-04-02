import { Paper, Typography } from "@mui/material";
import React from "react";

export default function PaperItem({ line1, line2, flexGrow }) {
  return (
    <Paper
      elevation={0}
      style={{
        borderRadius: 5,
        backgroundColor: "#fff",
        height: "78px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: flexGrow,
        flexBasis: "137px",
      }}
    >
      <Typography color={"#568CF3"} variant="SH2">
        {line1}
      </Typography>
      <Typography variant="OP3">{line2}</Typography>
    </Paper>
  );
}
