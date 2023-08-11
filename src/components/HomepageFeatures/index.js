import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Navigate at the speed-of-thought",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Bind and activate your apps with shortcuts,
        focus on what truly matters
      </>
    ),
  },
  {
    title: "A spotlight-like dock",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        A macOS-like dock reimagined as a Spotlight launcher
      </>
    ),
  },
  {
    title: "Effortless context switching",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Organize your apps into workspaces and switch between them
      </>
    ),
  },
  {
    title: "Designed for multiple screen setup",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Activate windows on other screens and have your mouse auto-positioned&trade;
      </>
    ),
  },
  {
    title: "Vim-inspired features",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Bring the power of Vim to your app management with Zap's Vim-inspired
        mark feature. Quickly mark and recall app windows with ease, freeing up
        your mind to focus on your work.
      </>
    ),
  },
  {
    title: "Vim motions",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Elevate your productivity with Zap's Vim-inspired navigation.
        Effortlessly switch between docked apps using a simple and intuitive
        interface, modeled after the popular text editor Vim.{" "}
      </>
    ),
  },
  {
    title: "Your Cmd+Tab Replacement?",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Say goodbye to slow and cluttered app switching with Zap's Cmd+Tab
        replacement feature. Enable this in the preferences and enjoy
        lightning-fast, efficient app switching.
      </>
    ),
  },
  {
    title: "Optimized for Speed and Productivity",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Zap is designed for speed, efficiency, and lightweight performance.
        Built using Rust, every action is optimized for quick access and
        seamless productivity.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/*
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      */}
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
