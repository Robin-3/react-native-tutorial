import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "../screens/home/HomeScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { CountScreen } from "../screens/count/CountScreen";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Count" component={CountScreen} />
    </Tab.Navigator>
  );
};