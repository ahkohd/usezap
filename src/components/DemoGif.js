import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const DemoGif = ({ src, alt }) => (
  <img
    style={{ borderRadius: "30px", margin: "" }}
    src={useBaseUrl(src)}
    alt={alt}
  />
);
