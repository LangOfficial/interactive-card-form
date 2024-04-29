import React, { Dispatch, SetStateAction } from "react";

import front from "../images/bg-card-front.png";

const DynamicCard = ({dynamicText}) => {
  const cardholderName = dynamicText["cardholderName"];
  let cardNumber = dynamicText["cardNumber"];
  const expiryMonth = dynamicText["expiryMonth"];
  const expiryYear = dynamicText["expiryYear"];

  cardNumber = cardNumber.split(' ');

  return (
    <div
      className="absolute bottom-0 left-4 min-h-48 w-[20rem] translate-y-[25%] rounded-lg p-5 text-neutralC-50 sm:left-auto sm:w-[22rem] halfxl:bottom-[50%] halfxl:right-0 halfxl:translate-x-1/4 halfxl:translate-y-0 halfxl:p-7"
      style={{ backgroundImage: `url(${front})` }}
    >
      <div className="mb-10 flex items-center gap-x-3">
        <div className="h-11 w-11 rounded-full bg-neutralC-50"></div>
        <div className="h-5 w-5 rounded-full border-2 border-neutralC-50"></div>
      </div>
      <div className="mb-5 flex gap-x-3 text-xl font-medium">
        <p>{cardNumber[0] || '0000'}</p>
        <p>{cardNumber[1] || '0000'}</p>
        <p>{cardNumber[2] || '0000'}</p>
        <p>{cardNumber[3] || '0000'}</p>
      </div>
      <div className="flex">
        <p className="mr-auto text-sm">{cardholderName || "Jane Appleseed"}</p>
        <p className="text-sm">
          <span>{expiryMonth || '00'}</span>
          <span>/</span>
          <span>{expiryYear || '00'}</span>
        </p>
      </div>
    </div>
  );
};

export default DynamicCard;
