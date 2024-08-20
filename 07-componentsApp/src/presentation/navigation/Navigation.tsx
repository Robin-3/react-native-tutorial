import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Animation101Screen } from "../screens/animations/Animation101Screen";
import { Animation102Screen } from "../screens/animations/Animation102Screen";

const { Navigator, Screen } = createStackNavigator();

export const Navigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="Animation101Screen" component={Animation101Screen} />
      <Screen name="Animation102Screen" component={Animation102Screen} />
    </Navigator>
  );
};