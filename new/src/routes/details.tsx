import { PageLayout } from "@/components/page-layout";

export const Details = () => {
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
