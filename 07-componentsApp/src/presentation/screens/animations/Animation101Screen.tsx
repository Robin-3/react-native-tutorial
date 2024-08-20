import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { useAnimation } from "../../hooks/useAnimation";

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  } = useAnimation();

  return (
    <View style={style.container}>
      <Animated.View
        style={{
          ...style.purpleBox,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750
          });
        }}
        style={{ marginTop: 10 }}
      >
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150
  }
});