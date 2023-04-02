import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);
theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
theme.typography.h1 = {
  fontSize: "1.4rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h2 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.25rem",
  },
};
theme.typography.body1 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};

theme.typography.subtitle1 = {
  fontSize: 16,
  textAlign: "left",
  letterSpacing: "0.01em",
  color: "#5C5C5C",
};
theme.typography.subtitle2 = {
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: "0.01em",
  color: "#5C5C5C",
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
};
theme.typography.OP3 = {
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: "0.01em",
  color: "#5C5C5C",
};
theme.typography.OP1 = {
  fontSize: "14px",
  letterSpacing: "0.01em",
};
theme.typography.P1 = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#5C5C5C",
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};
theme.typography.P2 = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#5C5C5C",
  letterSpacing: "0.01em",
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
};
theme.typography.SH2 = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#5C5C5C",
  letterSpacing: "0.01em",
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
};
theme.typography.SH1 = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#333333",
  letterSpacing: "0.01em",
};
theme.typography.SH3 = {
  fontSize: "14px",
  letterSpacing: "0.01em",
};
theme.typography.P3 = {
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.01em",
};

export default function CustomTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
