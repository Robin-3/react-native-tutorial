import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";

const { Navigator, Screen } = createStackNavigator();

export const Navigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};