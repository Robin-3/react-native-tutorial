import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigation/StackNavigator";
import { PermissionsCheker } from "./presentation/providers/PermissionsChecker";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsCheker>
        <StackNavigator />
      </PermissionsCheker>
    </NavigationContainer>
  );
};