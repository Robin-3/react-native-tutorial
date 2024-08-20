import { useEffect, useState } from "react";
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movie-db.adapter";
import { type FullMovie } from "../../core/entities/movie.entity";

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => { loadMovie(); }, [movieId]);

  const loadMovie = async () => {
    const fullMovie = await UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);

    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie
  };
};