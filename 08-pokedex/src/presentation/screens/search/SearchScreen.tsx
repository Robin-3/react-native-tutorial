import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalTheme } from "../../../config/theme/global-theme";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { type Pokemon } from "../../../domain/entities/pokemon";
import { PokemonCard } from "../../components/pokemons/PokemonCard";
import { useQuery } from "@tanstack/react-query";
import { getPokemonNmaesWithId, getPokemonsByIds } from "../../../actions/pokemons";
import { useMemo, useState } from "react";
import { FullScreenLoader } from "../../components/ui/FullScreenLoader";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { top } = useSafeAreaInsets();
  const { isLoading, data: pokemonNameList = [] } = useQuery({
    queryKey: ["pokemons", "all"],
    queryFn: () => getPokemonNmaesWithId(),
    staleTime: 1000 * 60 * 60 //60 min
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

  const idList = pokemonNameIdList.map((pokemon) => pokemon.id);
  const { isLoading: isLoadingPokemons, data: pokemons = [] } = useQuery({
    queryKey: ["pokemons", "by", idList],
    queryFn: () => getPokemonsByIds(idList),
    staleTime: 1000 * 60 * 60 //60 min
  });

  if (isLoading) return <FullScreenLoader />;

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
      {isLoadingPokemons && <ActivityIndicator style={{ paddingTop: 20 }} />}
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => `${pokemon.id}`}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListFooterComponent={<View style={{ height: 150 }} />}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};;