import React from "react";

import { Skeleton } from "@mui/material";

import "./NavigationSkeleton.scss";

const SkeletonItem = () => {
  return (
    <Skeleton
      width={130}
      variant="rounded"
      animation="wave"
      sx={{ height: "100%" }}
    />
  );
};

const NavigationSkeleton = () => {
  return (
    <div className="navigation_skeleton">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
};

export default NavigationSkeleton;
