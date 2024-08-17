import { useRef, useState } from "react";

enum Operator {
  add,
  subtract,
  multiply,
  divide
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>("0");
  const [prevNumber, setPrevNumber] = useState<string>("0");

  const lastOpration = useRef<Operator>();

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
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

  const setLastNumber = () => {
    if (number.endsWith(".")) {
      setPrevNumber(`${number}0`);
    } else {
      setPrevNumber(number);
    }
    setNumber("0");
  };

  const addOperation = () => {
    setLastNumber();
    lastOpration.current = Operator.add;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOpration.current = Operator.subtract;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOpration.current = Operator.multiply;
  };

  const divideOperation = () => {
    setLastNumber();
    lastOpration.current = Operator.divide;
  };

  return {
    // Properties
    number,
    prevNumber,
    // Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation
  };
};