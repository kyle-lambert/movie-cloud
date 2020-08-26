import React from "react";
import { motion } from "framer-motion";

import { pageTransition } from "../../../animations/variants";
import "./MoviesView.scss";

function MoviesView(props) {
  return (
    <motion.div
      key="moviesView"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="MoviesView">
      Movies
    </motion.div>
  );
}

export default MoviesView;
