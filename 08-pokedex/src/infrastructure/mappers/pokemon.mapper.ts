import { Pokemon } from "../../domain/entities/pokemon";
import { PokeAPIPokemonResponse, Sprites } from "../interfaces/pokeapi.interfaces";

export class PokemonMapper {
  static async pokeApiPokemonToEntity(data: PokeAPIPokemonResponse): Promise<Pokemon> {
    const { id, name, types: type } = data;
    const sprites = PokemonMapper.getSprites(data.sprites);
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const types = type.map(t => t.type.name);

    return {
      id,
      name,
      avatar,
      types,
      sprites
    };
  }

  static getSprites(dataSprites: Sprites): string[] {
    const sprites: string[] = [
      dataSprites.front_default,
      dataSprites.back_default,
      dataSprites.front_shiny,
      dataSprites.back_shiny,
    ];

    if (dataSprites.other?.home.front_default)
      sprites.push(dataSprites.other?.home.front_default);
    if (dataSprites.other?.['official-artwork'].front_default)
      sprites.push(dataSprites.other?.['official-artwork'].front_default);
    if (dataSprites.other?.['official-artwork'].front_shiny)
      sprites.push(dataSprites.other?.['official-artwork'].front_shiny);
    if (dataSprites.other?.showdown.front_default)
      sprites.push(dataSprites.other?.showdown.front_default);
    if (dataSprites.other?.showdown.back_default)
      sprites.push(dataSprites.other?.showdown.back_default);

    return sprites;
  }
}