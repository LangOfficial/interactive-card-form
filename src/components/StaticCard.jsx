import React from "react";

import back from "../images/bg-card-back.png";

const StaticCard = () => {
  return (
    <img
      className="absolute top-4 halfxl:top-auto right-4 -z-10 w-80 sm:left-1/2 sm:right-auto sm:w-[21rem] halfxl:left-auto halfxl:right-0 halfxl:w-[23rem] halfxl:translate-x-1/2 halfxl:translate-y-[70%]"
      src={back}
    />
  );
};

export default StaticCard;
