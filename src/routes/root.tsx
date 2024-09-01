import { MovieCard, TvShowCard } from "@/components/card";
import { Hero } from "@/components/hero";
import { PageLayout } from "@/components/page-layout";
import { Showcase } from "@/components/showcase";
import { Error } from "@/routes/error";
import { Loading } from "@/routes/loading";
import {
  getTrendingMoviesQueryOptions,
  getTrendingTvShowsQueryOptions,
} from "@/services/tmdb/trending";
import { useQueries } from "@tanstack/react-query";

export const Root = () => {
  const [trendingMovies, trendingTvShows] = useQueries({
    queries: [getTrendingMoviesQueryOptions, getTrendingTvShowsQueryOptions],
  });

  const isLoading = trendingMovies.isLoading || trendingTvShows.isLoading;
  const isError = trendingMovies.isError || trendingTvShows.isError;

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  const { data: trendingMovieData } = trendingMovies;
  const { data: trendingTvShowsData } = trendingTvShows;

  const heroData =
    trendingMovieData && trendingMovieData.length > 0
      ? trendingMovieData[0]
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
        <Showcase heading="Trending movies">
          {trendingMovieData
            ? trendingMovieData.map((movie) => (
                <MovieCard
                  key={movie.id}
                  data={movie}
                />
              ))
            : null}
        </Showcase>
      </section>
      <section>
        <Showcase heading="Trending tv shows">
          {trendingTvShowsData
            ? trendingTvShowsData.map((tvShow) => (
                <TvShowCard
                  key={tvShow.id}
                  data={tvShow}
                />
              ))
            : null}
        </Showcase>
      </section>
    </PageLayout>
  );
};
