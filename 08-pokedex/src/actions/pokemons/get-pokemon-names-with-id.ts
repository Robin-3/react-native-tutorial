import { pokeApi } from "../../config/api/pokeApi";
import { type PokeAPIPaginatedResponse } from "../../infrastructure/interfaces/pokeapi.interfaces";

export const getPokemonNmaesWithId = async () => {
  try {
    const url = `pokemon?limit=1000`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);
    return data.results.map((info) => ({
      id: Number(info.url.split("/")[6]),
      name: info.name
    }));
  } catch (error) {
    throw new Error("");
  }
};