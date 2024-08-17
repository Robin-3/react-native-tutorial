import { StyleSheet, View } from "react-native";

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 35
  },
  box: {
    // flex: 1
    width: 100,
    height: 100
  },
  box1: {
    backgroundColor: "#5856d6"
  },
  box2: {
    backgroundColor: "#4240a2"
  },
  box3: {
    backgroundColor: "#2e2d71"
  },
  box4: {
    backgroundColor: "#222155"
  }
});