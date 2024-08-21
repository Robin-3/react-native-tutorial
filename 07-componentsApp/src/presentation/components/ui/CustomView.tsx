import { type StyleProp, View, type ViewStyle } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { useContext, type ReactNode } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({ style, children, margin = false }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        {
          backgroundColor: colors.background
        },
        margin ? globalStyles.globalMargin : null,
        style
      ]}
    >
      {children}
    </View>
  );
};