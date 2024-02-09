import { FunctionComponent } from "react";
import styles from "./AboutContainer.module.css";

const AboutContainer: FunctionComponent = () => {
  return (
    <div id="aboutSection" className={styles.about}>
      <div className={styles.aboutInner}>
        <div className={styles.frameParent}>
          <div className={styles.maskGroupWrapper}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-30293.svg"
              />
              <div className={styles.headingParent}>
                <b className={styles.heading}>About</b>
                <div className={styles.omniRoyaleIsContainer}>
                  <p className={styles.omniRoyaleIs}>
                    Omni Royale is a cutting-edge, third-person shooter that's
                    rewriting the rules of web3 gaming. Powered by $OMNI, the
                    first omnichain meme coin,
                  </p>
                  <p className={styles.omniRoyaleIs}>
                    it brings an unprecedented level of cross-chain interaction
                    to gaming.
                  </p>
                  <p className={styles.omniRoyaleIs}>&nbsp;</p>
                  <p className={styles.omniRoyaleIs}>
                    Brace yourself for adrenaline-pumping interchain showdowns,
                    wager your skill with $OMNI, and emerge victorious in an
                    epic battle across the omniverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
