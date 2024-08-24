import { getColorFromImage } from "../../config/helpers/get-color";
import { Pokemon } from "../../domain/entities/pokemon";
import { PokeAPIPokemonResponse, Sprites } from "../interfaces/pokeapi.interfaces";

export class PokemonMapper {
  static async pokeApiPokemonToEntity(data: PokeAPIPokemonResponse): Promise<Pokemon> {
    const {
      id,
      name,
      types: apiTypes,
      stats: apiStats,
      game_indices,
      abilities: apiAbilities,
      moves: apiMoves
    } = data;
    const sprites = PokemonMapper.getSprites(data.sprites);
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const types = apiTypes.map((type) => type.type.name);
    const color = await getColorFromImage(avatar, "grey");
    const games = game_indices.map((game) => game.version.name);
    const stats = apiStats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
    const abilities = apiAbilities.map((ability) => ability.ability.name);
    const moves = apiMoves.map((move) => ({ name: move.move.name, level: move.version_group_details[0].level_learned_at }));

    return {
      id,
      name,
      avatar,
      types,
      sprites,
      color,
      games,
      stats,
      abilities,
      moves
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