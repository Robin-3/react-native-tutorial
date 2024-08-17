import { StyleSheet, View } from "react-native";

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#28c4d9",
    justifyContent: "center",
    alignItems: "center"
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: "#5856d6",
    borderWidth: 10,
    borderColor: "white",
    position: "relative",
    top: 50
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: "#f0a23b",
    borderWidth: 10,
    borderColor: "white",
    left: -100
  }
});