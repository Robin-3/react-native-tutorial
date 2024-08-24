import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalTheme } from "../../../config/theme/global-theme";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { type Pokemon } from "../../../domain/entities/pokemon";
import { PokemonCard } from "../../components/pokemons/PokemonCard";
import { useQuery } from "@tanstack/react-query";
import { getPokemonNmaesWithId } from "../../../actions/pokemons";
import { useMemo, useState } from "react";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { top } = useSafeAreaInsets();
  const { data: pokemonNameList = [] } = useQuery({
    queryKey: ["pokemons", "all"],
    queryFn: () => getPokemonNmaesWithId()
  });

  const pokemonNameIdList = useMemo(() => {
    if (!isNaN(Number(term))) {
      const pokemon = pokemonNameList.find((pokemon) => pokemon.id === Number(term));
      return pokemon ? [pokemon] : [];
    }
    if (term.length === 0) return [];
    if (term.length < 3) return [];
    return pokemonNameList.filter((pokemon) => pokemon.name.includes(term.toLocaleLowerCase()));
  }, [term]);

  return (
    <View style={[globalTheme.globalMargin, { padding: top + 10 }]}>
      <TextInput
        placeholder="Buscar Pokémon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        value={term}
        onChangeText={setTerm}
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