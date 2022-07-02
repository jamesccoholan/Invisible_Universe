import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: 1,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.41.55_PM_kGbZLfnvs9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656369758022",
    items: [
      {
        title: "Rarity",
        description:
          "The major categories that are being randomized, highlighting the 100+ traits that are algorithmically generated to create unique passes. We can also display an Ultra Rare hand made NFT here pointing out only 20 will be made.",
      },
      // {
      //   title: "Original Music",
      //   description:
      //     "Incredible Original Music, DAC will have original music drops.",
      // },
    ],
  },
  {
    phase: 2,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.41.59_PM_mBP4M6AxQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656369757757",
    items: [
      {
        title: "Hollywood",
        description:
          "This animated parody of a House Reality show features cast members from five different NFT communities who are transported to LA to experience life in the real world. And, just like a reality TV show, our cast is ready for primetime! Fights? Parties? Bad Advice? Let’s just say, they’ll share a house, make some jokes, make some mistakes, and maybe even make out! Join our community to influence cast decisions, create episodes, and control the fate of Season 2! ",
      },
    ],
  },
  {
    phase: 3,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.42.11_PM_239UtY-Dx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656369757639",
    items: [
      {
        title: "Beverly Hills",
        description:
          "This animated parody of a House Reality show features cast members from five different NFT communities who are transported to LA to experience life in the real world. And, just like a reality TV show, our cast is ready for primetime! Fights? Parties? Bad Advice? Let’s just say, they’ll share a house, make some jokes, make some mistakes, and maybe even make out! Join our community to influence cast decisions, create episodes, and control the fate of Season 2! ",
      },
    ],
  },
];

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Fade duration={1000} bottom cascade>
            <div>
              <h1 className={classes.title}>Roadmap</h1>
              <h4 className={classes.description}>
                {
                  "This animated parody of a House Reality show features cast members from five different NFT communities who are transported to LA to experience life in the real world. And, just like a reality TV show, our cast is ready for primetime! Fights? Parties? Bad Advice? Let’s just say, they’ll share a house, make some jokes, make some mistakes, and maybe even make out! Join our community to influence cast decisions, create episodes, and control the fate of Season 2! "
                }
              </h4>
            </div>
          </Fade>
          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <Fade duration={1000} bottom cascade key={r.phase}>
                <div className={classes.roadmapSectionContainer}>
                  <img
                    src={r.img}
                    alt="Disconaut Helmet"
                    className={classes.roadmapDot}
                  />
                  <div className={classes.roadmapSection}>
                    <h1 className={classes.roadmapPhase}>{r.phase}</h1>
                    {r.items.map((item) => (
                      <div key={item.title}>
                        <h3 className={classes.roadmapItemTitle}>
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className={classes.roadmapDivider} />
                </div>
              </Fade>
            ))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
