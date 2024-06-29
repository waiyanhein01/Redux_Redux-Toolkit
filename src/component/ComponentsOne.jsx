import React from "react";
import { useSelector } from "react-redux";
import ComponentsTwo from "./ComponentsTwo";

const ComponentsOne = () => {
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      Counter is {value}
      <ComponentsTwo />
    </div>
  );
};

export default ComponentsOne;
