import React from "react";
import { useSelector } from "react-redux";
import ComponentsTwo from "./ComponentsTwo";
import ComponentsThree from "./ComponentsThree";

const ComponentsOne = () => {
  const {value}  = useSelector((state) => state.counter);
  return <div>Counter Value is {value}
  <ComponentsTwo/>
  <ComponentsThree/>
  </div>;
};

export default ComponentsOne;
