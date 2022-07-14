import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Episode Guide</h2>
        </GridItem>
      </GridContainer> */}
      <div>
        <img
          className={classes.image}
          src={
            "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-14_at_1.22.04_PM_8E9qSC0iE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657819401157"
          }
          width="100%"
          height="auto"
        />
        <img
          className={classes.image}
          src={
            "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-14_at_1.24.12_PM_oCVqUt-Mm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657819466077"
          }
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
}
