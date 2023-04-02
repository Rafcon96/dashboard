import { Grid, Paper } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function PaperContainer({ children, styleProp }) {
  return (
    <Grid container>
      <Paper variant="outlined" sx={styleProp}>
        {children}
      </Paper>
    </Grid>
  );
}
PaperContainer.propTypes = {
  children: PropTypes.node.isRequired,
  styleProp: PropTypes.object,
};
