import 'react-native-gesture-handler';
import { Navigation } from "./presentation/navigation/Navigation";
import { ThemeProvider } from "./presentation/context/ThemeContext";

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};