import { TMDB } from "@/services/tmdb";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

export const zTvShowResult = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  first_air_date: z.string(),
  name: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const zGetTvShowsResponse = z
  .object({
    results: z.array(zTvShowResult),
  })
  .transform((data) => data.results);

export type TvShowsData = z.infer<typeof zGetTvShowsResponse>;

// https://api.themoviedb.org/3/tv/airing_today
export const getTvShowsAiringTodayQueryOptions = queryOptions({
  queryKey: ["getTvShowsAiringToday"],
  queryFn: async ({ signal }) => {
    zGetTvShowsResponse.parse(
      await TMDB("/tv/airing_today", {
        signal,
      })
    );
  },
});

// https://api.themoviedb.org/3/tv/on_the_air
export const getTvShowsOnTheAirQueryOptions = queryOptions({
  queryKey: ["getTvShowsOnTheAir"],
  queryFn: async ({ signal }) => {
    zGetTvShowsResponse.parse(
      await TMDB("/tv/on_the_air", {
        signal,
      })
    );
  },
});

// https://api.themoviedb.org/3/tv/popular
export const getTvShowsPopularQueryOptions = queryOptions({
  queryKey: ["getTvShowsPopular"],
  queryFn: async ({ signal }) => {
    zGetTvShowsResponse.parse(
      await TMDB("/tv/popular", {
        signal,
      })
    );
  },
});

// https://api.themoviedb.org/3/tv/top_rated
export const getTvShowsTopRatedQueryOptions = queryOptions({
  queryKey: ["getTvShowsTopRated"],
  queryFn: async ({ signal }) => {
    zGetTvShowsResponse.parse(
      await TMDB("/tv/top_rated", {
        signal,
      })
    );
  },
});
