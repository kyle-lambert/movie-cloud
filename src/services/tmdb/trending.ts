import { TMDB } from "@/services/tmdb";
import { zMovieResult } from "@/services/tmdb/movies";
import { zTvShowResult } from "@/services/tmdb/tv-shows";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

export const zGetTrendingMoviesResponse = z
  .object({
    results: z.array(zMovieResult),
  })
  .transform((data) => data.results);

//https://api.themoviedb.org/3/trending/movie/day
export const getTrendingMoviesQueryOptions = queryOptions({
  queryKey: ["getTrendingMovies"],
  queryFn: async ({ signal }) => {
    return zGetTrendingMoviesResponse.parse(
      await TMDB("trending/movie/day", {
        signal,
      })
    );
  },
});

export const zGetTrendingTvShowsResponse = z
  .object({
    results: z.array(zTvShowResult),
  })
  .transform((data) => data.results);

//https://api.themoviedb.org/3/trending/tv/day
export const getTrendingTvShowsQueryOptions = queryOptions({
  queryKey: ["getTrendingTvShows"],
  queryFn: async ({ signal }) => {
    return zGetTrendingTvShowsResponse.parse(
      await TMDB("trending/tv/day", {
        signal,
      })
    );
  },
});
