import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  dimensionCode?: string;
};

const Footer: FunctionComponent<FooterType> = ({ dimensionCode }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.group981Parent}>
              <img className={styles.group981} alt="" src={dimensionCode} />
              <b className={styles.stakeYourClaimContainer}>
                <p className={styles.stakeYourClaim}>Stake Your Claim in</p>
                <p className={styles.stakeYourClaim}> the Omniverse!</p>
              </b>
              <div className={styles.frameGroup}>
                <div className={styles.headingWrapper}>
                  <a href="https://t.me/+GoPViNZPXcFhYThl" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
                    <b className={styles.heading}>Join Telegram</b>
                  </a>
                </div>
                <div className={styles.headingWrapper}>
                  <a href="https://twitter.com/omnicatroyale" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
                    <b className={styles.heading1}>Follow on X</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.credits}>
            <div className={styles.divider} />
            <div className={styles.row}>
              <div className={styles.text}>
                © 2023 Omniroyale. All rights reserved.
              </div>
              <div className={styles.footerLinks}>
                <div className={styles.link}>Privacy Policy</div>
                <div className={styles.link}>Terms of Service</div>
                <div className={styles.link}>Cookies Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
