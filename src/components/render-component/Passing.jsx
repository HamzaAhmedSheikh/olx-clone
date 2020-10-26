import React, { useContext } from "react";
import MainComponent from "./mainFile";
import cardsData from "../main/cardsData";

const PassingData = () => {
  const target = cardsData[0];
  console.log(target);
  return (
    <>
      <MainComponent
        imgSrc={target.imgSrc}
        price={target.price}
        title={target.title}
        description={target.details}
        area={target.area}
        postingDate={target.upload}
      />
    </>
  );
};
export default PassingData;