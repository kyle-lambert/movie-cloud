import { StarRating } from "@/components/star-rating";
import { Link } from "react-router-dom";

import "./styles.scss";
import { MoviesData } from "@/services/tmdb/movies";
import { TvShowsData } from "@/services/tmdb/tv-shows";
import { Placeholder } from "@/components/placeholder";
import { FadeIn } from "@/components/fade-in";

type MovieCardProps = {
  data: MoviesData[number];
};

export const MovieCard = ({ data }: MovieCardProps) => {
  const { id, poster_path, title, vote_average } = data;
  return (
    <div className="card">
      <div className="card-poster">
        <Link
          className="card-poster-link"
          to={`/movie/${id}`}
        >
          {data.poster_path ? (
            <FadeIn>
              {(onLoadComplete) => (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  className="card-poster-img"
                  onLoad={onLoadComplete}
                />
              )}
            </FadeIn>
          ) : (
            <Placeholder />
          )}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{title}</p>
        </div>
        <div className="card-line card-line-two">
          <StarRating rating={vote_average} />
          <span>{vote_average}</span>
        </div>
      </div>
    </div>
  );
};

type TvShowCardProps = {
  data: TvShowsData[number];
};
export const TvShowCard = ({ data }: TvShowCardProps) => {
  const { id, poster_path, name, vote_average } = data;
  return (
    <div className="card">
      <div className="card-poster">
        <Link
          className="card-poster-link"
          to={`/tv/${id}`}
        >
          {poster_path ? (
            <FadeIn>
              {(onLoadComplete) => (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={name}
                  className="card-poster-img"
                  onLoad={onLoadComplete}
                />
              )}
            </FadeIn>
          ) : (
            <Placeholder />
          )}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{name}</p>
        </div>
        <div className="card-line card-line-two">
          <StarRating rating={vote_average} />
          <span>{vote_average}</span>
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
          {data.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
              alt={data.name}
              className="card-poster-img"
              // onLoad={handleOnLoad}
            />
          ) : (
            <Placeholder />
          )}
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
