import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { globalColors } from "../theme/theme";
import { Text } from "react-native";
import { TobTabsNavigator } from "./TobTabsNavigator";
import { StackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent"
        },
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: "Tab 1",
          tabBarIcon: ({ color }) => <Text style={{ color }}>"Tab 1"</Text>
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: "Tab 2",
          tabBarIcon: ({ color }) => <Text style={{ color }}>"Tab 2"</Text>
        }}
        component={TobTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: "Tab 3",
          tabBarIcon: ({ color }) => <Text style={{ color }}>"Tab 3"</Text>
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};