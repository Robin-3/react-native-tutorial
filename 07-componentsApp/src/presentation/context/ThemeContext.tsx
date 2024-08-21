import { type PropsWithChildren, createContext, useState, useEffect } from "react";
import { ThemeColors, darkColors, lightColors } from "../../config/theme/theme";
import { AppState, Appearance, useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";

type ThemeColor = "light" | "dark";

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>("light");
  const colorScheme = useColorScheme();

  const isDark = currentTheme === "dark";
  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    if (colorScheme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, [colorScheme]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === "dark" ? "dark" : "light");
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          colors,
          isDark,
          setTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>

  );
};