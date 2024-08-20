import { useEffect, useState } from "react";
import { type Movie } from "../../core/entities/movie.entity";

import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movie-db.adapter";

let nowPlayingPage = 1;
let upcomingPage = 1;
let topRatedPage = 1;
let popularPage = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);

    const promises = [nowPlayingPromise, upcomingPromise, topRatedPromise, popularPromise];

    const [
      nowPlayingMovies,
      upcomingMovies,
      topRatedMovies,
      popularMovies
    ] = await Promise.allSettled(promises);

    setNowPlaying(nowPlayingMovies.status === "fulfilled" ? nowPlayingMovies.value : []);
    setUpcoming(upcomingMovies.status === "fulfilled" ? upcomingMovies.value : []);
    setTopRated(topRatedMovies.status === "fulfilled" ? topRatedMovies.value : []);
    setPopular(popularMovies.status === "fulfilled" ? popularMovies.value : []);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,
    nowPlayingNextPage: async () => {
      nowPlayingPage++;
      const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher, {
        page: nowPlayingPage
      });
      setNowPlaying(prev => [...prev, ...nowPlayingMovies]);
    },
    upcomingNextPage: async () => {
      upcomingPage++;
      const upcomingMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher, {
        page: upcomingPage
      });
      setUpcoming(prev => [...prev, ...upcomingMovies]);
    },
    topRatedNextPage: async () => {
      topRatedPage++;
      const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher, {
        page: topRatedPage
      });
      setTopRated(prev => [...prev, ...topRatedMovies]);
    },
    popularNextPage: async () => {
      popularPage++;
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
        page: popularPage
      });
      setPopular(prev => [...prev, ...popularMovies]);
    }
  };
};