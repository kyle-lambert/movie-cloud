import { motion } from "framer-motion";
import "./styles.scss";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { StarRating } from "@/components/star-rating";
import {
  TrendingMoviesData,
  TrendingTvShowData,
} from "@/services/tmdb/trending";
import { getGenresById, truncate } from "@/utils";
import { FadeIn } from "@/components/fade-in";

export const variant = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

type HeroMovieInfo = {
  data: TrendingMoviesData[number];
};

const HeroMovieInfo = ({ data }: HeroMovieInfo) => {
  const {
    id,
    title = "No title",
    vote_average,
    vote_count,
    genre_ids,
    overview,
  } = data;

  return (
    <>
      <h1 className="hero-info-head">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <div className="hero-info-meta">
        <div className="hero-info-rating">
          <StarRating
            rating={vote_average}
            width={30}
          />
        </div>
        <span className="hero-info-span">{`${vote_count} Reviews`}</span>
        {genre_ids && (
          <span className="hero-info-span">{getGenresById(genre_ids)}</span>
        )}
      </div>
      {overview && (
        <p className="hero-info-overview">{truncate(overview, 50)}</p>
      )}
    </>
  );
};
HeroMovieInfo.displayName = "HeroMovieInfo";

type HeroTvShowInfo = {
  data: TrendingTvShowData[number];
};

const HeroTvShowInfo = ({ data }: HeroTvShowInfo) => {
  const {
    id,
    name = "No name",
    vote_count,
    vote_average,
    genre_ids,
    overview,
  } = data;

  return (
    <>
      <h1 className="hero-info-head">
        <Link to={`/tv/${id}`}>{name}</Link>
      </h1>
      <div className="hero-info-meta">
        <div className="hero-info-rating">
          <StarRating
            rating={vote_average}
            width={30}
          />
        </div>
        <span className="hero-info-span">{`${vote_count} Reviews`}</span>
        {genre_ids && (
          <span className="hero-info-span">{getGenresById(genre_ids)}</span>
        )}
      </div>
      {overview && <p className="hero-info-overview">{truncate(overview)}</p>}
    </>
  );
};
HeroTvShowInfo.displayName = "HeroTvShowInfo";

type HeroProps = PropsWithChildren<{
  title: string;
  imageSrc: string;
}>;

export const Hero = ({ title, imageSrc, children }: HeroProps) => {
  const backdropImageSrc = `https://image.tmdb.org/t/p/original/${imageSrc}`;
  return (
    <section className="hero">
      <div className="hero-backdrop">
        <FadeIn>
          {(onLoadComplete) =>
            imageSrc ? (
              <img
                src={backdropImageSrc}
                alt={title}
                className="hero-backdrop-img"
                onLoad={onLoadComplete}
              />
            ) : null
          }
        </FadeIn>
      </div>
      <div className="hero-info">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
Hero.displayName = "Hero";

Hero.MovieInfo = HeroMovieInfo;
Hero.TvShowInfo = HeroTvShowInfo;
