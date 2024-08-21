import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native";
import { useAnimation } from "../../hooks/useAnimation";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Animation101Screen = () => {
  const { colors } = useContext(ThemeContext);
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
          backgroundColor: colors.primary,
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
    width: 150,
    height: 150
  }
});