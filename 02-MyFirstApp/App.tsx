import { SafeAreaView } from "react-native";
// import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen";
// import { CounterScreen } from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
// import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen";
import IonIcons from "react-native-vector-icons/Ionicons";
// import { BoxObjectModelScreeen } from "./src/presentation/screens/BoxObjectModelScreeen";
import { DimensionScreen } from "./src/presentation/screens/DimensionScreen";

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcons {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <DimensionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
