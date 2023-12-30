import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const DemoGif = ({ src, alt }) => (
  <img
    style={{ borderRadius: "46px", margin: "" }}
    src={useBaseUrl(src)}
    alt={alt}
  />
);
