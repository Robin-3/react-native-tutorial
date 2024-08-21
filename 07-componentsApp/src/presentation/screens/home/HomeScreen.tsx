import { View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Title } from "../../components/ui/Title";
import { MenuItem } from "../../components/ui/MenuItem";
import { Separator } from "../../components/ui/Separator";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const animationMenuItems = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "Animation101Screen"
  },
  {
    name: "Animation 102",
    icon: "albums-outline",
    component: "Animation102Screen"
  }
];

export const menuItems = [
  {
    name: "Pull to refresh",
    icon: "refresh-outline",
    component: "PullToRefreshScreen"
  },
  {
    name: "Section List",
    icon: "list-outline",
    component: "CustomSectionListScreen"
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "ModalScreen"
  },
  {
    name: "InfiniteScroll",
    icon: "download-outline",
    component: "InfiniteScrollScreen"
  },
  {
    name: "Slides",
    icon: "flower-outline",
    component: "SlidesScreen"
  },
  {
    name: "Themes",
    icon: "flask-outline",
    component: "ChangeThemeScreen"
  }
];

const uiMenuItems = [
  {
    name: "Switches",
    icon: "toggle-outline",
    component: "SwitchScreen"
  },
  {
    name: "Alerts",
    icon: "alert-circle-outline",
    component: "AlertScreen"
  },
  {
    name: "TextInputs",
    icon: "document-text-outline",
    component: "TextInputScreen"
  }
];

const menuGroups = [
  animationMenuItems,
  menuItems,
  uiMenuItems
];

export const HomeScreen = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={{ ...globalStyles.mainContainer, backgroundColor: colors.background }}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Opciones del menú" safe />
          {menuGroups.flatMap((itemGroup, indexGroup) => (
            itemGroup.map((item, index) => {
              const isLast = index === menuGroups[indexGroup].length - 1;
              return (
                <>
                  <MenuItem
                    key={`${indexGroup}-${index}`}
                    {...item}
                    isFisrt={index === 0}
                    isLast={isLast}
                  />
                  {!isLast && <Separator />}
                </>
              );
            })
          ))}
          <View style={{ marginTop: 30 }} />
        </ScrollView>
      </View>
    </View>
  );
};