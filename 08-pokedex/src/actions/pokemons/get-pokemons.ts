import { pokeApi } from "../../config/api/pokeApi";
import { type Pokemon } from "../../domain/entities/pokemon";
import {
  type PokeAPIPokemonResponse,
  type PokeAPIPaginatedResponse
} from "../../infrastructure/interfaces/pokeapi.interfaces";

export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
  try {
    const offset = page * limit; // basado en cuantos elementos estoy pidiendo
    const url = `/pokemon?offset=${offset}&limit=${limit}`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map((info) => {
      return pokeApi.get<PokeAPIPokemonResponse>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);

    return [];
  } catch (error) {
    throw new Error("Error getting pokemons");
  }
};