import { StatusBar, View } from 'react-native';
import { CalculatorScreen } from "./presentation/screens/CalculatorScreen";

const App = () => {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={"black"}
      />
      <CalculatorScreen />
    </View>
  );
};

export default App;
