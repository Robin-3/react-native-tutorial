import { pokeApi } from "../../config/api/pokeApi";
import { type Pokemon } from "../../domain/entities/pokemon";
import {
  type PokeAPIPokemonResponse,
  type PokeAPIPaginatedResponse
} from "../../infrastructure/interfaces/pokeapi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
  try {
    const offset = page * limit; // basado en cuantos elementos estoy pidiendo
    const url = `/pokemon?offset=${offset}&limit=${limit}`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map((info) => {
      return pokeApi.get<PokeAPIPokemonResponse>(info.url);
    });

    const pokeApiPokemons =
      (await Promise.allSettled(pokemonPromises))
        .reduce((prev: Promise<Pokemon>[], current) => {
          if (current.status === "fulfilled")
            prev.push(PokemonMapper.pokeApiPokemonToEntity(current.value.data));
          return prev;
        }, []);

    const pokemons =
      (await Promise.allSettled(pokeApiPokemons))
        .reduce((prev: Pokemon[], current) => {
          if (current.status === "fulfilled") prev.push(current.value);
          return prev;
        }, []);

    return pokemons;
  } catch (error) {
    throw new Error("Error getting pokemons");
  }
};