import { GestureResponderEvent, Platform, Pressable, StyleSheet, Text } from "react-native";

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | null;
  onLongPress?: ((event: GestureResponderEvent) => void) | null;
  label: string;
}

export const PrimaryButton = ({ onPress, onLongPress, label }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
    >
      <Text
        style={{
          color: Platform.OS === "android" ? "white" : "#4746ab"
        }}
      >{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === "android" ? "#5856d6" : "white",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonPressed: {
    backgroundColor: Platform.OS === "android" ? "#4746ab" : "white",
  }
});
