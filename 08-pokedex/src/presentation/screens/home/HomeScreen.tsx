import { useQuery } from "@tanstack/react-query";
import { FlatList, StyleSheet, View } from "react-native";
import { getPokemons } from "../../../actions/pokemons";
import { PokeballBG } from "../../components/ui/PokeballBg";
import { Text } from "react-native-paper";
import { globalTheme } from "../../../config/theme/global-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonCard } from "../../components/pokemons/PokemonCard";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, data: pokemons = [] } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60 //60 min
  });

  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBG style={styles.imgPosition} />
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => `${pokemon.id}`}
        ListHeaderComponent={() => <Text variant="displayMedium">Pókedex</Text>}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgPosition: {
    position: "absolute",
    top: -100,
    right: -100
  }
});