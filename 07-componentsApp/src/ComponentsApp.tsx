import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./presentation/navigation/Navigation";

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};