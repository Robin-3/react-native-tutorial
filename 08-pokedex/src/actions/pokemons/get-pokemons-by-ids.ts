import { type Pokemon } from "../../domain/entities/pokemon";
import { getPokemonById } from "./get-pokemon-by-id";

export const getPokemonsByIds = async (ids: number[]): Promise<Pokemon[]> => {
  try {
    const pokemonPromises = ids.map((id) => getPokemonById(id));
    const pokemons =
      (await Promise.allSettled(pokemonPromises))
        .reduce((prev: Pokemon[], current) => {
          if (current.status === "fulfilled")
            prev.push(current.value);
          return prev;
        }, []);

    return pokemons;
  } catch (error) {
    throw new Error(`Error getting pokemons by ids: ${ids}`);
  }
};