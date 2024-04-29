import React, { useContext, useEffect, useState } from "react";
import { ConfirmFormContext } from "../App";

const Input = ({
  phText,
  width,
  globalState = null,
  maxLen,
  isBlankState,
  isValidState,
  validateFunc,
}) => {
  const [confirmedState] = useContext(ConfirmFormContext);
  const [isBlank, setIsBlank] = isBlankState;
  const [isValid, setIsValid] = isValidState;
  const [value, setValue] = useState("");

  let setText = "";
  if (globalState) {
    setText = Object.values(globalState)[1];
  }

  useEffect(() => {
    if (validateFunc) {
      const validRes = validateFunc(value);
      setIsValid(validRes);
    }
  }, [value, confirmedState]);

  function onHandleChange(e) {
    if (e.target.value.length === 0) {
      setIsBlank(true);
    } else {
      setIsBlank(false);
    }

    if (setText) {
      setText(e.target.value);
    }
  }

  return (
    <input
      className={`${width} rounded-md border-2 border-neutralC-200 px-3 py-2 ${
        (isBlank || (!isValid && validateFunc)) && confirmedState
          ? "border-primary-400"
          : ""
      }`}
      type="text"
      placeholder={phText}
      {...(maxLen && { maxLength: maxLen })}
      onChange={(e) => {
        onHandleChange(e);
        setValue(e.target.value);
      }}
      onClick={() => setConfirmed(false)}
    />
  );
};

export default Input;
