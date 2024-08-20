import { useEffect, useState } from "react";
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movie-db.adapter";
import { type FullMovie } from "../../core/entities/movie.entity";
import { type Cast } from "../../core/entities/cast.entity";

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);

  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => { loadMovie(); }, [movieId]);

  const loadMovie = async () => {
    const moviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const promises: [Promise<FullMovie>, Promise<Cast[]>] = [moviePromise, castPromise];

    const [
      movie,
      cast,
    ] = await Promise.allSettled(promises);

    setMovie(movie.status === "fulfilled" ? movie.value : undefined);
    setCast(cast.status === "fulfilled" ? cast.value : []);

    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast
  };
};