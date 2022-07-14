import { title, title2 } from "assets/jss/material-kit-react.js";

const storyStyle = {
  section: {
    margin: "0px 0 0px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  title2: {
    ...title2,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  descriptionRight: {
    marginLeft: "30px",
    "@media (max-width: 800px)": {
      marginLeft: "0",
    },
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  sectionAreaMargin: {
    marginTop: "70px",
    "@media (max-width: 800px)": {
      marginTop: "30px",
    },
  },
  sectionArea: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 800px)": {
      display: "block",
    },
  },
  image: {
    maxHeight: "300px",
    boxShadow: "5px 5px 5px #999",
    "@media (max-width: 800px)": {
      maxWidth: "320px",
    },
  },
};

export default storyStyle;
