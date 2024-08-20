import { useEffect, useState } from "react";

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { loadMovie(); }, [movieId]);

  const loadMovie = () => { };

  return {
    isLoading
  };
};