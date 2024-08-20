import { type GestureResponderEvent, Pressable, type StyleProp, type ViewStyle, Text } from "react-native";
import { colors, globalStyles } from "../../../config/theme/theme";

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button = ({ text, style, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...globalStyles.btnPrimary,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: colors.primary
      })}
    >
      <Text style={{ ...globalStyles.btnPrimaryText, color: colors.buttonTextColor }}>
        {text}
      </Text>
    </Pressable>
  );
};