import { GestureResponderEvent, Pressable, Text } from "react-native";
import { colors, styles } from "../../config/theme/app-theme";

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  colorTextInverse?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  colorTextInverse = false,
  onPress
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1
      })}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: colorTextInverse ? colors.inverseTextPrimary : colors.textPrimary
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};