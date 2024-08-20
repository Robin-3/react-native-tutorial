import { type StackScreenProps } from "@react-navigation/stack";
import { Text } from "react-native";
import { type RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";
import { ScrollView } from "react-native-gesture-handler";

interface Props extends StackScreenProps<RootStackParams, "Details"> { }

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie } = useMovie(movieId);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movie!.poster}
        originalTitle={movie!.originalTitle}
        title={movie!.title}
      />
      <MovieDetails movie={movie!} />
    </ScrollView>
  );
};