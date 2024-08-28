import { PageLayout } from "@/components/page-layout";
import {
  getTvShowsAiringTodayQueryOptions,
  getTvShowsOnTheAirQueryOptions,
  getTvShowsPopularQueryOptions,
  getTvShowsTopRatedQueryOptions,
} from "@/services/tmdb/tv-shows";
import { useQueries } from "@tanstack/react-query";

export const TvShows = () => {
  const [airingToday, onTheAir, popular, topRated] = useQueries({
    queries: [
      getTvShowsAiringTodayQueryOptions,
      getTvShowsOnTheAirQueryOptions,
      getTvShowsPopularQueryOptions,
      getTvShowsTopRatedQueryOptions,
    ],
  });
  return <PageLayout>TvShows</PageLayout>;
};
