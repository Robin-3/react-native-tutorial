import { type StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import { type RootStackParams } from "../../navigator/StackNavigator";
import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../../../actions/pokemons";
import { Text } from "react-native-paper";

interface Props extends StackScreenProps<RootStackParams, "Pokemon"> { }

export const PokemonScreen = ({ route }: Props) => {
  const { pokemonId } = route.params;
  const { isLoading, data: pokemon } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemonById(pokemonId),
    staleTime: 1000 * 60 * 60 // 60min
  });

  return (
    <View>
      <Text>{pokemon?.name}</Text>
    </View>
  );
};