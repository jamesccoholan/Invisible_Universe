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

export default function Gallery3() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>INVISIBLE UNIVERSE</h2>
      <GridContainer>
        <GridItem xs={5} sm={12} md={2}>
          <Card plain>
            <GridItem xs={100} className={classes.itemGrid}>
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
        <GridItem xs={5} sm={12} md={2}>
          <Card plain>
            <GridItem xs={100} sm={100} md={0} className={classes.itemGrid}>
              <img
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Website/02_Monty_CoinFront_bJD8mgtkJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146326029"
                }
                alt="IU"
                className={imageClasses}
              />
            </GridItem>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <Card plain>
            <GridItem xs={100} sm={100} md={0} className={classes.itemGrid}>
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
        <GridItem xs={12} sm={12} md={2}>
          <Card plain>
            <GridItem xs={100} sm={100} md={0} className={classes.itemGrid}>
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
        <GridItem xs={12} sm={12} md={2}>
          <Card plain>
            <GridItem xs={100} sm={100} md={0} className={classes.itemGrid}>
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
        <GridItem xs={12} sm={12} md={2}>
          <Card plain>
            <GridItem xs={100} sm={100} md={0} className={classes.itemGrid}>
              <img
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Website/01_Pete_CoinFront_OHfyRigcC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146325564"
                }
                alt="Disconaut Suit"
                className={imageClasses}
              />
            </GridItem>
          </Card>
        </GridItem>
        <h3 className={classes.description2}>
          {
            "Invisible Universe is an internet-first animation studio that develops original character IP on social media and web3 platforms in partnership with some of the world's biggest celebrities. Our mission is to create the next household name animated franchises faster and more economical than traditional models. We believe the next generation of animated franchises will be born on the internet. The company is backed by some of the best media and technology investors in Hollywood and Silicon Valley, including Alexis Ohanian's Seven Seven Six, Initialized Capital, The Chernin Group, Serena Williams, Will Smith's Dreamers VC, CASSIUS Family, Spencer Rascoff's 75 & Sunny VC, and many more."
          }
        </h3>
      </GridContainer>
    </div>
  );
}
