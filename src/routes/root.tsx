import { PageLayout } from "@/components/page-layout";
import {
  getTrendingMoviesQueryOptions,
  getTrendingTvShowsQueryOptions,
} from "@/services/tmdb/trending";
import { useQueries } from "@tanstack/react-query";

export const Root = () => {
  const [trendingMovies, trendingTvShows] = useQueries({
    queries: [getTrendingMoviesQueryOptions, getTrendingTvShowsQueryOptions],
  });
  return <PageLayout>Root</PageLayout>;
};
