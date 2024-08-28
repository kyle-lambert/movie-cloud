import { TMDB } from "@/services/tmdb";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

// https://api.themoviedb.org/3/search/multi
export const zSearch = z.object({});
export const zGetSearchResponse = z.object({});

export const getSearchQueryOptions = (query: string, page: number = 1) => {
  const searchQuery = encodeURIComponent(query);
  return queryOptions({
    queryKey: ["getSearch", query, page],
    queryFn: async ({ signal }) => {
      // zGetSearchResponse.parse(
      await TMDB(`/3/search/multi?query=${searchQuery}&page=${page}`, {
        signal,
      });
      // );
    },
  });
};
