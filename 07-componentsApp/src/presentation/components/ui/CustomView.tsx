import { type StyleProp, View, type ViewStyle } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { type ReactNode } from "react";

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const CustomView = ({ style, children }: Props) => {
  return (
    <View style={[globalStyles.mainContainer, style]}>
      {children}
    </View>
  );
};