import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "80px 0",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    color: "#FFFFFF",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,

  itemGrid: {
    marginLeft: "150px",
    marginRight: "auto",
    justifyContent: "center !important",
  },
  itemGrid2: {
    // marginLeft: "0px",
    // marginRight: "auto",
    justifyContent: "center !important",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
    textAlign: "left",
  },
  description: {
    marginTop: "50px",
    color: "#FFFFFF",
    textAlign: "left",
  },
  description2: {
    marginTop: "50px",
    marginLeft: "200px",
    marginRight: "200px",
    color: "#FFFFFF",
    textAlign: "left",
  },
  description3: {
    marginTop: "50px",
    marginLeft: "40px",
    marginRight: "40px",
    color: "#FFFFFF",
    textAlign: "left",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  margin5: {
    margin: "5px",
  },
};

export default teamStyle;
