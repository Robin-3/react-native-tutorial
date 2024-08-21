import { Text, View } from "react-native";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme, colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title safe text={`Cambiar tema: ${currentTheme}`} />
      <Button text="Light" onPress={() => setTheme("light")} />
      <View style={{ height: 10 }} />
      <Button text="Dark" onPress={() => setTheme("dark")} />
      <View style={{ height: 10 }} />
      <Text style={{ color: colors.text }}>{JSON.stringify(colors, null, 2)}</Text>
    </CustomView>
  );
};