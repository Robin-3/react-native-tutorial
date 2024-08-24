import { pokeApi } from "../../config/api/pokeApi";
import { type Pokemon } from "../../domain/entities/pokemon";
import { type PokeAPIPokemonResponse } from "../../infrastructure/interfaces/pokeapi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeAPIPokemonResponse>(`/pokemon/${id}`);
    return await PokemonMapper.pokeApiPokemonToEntity(data);
  } catch (error) {
    throw new Error(`Error getting pokemon by id: ${id}`);
  }
};