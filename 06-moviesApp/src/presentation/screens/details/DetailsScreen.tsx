import { type StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import { type RootStackParams } from "../../navigation/Navigation";

interface Props extends StackScreenProps<RootStackParams, "Details"> { }

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;

  return (
    <View />
  );
};