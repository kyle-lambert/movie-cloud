import { TMDB } from "@/services/tmdb";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

// https://api.themoviedb.org/3/movie/{movie_id}
export const zMovieDetail = z.object({});
export const zGetMovieDetailResponse = z.object({});

export type MovieDetailsData = z.infer<typeof zGetMovieDetailResponse>;

export const getMovieDetailQueryOptions = (
  movie_id: string,
  enabled: boolean = true
) =>
  queryOptions({
    enabled,
    queryKey: ["getMovieDetail", movie_id],
    queryFn: async ({ signal }) => {
      // zGetMovieDetailResponse.parse(
      await TMDB(`/movie/${movie_id}?append_to_response=credits,similar`, {
        signal,
      });
      // );
    },
  });

// https://api.themoviedb.org/3/tv/{series_id}
export const zTvShowDetail = z.object({});
export const zGetTvShowDetailResponse = z.object({});

export type TvShowDetailData = z.infer<typeof zGetTvShowDetailResponse>;

export const getTvShowDetailQueryOptions = (
  series_id: string,
  enabled: boolean = true
) =>
  queryOptions({
    enabled,
    queryKey: ["getTvShowDetail", series_id],
    queryFn: async ({ signal }) => {
      // zGetTvShowDetailResponse.parse(
      await TMDB(
        `/tv/${series_id}?append_to_response=credits,episode_groups,similar`,
        {
          signal,
        }
      );
      // );
    },
  });

// https://api.themoviedb.org/3/person/{person_id}
export const zPersonDetail = z.object({});
export const zGetPersonDetailResponse = z.object({});

export const getPersonDetailQueryOptions = (
  person_id: string,
  enabled: boolean = true
) =>
  queryOptions({
    enabled,
    queryKey: ["getPersonDetail", person_id],
    queryFn: async ({ signal }) => {
      // zGetPersonDetailResponse.parse(
      await TMDB(
        `/person/${person_id}?append_to_response=movie_credits,tv_credits`,
        {
          signal,
        }
      );
      // );
    },
  });
