import { useEffect, useState } from "react";
import { type Movie } from "../../core/entities/movie.entity";

import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movie-db.adapter";

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upcomingMovies = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const topRatedMovies = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const popularMovies = UseCases.moviesPopularUseCase(movieDBFetcher);

    const promises = [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies];

    await Promise.allSettled(promises);
  };

  return {
    isLoading,
    nowPlaying
  };
};