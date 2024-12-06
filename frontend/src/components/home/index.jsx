import React from "react";
import Card from "./Card";
import { dummyData } from "../../utils/DummyText";
const HomeMain = () => {
    console.log(dummyData)
  return (
    <div>
      This is home main
      <Card brands={dummyData.brands} />
    </div>
  );
};
export default HomeMain;
