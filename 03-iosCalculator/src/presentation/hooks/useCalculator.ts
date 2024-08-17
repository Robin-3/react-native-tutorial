import { useState } from "react";

export const useCalculator = () => {
  const [number, setNumber] = useState<string>("0");

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
    buildNumber
  };
};