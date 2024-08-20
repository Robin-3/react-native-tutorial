import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarrousel } from "../../components/movies/PosterCarrousel";
import { HorizontalCarrousel } from "../../components/movies/HorizontalCarrousel";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming
  } = useMovies();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: top + 20,
          paddingBottom: 30
        }}
      >
        <PosterCarrousel movies={nowPlaying} />
        <HorizontalCarrousel movies={popular} title="Populares" />
        <HorizontalCarrousel movies={topRated} title="Mejor calificadas" />
        <HorizontalCarrousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};