import { SafeAreaView } from "react-native";
// import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen";
import { CounterScreen } from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
