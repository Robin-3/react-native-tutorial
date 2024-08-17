import { StyleSheet, View } from "react-native";

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  },
  box1: {
    backgroundColor: "#5856d6",
    flex: 1
  },
  box2: {
    backgroundColor: "#4240a2",
    flex: 2
  },
  box3: {
    backgroundColor: "#2e2d71",
    flex: 3
  }
});