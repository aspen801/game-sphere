import React from "react";

import { Skeleton } from "@mui/material";

import "./IntroSkeleton";

const IntroSkeleton = () => {
  return (
    <div className="intro_skeleton">
      <h1>
        <Skeleton />
      </h1>
      <h2>
        <Skeleton />
      </h2>
      <p>
        <Skeleton height={100} />
      </p>
      <a className="intro_skeleton__button">
        <Skeleton />
      </a>
    </div>
  );
};

export default IntroSkeleton;
