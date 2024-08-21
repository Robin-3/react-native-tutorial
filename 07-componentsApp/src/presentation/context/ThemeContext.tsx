import { type PropsWithChildren, createContext } from "react";
import { ThemeColors, lightColors } from "../../config/theme/theme";

type ThemeColor = "light" | "dark";

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const setTheme = (theme: ThemeColor) => { };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: "light",
        colors: lightColors,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};