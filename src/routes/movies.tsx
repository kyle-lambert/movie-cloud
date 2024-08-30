import { PageLayout } from "@/components/page-layout";
import { TMDB } from "@/services/tmdb";
import {
  getMoviesNowPlayingQueryOptions,
  getMoviesPopularQueryOptions,
  getMoviesTopRatedQueryOptions,
  getMoviesUpcomingQueryOptions,
} from "@/services/tmdb/movies";
import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";

export const Movies = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await TMDB("trending/movie/day");

      console.log({ data });
    };

    fetchData();
  }, []);

  // const [nowPlaying, popular, topRated, upcoming] = useQueries({
  //   queries: [
  //     getMoviesNowPlayingQueryOptions,
  //     getMoviesPopularQueryOptions,
  //     getMoviesTopRatedQueryOptions,
  //     getMoviesUpcomingQueryOptions,
  //   ],
  // });

  return <PageLayout>Movies</PageLayout>;
};
