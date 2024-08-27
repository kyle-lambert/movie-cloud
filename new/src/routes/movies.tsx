import { PageLayout } from "@/components/page-layout";
import {
  getMoviesNowPlayingQueryOptions,
  getMoviesPopularQueryOptions,
  getMoviesTopRatedQueryOptions,
  getMoviesUpcomingQueryOptions,
} from "@/services/tmdb/movies";
import { useQueries } from "@tanstack/react-query";

export const Movies = () => {
  const [nowPlaying, popular, topRated, upcoming] = useQueries({
    queries: [
      getMoviesNowPlayingQueryOptions,
      getMoviesPopularQueryOptions,
      getMoviesTopRatedQueryOptions,
      getMoviesUpcomingQueryOptions,
    ],
  });

  return <PageLayout>Movies</PageLayout>;
};
