import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "80px 0",
  },
  title: {
    ...title,
    color: "#FFFFFF",
    minHeight: "32px",
    marginLeft: "200px",
    marginRight: "200px",
    textDecoration: "none",
  },

  ...imagesStyle,

  itemGrid: {
    marginLeft: "150px",
    marginRight: "auto",
    justifyContent: "center !important",
  },

  title7: {
    minHeight: "32px",
    marginLeft: "200px",
    marginRight: "200px",
    textDecoration: "none",
  },

  column: {
    float: "left",
    width: "25%",
  },

  /* Clear floats after the columns */
  // row: after {
  //   content: "",
  //   display: "table",
  //   clear: "both",
  // },

  itemGrid2: {
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
    marginLeft: "200px",
    marginRight: "200px",

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
