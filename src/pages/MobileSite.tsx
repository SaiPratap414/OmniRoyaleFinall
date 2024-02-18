import { FunctionComponent } from "react";
import styles from "./MobileSite.module.css";

const MobileSite: FunctionComponent = () => {
  return (
    <div className={styles.mobileSite}>
      <div className={styles.group981Parent}>
        <img className={styles.group981} alt="" src="/group-98-1@2x.png" />
        <b className={styles.openInWebContainer}>
          <p className={styles.openInWeb}>open in web browser</p>
          <p className={styles.openInWeb}>for better viewing experience</p>
        </b>
        <div className={styles.followUsHereParent}>
          <div className={styles.followUsHere}>follow us here</div>
          <div className={styles.vectorParent}>
  <a href="https://t.me/+GoPViNZPXcFhYThl" target="_blank" rel="noopener noreferrer">
    <img className={styles.vectorIcon} alt="Telegram" src="/vector.svg" />
  </a>
  <a href="https://twitter.com/omnicatroyale" target="_blank" rel="noopener noreferrer">
    <img className={styles.vectorIcon} alt="twitter" src="/subtract.svg" />
  </a>
  {/* Add more social media links as needed */}
</div>

        </div>
      </div>
    </div>
  );
};

export default MobileSite;
