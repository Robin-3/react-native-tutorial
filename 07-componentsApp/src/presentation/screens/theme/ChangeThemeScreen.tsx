import { View } from "react-native";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ChangeThemeScreen = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title safe text="Cambiar tema" />
      <Button text="Light" onPress={() => setTheme("light")} />
      <View style={{}} />
      <Button text="Dark" onPress={() => setTheme("dark")} />
    </CustomView>
  );
};