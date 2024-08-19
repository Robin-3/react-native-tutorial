import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { globalColors } from "../theme/theme";
import { TobTabsNavigator } from "./TobTabsNavigator";
import { StackNavigator } from "./StackNavigator";
import { IonIcon } from "../components/shared/IonIcon";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
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
          tabBarIcon: ({ color }) => <IonIcon name="accessibility-outline" color={color} />
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: "Tab 2",
          tabBarIcon: ({ color }) => <IonIcon name="airplane-outline" color={color} />
        }}
        component={TobTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: "Tab 3",
          tabBarIcon: ({ color }) => <IonIcon name="bar-chart-outline" color={color} />
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};