import { StyleSheet } from "react-native";

export const colors = {
  darkGray: "#2d2d2d",
  lightGray: "#9b9b9b",
  orange: "#ff9427",
  textPrimary: "#ffffff",
  textSecondary: "#666666",
  background: "#000000"
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end"
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    marginBottom: 10,
    fontWeight: "400"
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "300"
  }
});