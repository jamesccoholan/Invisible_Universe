import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",

    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 auto 0",
    // marginTop: "180px",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  main2: {
    background: "#000000",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0px 0px 0px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  titleButton: {
    margin: "0 10px 0 0",
  },
};

export default landingPageStyle;
