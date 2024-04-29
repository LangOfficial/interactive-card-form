import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { ConfirmFormContext } from "../App";
import { CountInvalidContext } from "../App";

const Btn = () => {
  const [confirmForm, setConfirmForm] = useContext(ConfirmFormContext);
  const [invalidCount, setInvalidCount] = useContext(CountInvalidContext);

  return (
    <button
      className="w-full rounded-md bg-neutralC-800 py-3 text-neutralC-50"
      onClick={() => {
        setConfirmForm(true);
        setInvalidCount(0);
      }}
    >
      Confirm
    </button>
  );
};

export default Btn;
