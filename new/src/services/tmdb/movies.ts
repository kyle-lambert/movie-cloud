import { TMDB } from "@/services/tmdb";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

export const zMovieResult = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const zGetMoviesResponse = z
  .object({
    results: z.array(zMovieResult),
  })
  .transform((data) => data.results);

// https://api.themoviedb.org/3/movie/now_playing
export const getMoviesNowPlayingQueryOptions = queryOptions({
  queryKey: ["getMoviesNowPlaying"],
  queryFn: async ({ signal }) => {
    return zGetMoviesResponse.parse(
      await TMDB("/3/movie/now_playing", {
        signal,
      })
    );
  },
});

// https://api.themoviedb.org/3/movie/popular
export const getMoviesPopularQueryOptions = queryOptions({
  queryKey: ["getMoviesPopular"],
  queryFn: async ({ signal }) => {
    return zGetMoviesResponse.parse(
      await TMDB("/3/movie/popular", {
        signal,
      })
    );
  },
});

// https://api.themoviedb.org/3/movie/top_rated
export const getMoviesTopRatedQueryOptions = queryOptions({
  queryKey: ["getMoviesTopRated"],
  queryFn: async ({ signal }) => {
    return zGetMoviesResponse.parse(
      await TMDB("/3/movie/top_rated", {
        signal,
      })
    );
  },
});

// https://api.themoviedb.org/3/movie/upcoming
export const getMoviesUpcomingQueryOptions = queryOptions({
  queryKey: ["getMoviesUpcoming"],
  queryFn: async ({ signal }) => {
    return zGetMoviesResponse.parse(
      await TMDB("/3/movie/upcoming", {
        signal,
      })
    );
  },
});
