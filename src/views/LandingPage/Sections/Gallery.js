import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <div className={classes.section}>
      <div>
        <h2 className={classes.title}>Cast Pages</h2>
        <h4 className={classes.description}>{""}</h4>
        <h4 className={classes.description}>{""}</h4>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/01_Pete_CoinFront_OHfyRigcC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146325564"
                  }
                  alt="IU"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/02_Monty_CoinFront_bJD8mgtkJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146326029"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/03_Sam_CoinFront_nFgutHxXUq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146326380"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/04_Journey_CoinFront_KqNe-K5fF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146326824"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/05_Claudine_CoinFront_KGNvtq_tzM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146327312"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
