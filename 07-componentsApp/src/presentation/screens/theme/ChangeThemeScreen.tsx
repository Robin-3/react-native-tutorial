import { View } from "react-native";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";

export const ChangeThemeScreen = () => {
  return (
    <CustomView margin>
      <Title safe text="Cambiar tema" />
      <Button text="Light" onPress={() => { }} />
      <View style={{}} />
      <Button text="Dark" onPress={() => { }} />
    </CustomView>
  );
};