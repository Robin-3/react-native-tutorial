import { Text, View } from "react-native";
import { type FullMovie } from "../../../core/entities/movie.entity";
import { Formatter } from "../../../config/helpers/formatter";
import { type Cast } from "../../../core/entities/cast.entity";
import { FlatList } from "react-native-gesture-handler";
import { CastActor } from "../cast/CastActor";

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <Text>{`${movie.rating} - ${movie.genres.join(", ")}`}</Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>Sinopsis</Text>
        <Text style={{ fontSize: 16 }}>{movie.description}</Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>Presupuesto</Text>
        <Text style={{ fontSize: 16 }}>{Formatter.currency(movie.budget)}</Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <Text style={{ fontSize: 23, marginVertical: 10, marginHorizontal: 20, fontWeight: "bold" }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={cast => `${cast.id}`}
          renderItem={({ item }) => <CastActor actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};