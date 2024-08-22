import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { PokemonScreen } from "../screens/pokemon/PokemonScreen";
import { SearchScreen } from "../screens/search/SearchScreen";

export type RootStackParams = {
  Home: undefined;
  Pokemon: { pokemonId: number; };
  Search: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Pokemon" component={PokemonScreen} />
      <Screen name="Search" component={SearchScreen} />
    </Navigator>
  );
};