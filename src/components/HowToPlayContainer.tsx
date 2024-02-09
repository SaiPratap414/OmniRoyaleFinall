import { FunctionComponent } from "react";
import Step1Container from "./Step1Container";
import Step2Container from "./Step2Container";
import styles from "./HowToPlayContainer.module.css";

const HowToPlayContainer: FunctionComponent = () => {
  return (
    <div id="howToPlaySection" className={styles.howToPlay}>
      <div className={styles.howToPlay1}>
        <div className={styles.content}>
          <div className={styles.sectionTitle}>
            <div className={styles.tagline}>Tagline</div>
            <div className={styles.content1}>
              <b className={styles.howToPlay2}>How to Play</b>
            </div>
          </div>
        </div>
        <div className={styles.howToPlayInner}>
          <div className={styles.frameParent}>
            <Step1Container
              stepDescription="Step 1"
              gameplayDescription="Connect your crypto wallet and deposit"
              tokenDescription="$OMNI tokens."
            />
            <Step2Container
              stepDescription="Step 2"
              matchAndWagerDescription="Choose your match and wager amount."
            />
            <Step1Container
              stepDescription="Step 3"
              gameplayDescription="Engage in fast-paced, strategic gameplay and "
              tokenDescription="outmaneuver your opponents."
              propPadding="var(--padding-3xl) var(--padding-5xl)"
              propWidth="543px"
            />
            <Step2Container
              stepDescription="Step 4"
              matchAndWagerDescription="Win and claim your $OMNI earnings."
              propPadding="var(--padding-16xl) var(--padding-5xl)"
            />
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.frameDiv} />
          </div>
        </div>
        <div className={styles.howToPlayChild}>
          <div className={styles.frameWrapper}>
            <div className={styles.headingWrapper}>
              <b className={styles.heading}>Play Now</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayContainer;
