import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalTheme } from "../../../config/theme/global-theme";
import { ActivityIndicator, Text, TextInput } from "react-native-paper";
import { type Pokemon } from "../../../domain/entities/pokemon";
import { PokemonCard } from "../../components/pokemons/PokemonCard";

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[globalTheme.globalMargin, { padding: top + 10 }]}>
      <TextInput
        placeholder="Buscar Pokémon"
        mode="flat"
        autoFocus
        autoCorrect={false}
      />
      <ActivityIndicator style={{ paddingTop: 20 }} />
      <FlatList
        data={[] as Pokemon[]}
        keyExtractor={pokemon => `${pokemon.id}`}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};