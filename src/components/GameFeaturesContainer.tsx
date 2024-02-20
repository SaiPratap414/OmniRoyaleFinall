import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./GameFeaturesContainer.module.css";

const GameFeaturesContainer: FunctionComponent = () => {
  const [inView, setInView] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update inView state based on whether the section is in view
        setInView(entry.isIntersecting);
      },
      {
        // Root is null to use the viewport as the root
        root: null,
        // Margin to trigger the intersection a bit earlier
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    // Cleanup the observer
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []); // Run this effect only once after the component mounts

  return (
    <div id="featuresSection" className={styles.features}>
      <div className={styles.features1}>
        <div className={styles.sectionTitle}>
          <div className={styles.column}>
            <b className={styles.heading}>Game Features</b>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-30291@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.vectorGroup}>
                  <img className={styles.vectorIcon} alt="" src="/mayhem.png" />
                  <b className={styles.heading1}>Multi-Chain Mayhem</b>
                </div>
                <div className={`${styles.text} ${styles['shake-text']}`}>
  Play and wager using $OMNI from various chains, bringing a
  unique, chain-agnostic gaming experience.
</div>

              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/rectangle-30287@2x.png"
              />
              <div className={styles.frameDiv}>
                <div className={styles.gameIconsswordClashParent}>
                  <img
                    className={styles.gameIconsswordClash}
                    alt=""
                    src="/gameiconsswordclash.svg"
                  />
                  <b className={styles.heading2}>Dynamic Matchmaking</b>
                </div>
                <div className={`${styles.text} ${styles['shake-text']}`}>
                  Enter death matches with casual $10 skirmishes to high-stakes
                  $100 battles. Your risk, your reward.
                </div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-30289@2x.png"
              />
              <div className={styles.frameParent1}>
                <div className={styles.gameIconsabstract053Parent}>
                  <img
                    className={styles.gameIconsswordClash}
                    alt=""
                    src="/gameiconsabstract053.svg"
                  />
                  <b className={styles.heading2}>Diverse Arenas</b>
                </div>
                <div className={`${styles.text2} ${styles['shake-text']}`}>
                  <p className={styles.battleAcrossMultiple}>
                    Battle across multiple chains, each offering unique
                    advantages and challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-30292@2x.png"
              />
              <div className={styles.frameParent3}>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.gameIconsswordClash}
                    alt=""
                    src="/gameiconslaurelcrown.svg"
                  />
                  <b className={styles.heading1}>Winner takes all</b>
                </div>
                <div className={`${styles.text} ${styles['shake-text']}`}>
                  Triumph in battles and reap the rewards. Top players in each
                  match take all winnings in every heart-pounding matchup.
                </div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/rectangle-30288@2x.png"
              />
              <div className={styles.frameParent4}>
                <div className={styles.gameIconscrownedSkullParent}>
                  <img
                    className={styles.gameIconsswordClash}
                    alt=""
                    src="/gameiconscrownedskull.svg"
                  />
                  <b className={styles.heading2}>Leaderboard Legends</b>
                </div>
                <div className={`${styles.text} ${styles['shake-text']}`}>
                  Rise in the ranks based on skill to become an Omni Royale
                  legend and bask in the glory and spoils of Omni Royale.
                </div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-30290@2x.png"
              />
              <div className={styles.frameParent5}>
                <div className={styles.gameIconsdropWeaponParent}>
                  <img
                    className={styles.gameIconsdropWeapon}
                    alt=""
                    src="/gameiconsdropweapon.svg"
                  />
                  <b className={styles.heading6}>Omniwars Arsenal</b>
                </div>
                <div className={`${styles.text5} ${styles['shake-text']}`}>
                  <p className={styles.battleAcrossMultiple}>
                    Harness unique, chain-specific armaments and artifacts to
                    outsmart and outlast adversaries.
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

export default GameFeaturesContainer;
