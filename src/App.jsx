import React, { useState, createContext, useContext, useEffect } from "react";
import "./index.css";

// COMPONENTS
import Background from "./components/Background";
import InputSection from "./components/InputSection";
import Title from "./components/Title";
import Button from "./components/Btn";
import Error from "./components/Error";

export const ConfirmFormContext = createContext(false);
export const CountInvalidContext = createContext(0);

function App() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCVC] = useState("");

  const [confirmForm, setConfirmForm] = useState(false);
  const [isReclicked, setIsReclicked] = useState(false);
  const [invalidCount, setInvalidCount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (confirmForm && invalidCount === 0) {
      setIsSuccess(true);
      console.log("success!");
    }
  }, [confirmForm, invalidCount]);

  function validateDate(text) {
    return true ? text : false;
  }

  function validateCVC(cvc) {
    if (cvc.toString().length === 3 && !isNaN(cvc)) {
      return true;
    }
    return false;
  }

  function validateCardNum(cardNum) {
    const pattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    const isValid = pattern.test(cardNum);
    return isValid;
  }

  return (
    <CountInvalidContext.Provider value={[invalidCount, setInvalidCount]}>
      <ConfirmFormContext.Provider value={[confirmForm, setConfirmForm]}>
        {isSuccess ? (
          <main className="items-center halfxl:flex">
            <Background
              dynamicText={{
                cardholderName: cardholderName,
                cardNumber: cardNumber,
                expiryMonth: expiryMonth,
                expiryYear: expiryYear,
                cvc: cvc,
              }}
            ></Background>
            <div className="flex flex-col items-center justify-center px-6 halfxl:ml-96 halfxl:w-[30%]">
              <img
                className="mb-12 mt-20"
                src="../src/images/icon-complete.svg"
                alt=""
              />
              <h1 className="mb-6 text-4xl uppercase tracking-widest">
                Thank You!
              </h1>
              <p className="mb-5 text-neutralC-500">
                We added your card details
              </p>
              <button className="w-full rounded-md bg-neutralC-800 py-3 text-neutralC-50">
                Continue
              </button>
            </div>
          </main>
        ) : (
          <main className="items-center halfxl:flex">
            <Background
              dynamicText={{
                cardholderName: cardholderName,
                cardNumber: cardNumber,
                expiryMonth: expiryMonth,
                expiryYear: expiryYear,
                cvc: cvc,
              }}
            ></Background>
            <div className="mt-14 flex flex-col gap-5 p-6 halfxl:ml-96 halfxl:w-[30%]">
              <InputSection
                title="Cardholder name"
                phText="e.g. Jane Appleseed"
                width="w-full"
                globalState={{ cardholderName, setCardholderName }}
                errorMsg="blankOnly"
              />
              <InputSection
                title="Card Number"
                phText="e.g. 1234 5678 9123 0000"
                width="w-full"
                maxLen={19}
                globalState={{ cardNumber, setCardNumber }}
                errorMsg="Wrong format, numbers only"
                validateFunc={validateCardNum}
              />
              <div className="flex items-center gap-x-3">
                <div>
                  <Title title="Exp. date (MM/YY)"></Title>
                  <div className="flex gap-x-2">
                    <InputSection
                      title=""
                      phText="MM"
                      width="w-20"
                      maxLen={2}
                      globalState={{ expiryMonth, setExpiryMonth }}
                      validateFunc={validateDate}
                    />
                    <InputSection
                      title=""
                      phText="YY"
                      width="w-20"
                      maxLen={2}
                      globalState={{ expiryYear, setExpiryYear }}
                      validateFunc={validateDate}
                    />
                  </div>
                  {/* {confirmForm && <Error message="Can't be blank"></Error>} */}
                </div>
                <div>
                  <Title title="CVC"></Title>
                  <InputSection
                    title=""
                    phText="CVC"
                    width="w-40"
                    maxLen={3}
                    errorMsg="3 numbers required"
                    validateFunc={validateCVC}
                  />
                </div>
              </div>
              <Button isReclickedState={[isReclicked, setIsReclicked]} />
            </div>
          </main>
        )}
      </ConfirmFormContext.Provider>
    </CountInvalidContext.Provider>
  );
}

export default App;
