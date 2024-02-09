import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Step2Container.module.css";

type Step2ContainerType = {
  stepDescription?: string;
  matchAndWagerDescription?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Step2Container: FunctionComponent<Step2ContainerType> = ({
  stepDescription,
  matchAndWagerDescription,
  propPadding,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.frameWrapper}>
        <div className={styles.headingWrapper}>
          <b className={styles.heading}>{stepDescription}</b>
        </div>
      </div>
      <div className={styles.text}>{matchAndWagerDescription}</div>
    </div>
  );
};

export default Step2Container;
