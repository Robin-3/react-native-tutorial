import { StyleSheet, View } from "react-native";

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}></View>
      <View style={[styles.box, styles.orangeBox]}></View>
      <View style={[styles.box, styles.blueBox]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28425b"
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white"
  },
  purpleBox: {
    backgroundColor: "#5856d6"
  },
  orangeBox: {
    backgroundColor: "#f0a23b"
  },
  blueBox: {
    backgroundColor: "#28c4d9"
  }
});