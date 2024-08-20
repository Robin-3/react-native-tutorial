import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";

const { Navigator, Screen } = createStackNavigator();

export const Navigation = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};