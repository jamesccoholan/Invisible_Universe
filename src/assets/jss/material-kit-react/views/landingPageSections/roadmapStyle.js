import { title } from "assets/jss/material-kit-react.js";

const roadmapStyle = {
  section: {
    margin: "70px auto 70px auto",
    "@media (max-width: 500px)": {
      margin: "00px auto 70px auto",
    },
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#3C4858",
    textAlign: "center",
    maxWidth: "95%",
    margin: "auto",
  },
  textCenter: {
    textAlign: "center",
  },
  roadmapContainer: {
    position: "relative",
    padding: "50px 0",
  },
  roadmapSectionContainer: {
    visibility: "visible",
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "30px",
  },
  roadmapSection: {
    width: "calc(100% - 54px)",
    paddingLeft: "28px",
  },
  roadmapDot: {
    width: "54px",
    height: "54px",
    position: "relative",
    zIndex: "99",
    "@media (max-width: 1000px)": {
      height: "50px",
      width: "50px",
    },
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  roadmapPhase: {
    fontWeight: "bold",
    fontSize: "44px",
    letterSpacing: "0.125em",
    color: "#3C4858",
    marginBottom: "18px",
    marginTop: "0",
  },
  roadmapItemTitle: {
    fontWeight: "bold",
    color: "#3C4858",
  },
};

export default roadmapStyle;
