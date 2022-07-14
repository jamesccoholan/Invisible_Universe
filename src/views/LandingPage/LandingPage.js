import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import ProductSection2 from "./Sections/ProductSection2.js";
import ProductSection3 from "./Sections/ProductSection3.js";
import ProductSection4 from "./Sections/ProductSection4.js";
// import VideoSection from "./Sections/VideoSection.js";
// import IMGSection from "./Sections/FullIMG.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/RoadmapSection.js";
// import WorkSection2 from "./Sections/RoadmapSection2.js";
// import FULL from "./Sections/FULL.js";
import Gallery from "./Sections/Gallery.js";
import Gallery3 from "./Sections/Gallery3.js";
// import Gallery2 from "./Sections/Gallery2.js";
// import Story from "./Sections/Story.js";
// import Story2 from "./Sections/Story2.js";
// import FAQ from "./Sections/FAQ.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Invisible Universe"
        rightLinks={<HeaderLinks />}
        absolute
        {...rest}
      />
      <Parallax
        filter
        image={
          "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-12_at_2.25.30_PM_YIMo7wdUR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657650346161"
        }
        alt="IU"
      >
        <Fade duration={2000} bottom cascade>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={7}>
                {/* <Button
                  color="twitter"
                  size="lg"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  <i className="fas fa-play" />
                  Producers Portal
                </Button> */}
                <h3>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  This animated parody of a House Reality show features cast
                  members from five different NFT communities who are
                  transported to LA to experience life in the real world. And,
                  just like a reality TV show, our cast is ready for primetime!
                  Fights? Parties? Bad Advice? Let’s just say, they’ll share a
                  house, make some jokes, make some mistakes, and maybe even
                  make out! Join our community to influence cast decisions,
                  create episodes, and control the fate of Season 2!{" "}
                </h3>
                {/* <img src="https://ik.imagekit.io/mbhxghyf1m2/Website/LandingPage_Logo_0_4VPs-DI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146328644" /> */}
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Fade>
      </Parallax>
      <div className={classNames(classes.main2)}>
        <Gallery />
        <ProductSection />
        <ProductSection2 />
        <ProductSection3 />
        <ProductSection4 />
      </div>
      <div className={classNames(classes.main3)}>
        {/* <div className={classes.container3}>
          <Story />
          <WorkSection2 />
        </div> */}
        <div className={classNames(classes.main2)}>
          <div className={classes.container}>
            <Gallery3 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
