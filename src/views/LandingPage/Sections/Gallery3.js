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
      <h2 style={{ textAlign: "left" }} className={classes.title}>
        INVISIBLE UNIVERSE
      </h2>
      <h3 style={{ textAlign: "left" }} className={classes.description3}>
        {
          "Invisible Universe is an internet-first animation studio that develops original character IP on social media and web3 platforms in partnership with some of the world's biggest celebrities. Our mission is to create the next household name animated franchises faster and more economical than traditional models. We believe the next generation of animated franchises will be born on the internet. The company is backed by some of the best media and technology investors in Hollywood and Silicon Valley, including Alexis Ohanian's Seven Seven Six, Initialized Capital, The Chernin Group, Serena Williams, Will Smith's Dreamers VC, CASSIUS Family, Spencer Rascoff's 75 & Sunny VC, and many more."
        }
      </h3>
      <h2 style={{ textAlign: "left" }} className={classes.title}>
        TEAM
      </h2>
      <div className={classes.title7}>
        <GridContainer>
          <GridItem xs={5} sm={12} md={2}>
            <Card plain>
              <GridItem xs={100} className={classes.itemGrid2}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/07_CoreTeam_Bruno_3JhjTRopyU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146333336"
                  }
                  alt="IU"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={5} sm={12} md={2}>
            <Card plain>
              <GridItem xs={100} sm={100} md={0} className={classes.itemGrid2}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/06_CoreTeam_Henrique_l5W_OtaPM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146332505"
                  }
                  alt="IU"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <Card plain>
              <GridItem xs={100} sm={100} md={0} className={classes.itemGrid2}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/03_CoreTeam_Van_ytpFPOb5d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146332377"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <Card plain>
              <GridItem xs={100} sm={100} md={0} className={classes.itemGrid2}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/04_CoreTeam_Yohann_OrddTsyFH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146332540"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <Card plain>
              <GridItem xs={100} sm={100} md={0} className={classes.itemGrid2}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/05_CoreTeam_Fubs_5r9Pf-jd6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146331977"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <Card plain>
              <GridItem xs={100} sm={100} md={0} className={classes.itemGrid2}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/Website/02_CoreTeam_Ben_dn0kTbhayO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146331405"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={2}>
          <Card plain>
            <GridItem xs={100} sm={100} md={0} className={classes.itemGrid2}>
              <img
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Website/01_CoreTeam_Dan_5tWTDxkclq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146332253"
                }
                alt="Disconaut Suit"
                className={imageClasses}
              />
            </GridItem>
          </Card>
        </GridItem> */}
        </GridContainer>
      </div>
      <h2 style={{ textAlign: "left" }} className={classes.title}>
        FULL CREDITS
      </h2>
    </div>
  );
}
