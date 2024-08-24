import { Image, Pressable, StyleSheet, View } from "react-native";
import { type Pokemon } from "../../../domain/entities/pokemon";
import { Card, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import { FadeInImage } from "../ui/FadeInImage";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParams } from "../../navigator/StackNavigator";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, color, name, avatar, types } = pokemon;
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [typeIndex, setTypeIndex] = useState<number>(0);

  useEffect(() => {
    if (types.length === 1) return;

    setTimeout(() => {
      const newTypeIndex = (typeIndex + 1) % types.length;
      setTypeIndex(newTypeIndex);
    }, 2000);
  }, [typeIndex]);

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => navigation.navigate("Pokemon", { pokemonId: id })}
    >
      <Card
        style={[styles.cardContainer, { backgroundColor: color }]}
      >
        <Text variant="bodyLarge" lineBreakMode="middle">
          {`${name}\n#${id}`}
        </Text>
        <View style={styles.pokeballContainer}>
          <Image
            source={require("../../../assets/pokeball-light.png")}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage
          uri={avatar}
          style={styles.pokemonImage}
        />
        <Text style={[styles.name, { marginTop: 35 }]}>
          {types[typeIndex]}
        </Text>
      </Card>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: "grey",
    height: 120,
    flex: 0.5,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  name: {
    color: "white",
    top: 10,
    left: 10
  },
  pokeball: {
    width: 100,
    height: 100,
    right: -25,
    top: -25,
    opacity: 0.4
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -15,
    top: -30
  },
  pokeballContainer: {
    alignItems: "flex-end",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    opacity: 0.5
  }
});