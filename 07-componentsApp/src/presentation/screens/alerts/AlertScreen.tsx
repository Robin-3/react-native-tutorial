import { Alert, View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive"
      },
      { text: "OK", onPress: () => console.log('OK Pressed') }
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed')
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive"
      }
    ]);

  const showPrompt =
    Alert.prompt(
      "Alert Title",
      "My Alert Msg",
      (valor: string) => console.log({ valor }),
      "secure-text",
      "default value",
      "number-pad"
    );

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />
      <Button
        text="Alerta - 2 Botones"
        onPress={createTwoButtonAlert}
      />
      <View style={{ height: 10 }} />
      <Button
        text="Alerta - 3 Botones"
        onPress={createThreeButtonAlert}
      />
      <Button
        text="Prompt - Input"
        onPress={() => { }}
      />
    </CustomView>
  );
};