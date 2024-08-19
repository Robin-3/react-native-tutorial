import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { type PopularResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { type Movie } from "../../entities/movie.entity";

export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>("/popular");
    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - Popular");
  }
};