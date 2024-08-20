import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { type CastResponse } from "../../../infrastructure/interfaces/movie-db-cast.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { type Cast } from "../../entities/cast.entity";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<CastResponse>(`/${movieId}/credits`);
    return cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw new Error(`Cannot get movie cast ${movieId}`);
  }
};