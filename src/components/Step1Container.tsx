import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Step1Container.module.css";

type Step1ContainerType = {
  stepDescription?: string;
  gameplayDescription?: string;
  tokenDescription?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const Step1Container: FunctionComponent<Step1ContainerType> = ({
  stepDescription,
  gameplayDescription,
  tokenDescription,
  propPadding,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.frameWrapper}>
        <div className={styles.headingWrapper}>
          <b className={styles.heading}>{stepDescription}</b>
        </div>
      </div>
      <div className={styles.text} style={textStyle}>
        <p className={styles.connectYourCrypto}>{gameplayDescription}</p>
        <p className={styles.connectYourCrypto}>{tokenDescription}</p>
      </div>
    </div>
  );
};

export default Step1Container;
