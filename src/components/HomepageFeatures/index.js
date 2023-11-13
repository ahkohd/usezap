import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "🚄 Navigate at the speed-of-thought",
    description: (
      <>Activate your apps with shortcuts, focus on what truly matters!</>
    ),
  },
  {
    title: "🚥 A spotlight-like dock",
    description: (
      <>The macOS Dock and Launchpad reimagined as a Spotlight window</>
    ),
  },
  {
    title: "💫 Effortless context switching",
    description: <>Organize your apps into spaces for easy context switch</>,
  },
  {
    title: "🖥 Designed for multiple screen setup",
    description: (
      <>
        Jump to windows on other screens and have your mouse
        auto-positioned&trade;
      </>
    ),
  },
  {
    title: "💨 Vim motions",
    description: <>Cycle between apps, windows, spaces using Vim motions</>,
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
