import { Animated, PanResponder, StyleSheet, View } from "react-native";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Animation102Screen = () => {
  const { colors } = useContext(ThemeContext);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y
      }
    ], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
      }).start();
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...pan.getLayout(), ...styles.purpleBox, backgroundColor: colors.primary }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderRadius: 4
  }
});