import { type StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import { type RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";

interface Props extends StackScreenProps<RootStackParams, "Details"> { }

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { } = useMovie(movieId);

  return (
    <View />
  );
};