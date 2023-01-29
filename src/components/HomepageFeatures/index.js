import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Navigate at the Speed-of-Thought",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Bind your favorite apps with custom shortcuts and switch to them with a
        single keystroke. Focus on what truly matters and take your productivity
        to new heights.
      </>
    ),
  },
  {
    title: "A Dock-as-a-Spotlight",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Arrange your dock as needed and access all your apps in a single,
        organized window for quick and convenient access.
      </>
    ),
  },
  {
    title: "Effortless Context Switching",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Experience seamless productivity with app spaces, where different work
        contexts are elevated to a whole new level. Effortlessly create,
        organize, and switch between these spaces to maximize your workflow.
      </>
    ),
  },
  {
    title: "Seamless Multi-screen support",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Maximize your multi-screen setup with Zap's seamless support. Quickly
        switch to apps on other screens and have your mouse automatically moved
        to the window for effortless navigation.
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
    title: "Vim-inspired Navigation",
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
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
