import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { type MovieResponse } from "../../../infrastructure/interfaces/movie-db-movie.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { type FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
  try {
    const movieById = await fetcher.get<MovieResponse>(`/${movieId}`);
    return MovieMapper.fromMovieDBToEntity(movieById);
  } catch (error) {
    console.log(error);
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};