import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { getPokemons } from "../../../actions/pokemons";
import { ActivityIndicator } from "react-native-paper";

export const HomeScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(),
    staleTime: 1000 * 60 * 60 //60 min
  });

  return (
    <View>
      {isLoading && <ActivityIndicator />}
    </View>
  );
};