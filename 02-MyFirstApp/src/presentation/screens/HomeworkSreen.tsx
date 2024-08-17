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
    backgroundColor: "#28425b",
    /// 2, 3, 7, 8, 9, 10
    // justifyContent: "center",
    /// 4, 5
    // justifyContent: "space-between",
    /// 5, 10
    // flexDirection: "row",
    /// 7, 8, 9, 10
    // alignItems: "center"
  },
  box: {
    width: 100,
    /// 5 [!height]
    height: 100,
    borderWidth: 10,
    borderColor: "white"
  },
  purpleBox: {
    backgroundColor: "#5856d6",
    /// 3, 4
    // alignSelf: "flex-end"
    /// 6
    // flex: 1
    /// 9
    // top: 100
  },
  orangeBox: {
    backgroundColor: "#f0a23b",
    /// 1
    // flex: 1
    /// 4
    // alignSelf: "center"
    /// 6
    // flex: 1
    /// 8, 9
    // left: 100
    /// 10
    // top: 50
  },
  blueBox: {
    backgroundColor: "#28c4d9",
    /// 2
    // width: "auto"
    /// 3
    // alignSelf: "center"
    /// 6
    // flex: 2
  }
});