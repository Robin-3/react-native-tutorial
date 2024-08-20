import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { useRef } from "react";

export const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.elastic(1)
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start(() => animatedTop.resetAnimation());
  };

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
      <Pressable onPress={fadeIn} style={{ marginTop: 10 }}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={fadeOut} style={{ marginTop: 10 }}>
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