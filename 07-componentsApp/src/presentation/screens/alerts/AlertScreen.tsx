import { Alert, View } from "react-native";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { showPrompt } from "../../../config/adapters/prompt.adapter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const AlertScreen = () => {
  const { isDark } = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive"
      },
      { text: "OK", onPress: () => console.log('OK Pressed') }
    ], { userInterfaceStyle: isDark ? "dark" : "light" });

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
    ], { userInterfaceStyle: isDark ? "dark" : "light" });

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
    <CustomView margin>
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