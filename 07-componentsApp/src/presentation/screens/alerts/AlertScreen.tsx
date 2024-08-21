import { Alert, View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { showPrompt } from "../../../config/theme/adapters/prompt.adapter";

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

  const onShowPrompt = () => {
    showPrompt({
      title: "Enter password",
      message: "Enter your password to claim your $1.5B in lottery winnings",
      buttons: [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: password => console.log(`OK Pressed, password: ${password}`) },
      ],
      options: {
        type: "secure-text",
        cancelable: false,
        defaultValue: "test",
        placeholder: "placeholder"
      }
    });
  };

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
        onPress={onShowPrompt}
      />
    </CustomView>
  );
};