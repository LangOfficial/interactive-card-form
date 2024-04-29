import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

import Title from "./Title";
import Input from "./Input";
import Error from "./Error";

import { ConfirmFormContext } from "../App";
import { CountInvalidContext } from "../App";


const InputSection = (
  {title,
  phText,
  width,
  globalState,
  maxLen,
  errorMsg,
  validateFunc}
) => {
  const [confirmedState, setConfirmed] = useContext(ConfirmFormContext);
  const [invalidCount, setInvalidCount] = useContext(CountInvalidContext);
  const [isBlank, setIsBlank] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isBlank && confirmedState && !isValid) {
      setInvalidCount(prevCount => prevCount + 1);
    }
  }, [isBlank, confirmedState, errorMsg, isValid]);

  return (
    <div>
      <Title title={title} />
      <Input
        phText={phText}
        width={width}
        globalState={globalState}
        maxLen={maxLen}
        isBlankState={[isBlank, setIsBlank]}
        validateFunc={validateFunc}
        isValidState={[isValid, setIsValid]}
      />

      {isBlank && confirmedState && errorMsg && 
        <Error message={"Can't be blank"} />
      }
      {!isBlank && confirmedState && errorMsg !== 'blankOnly' && !isValid && <Error message={errorMsg} />}
    </div>
  );
};

export default InputSection;
