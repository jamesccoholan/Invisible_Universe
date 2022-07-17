import {
  container,
  container2,
  container3,
  title,
} from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",

    ...container,
  },
  container2: {
    zIndex: "12",
    color: "#FFFFFF",

    ...container2,
  },
  container3: {
    zIndex: "12",
    color: "#FFFFFF",
    background: "#0a032d",
    ...container3,
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
  },
  main: {
    background: "#FFFFFF",
    position: "flex",
    zIndex: "3",
  },
  main2: {
    background: "#000000",
    position: "relative",
    zIndex: "3",
    textAlign: "center",
    overflow: "hidden",
  },

  main3: {
    background: "#0a032d",
    position: "relative",
    zIndex: "3",
    textAlign: "center",
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
