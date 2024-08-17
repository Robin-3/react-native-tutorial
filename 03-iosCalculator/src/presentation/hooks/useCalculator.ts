import { useState } from "react";

export const useCalculator = () => {
  const [number, setNumber] = useState<string>("0");

  const clean = () => {
    setNumber("0");
  };

  const deleteOperation = () => {
    setNumber([...number].filter((n, i) => i !== number.length - 1).join(""));
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      setNumber([...number].filter((n, i) => i !== 0).join(""));
    } else {
      setNumber(`-${number}`);
    }
  };

  const buildNumber = (numberString: string) => {
    if (numberString === "." && number.includes(".")) return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        setNumber(number + numberString);
        return;
      }
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
      if (numberString === "0" && number.includes(".")) {
        setNumber(number + numberString);
        return;
      }
      if (numberString !== "0" && !number.includes(".") && number.includes("-")) {
        setNumber(`-${numberString}`);
        return;
      }
      if (numberString !== "0" && !number.includes(".")) {
        setNumber(numberString);
        return;
      }
    }
    setNumber(number + numberString);
  };

  return {
    // Properties
    number,
    // Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign
  };
};