import { MovieCard } from "@/components/card";
import { Hero } from "@/components/hero";
import { PageLayout } from "@/components/page-layout";
import { Showcase } from "@/components/showcase";
import { Error } from "@/routes/error";
import { Loading } from "@/routes/loading";
import { TMDB } from "@/services/tmdb";
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

  const isLoading =
    nowPlaying.isLoading ||
    popular.isLoading ||
    topRated.isLoading ||
    upcoming.isLoading;
  const isError =
    nowPlaying.isError ||
    popular.isError ||
    topRated.isError ||
    upcoming.isError;

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  const { data: nowPlayingMoviesData } = nowPlaying;
  const { data: popularMoviesData } = popular;
  const { data: topRatedMoviesData } = topRated;
  const { data: upcomingMoviesData } = upcoming;

  const heroData =
    nowPlayingMoviesData && nowPlayingMoviesData.length > 0
      ? nowPlayingMoviesData[0]
      : undefined;

  return (
    <PageLayout>
      {heroData ? (
        <Hero
          title={heroData.title}
          imageSrc={heroData.backdrop_path}
        >
          <Hero.MovieInfo data={heroData} />
        </Hero>
      ) : null}
      <section>
        <Showcase heading="Now playing">
          {nowPlayingMoviesData
            ? nowPlayingMoviesData.map((movie) => (
                <MovieCard
                  key={movie.id}
                  data={movie}
                />
              ))
            : null}
        </Showcase>
      </section>
      <section>
        <Showcase heading="Popular">
          {popularMoviesData
            ? popularMoviesData.map((movie) => (
                <MovieCard
                  key={movie.id}
                  data={movie}
                />
              ))
            : null}
        </Showcase>
      </section>
      <section>
        <Showcase heading="Top rated">
          {topRatedMoviesData
            ? topRatedMoviesData.map((movie) => (
                <MovieCard
                  key={movie.id}
                  data={movie}
                />
              ))
            : null}
        </Showcase>
      </section>
      <section>
        <Showcase heading="Upcoming">
          {upcomingMoviesData
            ? upcomingMoviesData.map((movie) => (
                <MovieCard
                  key={movie.id}
                  data={movie}
                />
              ))
            : null}
        </Showcase>
      </section>
    </PageLayout>
  );
};
