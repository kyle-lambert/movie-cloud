import { motion } from "framer-motion";
import "./styles.scss";

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

type HeroProps = {
  data: {
    title: string;
    name: string;
    backdropPath: string;
  };
  mediaType: "movie" | "tv-show";
};

export const Hero = ({ data, mediaType }: HeroProps) => {
  const { backdropPath, title, name } = data;
  return (
    <section className="hero">
      <div className="hero-backdrop">
        {backdropPath ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
            alt={mediaType === "movie" ? title : name}
            className="hero-backdrop-img"
          />
        ) : null}
      </div>
      <div className="hero-info">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          {/* {mediaType === "movie" && <MovieInfo item={item} />} */}
          {/* {mediaType === "tv" && <ShowInfo item={item} />} */}
        </motion.div>
      </div>
    </section>
  );
};
