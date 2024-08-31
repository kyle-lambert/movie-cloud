import { PageLayout } from "@/components/page-layout";
import {
  getMovieDetailQueryOptions,
  getTvShowDetailQueryOptions,
} from "@/services/tmdb/details";
import { useQuery } from "@tanstack/react-query";
import { redirect, useParams } from "react-router-dom";

type Params = {
  mediaType: "movie" | "tv";
  id: string;
};

export const Single = () => {
  const { mediaType, id = "" } = useParams<Params>();

  return (
    <PageLayout>
      {/* {mediaType === "movie" && (
          <Hero
            item={data}
            mediaType={mediaType}
          />
        )}
        {mediaType === "tv" && (
          <Hero
            item={data}
            mediaType={mediaType}
          />
        )} */}
      <section>
        {/* <Overview
            data={data}
            mediaType={mediaType}
          /> */}
      </section>
      <section>
        {/* {guardCredits(data.credits) && (
            <ShowcaseItems
              heading="Cast"
              items={data.credits.cast}
              mediaType="person"
            />
          )}
          {guardSimilar(data.similar) && (
            <ShowcaseItems
              heading="Similar Titles"
              items={data.similar.results}
              mediaType={mediaType}
            />
          )}
          {guardMovieCredits(data.movie_credits) && (
            <DetailsList
              heading={`Movie Credits`}
              results={data.movie_credits.cast}
              mediaType="movie"
            />
          )}
          {guardShowCredits(data.tv_credits) && (
            <DetailsList
              heading="TV Show Credits"
              results={data.tv_credits.cast}
              mediaType="tv"
            />
          )} */}
      </section>
    </PageLayout>
  );
};
