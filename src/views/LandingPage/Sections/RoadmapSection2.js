import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle2";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: 1,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Website/01_Pete_CoinFront_OHfyRigcC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146325564",
    items: [
      {
        title: "VALUE PROP",
        description:
          "The R3al Meteverse producer's pass gives you the opportunity to create episodes, influence cast decisions and control the fate of Season 2! You'll also get exclusive early access to see the episodes of TRM and receive Airdrops throughout the series. These utilities include behind-the-scenes content like production storyboards, gifs from the series, audition submission forms and never-before seen production stills. We want you to see the added value that holding this NFT will give you, but most importantly we want you to create the story with us!",
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
    img: "https://ik.imagekit.io/mbhxghyf1m2/Website/02_Monty_CoinFront_bJD8mgtkJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146326029",
    items: [
      {
        title: "HOW?",
        description:
          "In the Producer's Room, contribute to Mad Lib style confessionals where you control the character and decide what they say. With our quick turn animation studio, the most popular choices will be brought to life and animated in days. Pass holders will also submit ideas in the producer's room for special episodes like the final episode Where Are They Now? The submission will be voted on and animated. Even more, if your entries are selected for these special episodes, you will be credited at the end of the episode. It can be your wallet #, twitter name or ens name! Again, we want to reward your creativity and give the control back to you! Producer Pass holders will also decide on the city where Season 2 takes place. Is it New York, Nashville, Miami or Nantucket? The country is wide open, and the location with the most votes will be home to the new cast. But thats not the best part…..",
      },
    ],
  },
  {
    phase: 3,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Website/03_Sam_CoinFront_nFgutHxXUq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657146326380",
    items: [
      {
        title: "GET YOUR CHARACTER ANIMATED!",
        description:
          "There are two ways you can get your PFP character animated. If you are a holder of an NFT from one of the five OG communities our cast comes from and you're in the top 500 on our leaderboard, you could win a spot to have your character make a cameo appearance this season. You might even be able to voice your character yourself! The holders who meet the criteria will be asked to write in why they should be animated, describing their character's personality, while giving the producers a glimpse into the back story you've created. The community will choose one to be animated and make a guest appearance on the show. Examples will be posted when the time is right! The other cool way to get animated is by being in the top 500 on the leaderboard and submitting your licensable character to be on Season 2. That's right, we're casting next season's House Mates from this season's Pass Holders!",
      },
    ],
  },
];

export default function WorkSection2() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Fade duration={1000} bottom cascade>
            {/* <div>
              <h1 className={classes.title}>Roadmap</h1>
              <h4 className={classes.description}>
                {
                  "This animated parody of a House Reality show features cast members from five different NFT communities who are transported to LA to experience life in the real world. And, just like a reality TV show, our cast is ready for primetime! Fights? Parties? Bad Advice? Let’s just say, they’ll share a house, make some jokes, make some mistakes, and maybe even make out! Join our community to influence cast decisions, create episodes, and control the fate of Season 2! "
                }
              </h4>
            </div> */}
          </Fade>
          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <Fade duration={1000} bottom cascade key={r.phase}>
                <div className={classes.roadmapSectionContainer}>
                  {/* <img
                    src={r.img}
                    alt="Disconaut Helmet"
                    className={classes.roadmapDot}
                  /> */}
                  <div className={classes.roadmapSection}>
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
