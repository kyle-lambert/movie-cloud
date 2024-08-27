import { motion } from "framer-motion";

import "./styles.scss";

const spinTransition = {
  loop: Infinity,
  duration: 0.75,
  ease: "linear",
};

export const Spinner = () => {
  return (
    <div className="spinner">
      <motion.span
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="spinner-circle"
      />
    </div>
  );
};
