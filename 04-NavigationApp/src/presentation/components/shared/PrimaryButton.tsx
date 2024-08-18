import { GestureResponderEvent, Pressable, Text } from "react-native";
import { globalStyles } from "../../theme/theme";

interface Props {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={globalStyles.primaryButton}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};