import { FunctionComponent } from "react";
import AboutContainer1 from "../components/Homepage";
import AboutContainer from "../components/AboutContainer";
import GameFeaturesContainer from "../components/GameFeaturesContainer";
import HowToPlayContainer from "../components/HowToPlayContainer";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.navbar}>
        <div className={styles.navbar1}>
          <div className={styles.navbar2}>
            <div className={styles.container}>
              <div className={styles.group981Parent}>
                <img
                  className={styles.group981}
                  alt=""
                  src="/group-98-1@2x.png"
                />
                <div className={styles.columnWrapper}>
                  <div className={styles.column}>
                    <div className={styles.column1}>
                      <div className={styles.link}>About</div>
                      <div className={styles.link}>Features</div>
                      <div className={styles.link}>How to Play</div>
                      <div className={styles.link}>Docs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.links}>
                  <div className={styles.mingcutetelegramFillParent}>
                    <img
                      className={styles.mingcutetelegramFillIcon}
                      alt=""
                      src="/mingcutetelegramfill.svg"
                    />
                    <img
                      className={styles.mingcutetelegramFillIcon}
                      alt=""
                      src="/ritwitterxfill.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.credits}>
            <div className={styles.divider} />
            <div className={styles.mingcutetelegramFillParent}>
              <div className={styles.text}>
                2023 Relume. All right reserved.
              </div>
              <div className={styles.mingcutetelegramFillParent}>
                <div className={styles.link4}>Privacy Policy</div>
                <div className={styles.link4}>Terms of Service</div>
                <div className={styles.link4}>Cookies Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutContainer1 />
      <AboutContainer />
      <GameFeaturesContainer />
      <HowToPlayContainer />
      <div className={styles.column}>
        <Footer dimensionCode="/group-98-1@2x.png" />
      </div>
    </div>
  );
};

export default LandingPage;
