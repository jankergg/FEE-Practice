import React, { Suspense } from "react";
import DefaultPlaceHolder from "./DefaultPlaceHolder";

type WaitProps = {
  for: React.ComponentType<any>;
  placeHolder?: React.ComponentType<any>;
  children?: React.ComponentType<any>;
};

const Wait: React.FC<WaitProps> = (props) => {
  const Component = props.for;
  const Fallback = props.placeHolder || DefaultPlaceHolder;
  return (
    <Suspense fallback={<Fallback />}>
      <Component />
      {props.children}
    </Suspense>
  );
};
export default Wait;
