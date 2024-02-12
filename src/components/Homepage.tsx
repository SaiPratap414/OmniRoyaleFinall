import React, { FunctionComponent, useRef, useEffect } from "react";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the videoRef has been initialized
    if (videoRef.current) {
      // Set the currentTime of the video to 2 seconds
      videoRef.current.currentTime = 2;
    }
  }, []); // Run this effect only once after the component mounts

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.homepage}>
          <video ref={videoRef} autoPlay muted loop className={styles.video}>
            <source src="o.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.homepageInner}>
            <div className={styles.frameParent}>
              <div className={styles.group981Parent}>
                <img className={styles.group981} alt="" src="/group-98-1@2x.png" />
                <div className={styles.columnWrapper}>
                  <div className={styles.column}>
                    <div className={styles.column1}>
                      <div className={styles.link} onClick={() => scrollToSection("aboutSection")}>About</div>
                      <div className={styles.link} onClick={() => scrollToSection("featuresSection")}>Features</div>
                      <div className={styles.link} onClick={() => scrollToSection("howToPlaySection")}>How to Play</div>
                      <div className={styles.link}>Docs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.links}>
  <div className={styles.mingcutetelegramFillParent}>
    <a href="https://t.me/+GoPViNZPXcFhYThl" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
      <img
        className={styles.mingcutetelegramFillIcon}
        alt=""
        src="/mingcutetelegramfill.svg"
      />
    </a>
    <a href="https://twitter.com/omnicatroyale" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
      <img
        className={styles.mingcutetelegramFillIcon}
        alt=""
        src="/ritwitterxfill.svg"
      />
    </a>
  </div>
</div>


              </div>
              <div className={styles.frameGroup}>
                <div className={styles.enterTheOmniverseConquerTParent}>
                  <b className={styles.enterTheOmniverseContainer}>
                    <p className={styles.enterTheOmniverse}>Enter the Omniverse,</p>
                    <p className={styles.enterTheOmniverse}>Conquer the Chains</p>
                  </b>
                  <div className={styles.poweredByOmni}>Powered by $OMNI</div>
                  <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <div className={styles.headingWrapper}>
                      <b className={styles.heading}>Play Now</b>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
