import { pokeApi } from "../../config/api/pokeApi";
import { type Pokemon } from "../../domain/entities/pokemon";

export const getPokemon = async (): Promise<Pokemon[]> => {
  try {
    const url = "/pokemon";
    const { data } = await pokeApi.get(url);

    return [];
  } catch (error) {
    throw new Error("Error getting pokemons");
  }
};