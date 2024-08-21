import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Animation101Screen } from "../screens/animations/Animation101Screen";
import { Animation102Screen } from "../screens/animations/Animation102Screen";
import { SwitchScreen } from "../screens/switches/SwitchScreen";
import { AlertScreen } from "../screens/alerts/AlertScreen";
import { TextInputScreen } from "../screens/inputs/TextInputScreen";

const { Navigator, Screen } = createStackNavigator();

export const Navigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="Animation101Screen" component={Animation101Screen} />
      <Screen name="Animation102Screen" component={Animation102Screen} />
      <Screen name="SwitchScreen" component={SwitchScreen} />
      <Screen name="AlertScreen" component={AlertScreen} />
      <Screen name="TextInputScreen" component={TextInputScreen} />
    </Navigator>
  );
};