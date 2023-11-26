import { useState } from "react";
const useInputValidation = (validateIncommingInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateIncommingInput(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.current.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputValidation;
