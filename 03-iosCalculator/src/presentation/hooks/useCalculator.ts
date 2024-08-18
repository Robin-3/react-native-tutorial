import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "/"
}

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("");
  const [number, setNumber] = useState<string>("0");
  const [prevNumber, setPrevNumber] = useState<string>("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const fisrtFormulaPart = formula.split(" ")[0];
      setFormula(`${fisrtFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
    setFormula("");
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
    lastOperation.current = Operator.add;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const calculateResult = () => {
    setFormula(`${calculateSubResult()}`);
    lastOperation.current = undefined;
    setPrevNumber("0");
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(" ");
    const num1 = +firstValue;
    const num2 = +secondValue;
    if (isNaN(num2)) return num1;
    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error("Operation not implemented");
    }
  };

  return {
    // Properties
    prevNumber,
    formula,
    // Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult
  };
};