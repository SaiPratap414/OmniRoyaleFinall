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
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon} alt="" src="/subtract.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSite;
