import { createStackNavigator } from "@react-navigation/stack";
import { LoadingScreen } from "../screens/loading/LoadingScreen";
import { MapScreen } from "../screens/maps/MapScreen";
import { PermissionsScreen } from "../screens/premissions/PermissionsScreen";

export type RootStackParams = {
  Loading: undefined;
  Permissions: undefined;
  Maps: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Navigator
      initialRouteName="Permissions"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" }
      }}
    >
      <Screen name="Loading" component={LoadingScreen} />
      <Screen name="Maps" component={MapScreen} />
      <Screen name="Permissions" component={PermissionsScreen} />
    </Navigator>
  );
};