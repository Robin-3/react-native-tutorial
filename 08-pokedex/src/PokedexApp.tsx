import "react-native-gesture-handler";
import { StackNavigator } from "./presentation/Navigator/StackNavigator";
import { ThemeContextProvider } from "./presentation/context/ThemeContext";

export const PokedexApp = () => {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
};