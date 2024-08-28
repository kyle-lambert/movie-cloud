import { StarRating } from "@/components/star-rating";
import { Link } from "react-router-dom";

import "./styles.scss";

type MovieCardProps = {
  data: any;
};

export const MovieCard = ({ data }: MovieCardProps) => {
  return (
    <div className="card">
      <div className="card-poster">
        <Link
          className="card-poster-link"
          to={`/person/${data.id}`}
        >
          {/* {data.profile_path ? (
              <FadeIn>
                {(handleOnLoad) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
                    alt={data.name}
                    className="card-poster-img"
                    onLoad={handleOnLoad}
                  />
                )}
              </FadeIn>
            ) : (
              <Placeholder />
            )} */}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{data.name}</p>
        </div>
        <div className="card-line card-line-two">
          {data.character && <p className="card-text">{data.character}</p>}
        </div>
      </div>
    </div>
  );
};

type TvShowCardProps = {
  data: any;
};
export const TvShowCard = ({ data }: TvShowCardProps) => {
  return (
    <div className="card">
      <div className="card-poster">
        <Link
          className="card-poster-link"
          to={`/tv/${data.id}`}
        >
          {/* {data.poster_path ? (
              <FadeIn>
                {(handleOnLoad) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt={data.name}
                    className="card-poster-img"
                    onLoad={handleOnLoad}
                  />
                )}
              </FadeIn>
            ) : (
              <Placeholder />
            )} */}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{data.name}</p>
        </div>
        <div className="card-line card-line-two">
          <StarRating rating={data.vote_average / 2} />
          <span>{data.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

type PersonCardProps = {
  data: any;
};

export const PersonCard = ({ data }: PersonCardProps) => {
  return (
    <div className="card">
      <div className="card-poster">
        <Link
          className="card-poster-link"
          to={`/person/${data.id}`}
        >
          {/* {data.profile_path ? (
              <FadeIn>
                {(handleOnLoad) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
                    alt={data.name}
                    className="card-poster-img"
                    onLoad={handleOnLoad}
                  />
                )}
              </FadeIn>
            ) : (
              <Placeholder />
            )} */}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{data.name}</p>
        </div>
        <div className="card-line card-line-two">
          {data.character && <p className="card-text">{data.character}</p>}
        </div>
      </div>
    </div>
  );
};
