import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsNavigation } from "./presentation/navigators/BottomTabsNavigation";

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigation />
    </NavigationContainer>
  );
};