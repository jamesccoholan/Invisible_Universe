import { container, primaryColor } from "assets/jss/material-kit-react.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  left: {
    margin: "8px 0 auto 0",
    float: "left!important",
  },
  right: {
    margin: "auto",
    float: "right!important",
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "left",
    display: "flex",
    zIndex: "2",
    position: "relative",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
};
export default footerStyle;
